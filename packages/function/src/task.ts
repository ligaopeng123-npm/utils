import { isFunction, isPromise } from "@gaopeng123/utils.types";

/**
 * 并行执行promise 根据配置设置最大并行数，并将结果组装返回
 * @param promises
 * @param opts:{
 *   taskCont: number,  // 最大并行数
 *   callback?: (result: unknown, index: number) => unknown // 回调函数
 * }
 */
export const promiseScheduler = (promises: Array<() => Promise<unknown>>, opts?: { taskCont: number, callback?: (result: unknown, index: number) => unknown }) => {
    const newPromises = [...promises];
    const results: Array<{ result: unknown, type: 'error' | 'success' }> = [];
    return new Promise((resolve, reject) => {
        let index = 0;
        let resultIndex = 0; // 标记结果
        let resultsHasValue = 0; // 标记结果是否有值，用于返回判断
        const { callback: cb } = opts || {};
        const { taskCont } = Object.assign({ taskCont: 5 }, opts);
        const next = () => {
            while (index < taskCont && newPromises.length) {
                index++; // 循环判断
                const currentPromise: any = newPromises.shift();
                const callBack = ({
                    result,
                    type
                }: { result: unknown, type: 'error' | 'success' }, currentIndex: number) => {
                    results[currentIndex] = { result: cb ? cb(result, currentIndex) : result, type };
                    resultsHasValue++;
                    if (resultsHasValue === promises.length) {
                        resolve(results);
                    } else {
                        index--;
                        next();
                    }
                }

                const currentPromiseFn = currentPromise();
                currentPromiseFn.resultIndex = resultIndex;
                currentPromiseFn.then((res: unknown) => {
                    callBack({ result: res, type: 'success' }, currentPromiseFn.resultIndex);
                }).catch((res: unknown) => {
                    callBack({ result: res, type: 'error' }, currentPromiseFn.resultIndex);
                });
                resultIndex++;
            }
        }
        next();
    });
}

/**
 * 并发任务管理器
 * 单个任务addTask
 * 多个任务all
 * 通过on('end', callBack) // 监听结束事件
 */
type Task = () => Promise<unknown> | unknown; //返回值可以是一个promise或者一个普通函数
export class PromiseTasks {
    promises: Array<{ task: Task, callBack?: (val: unknown, index: number) => unknown, resolve: (value: unknown) => void, reject: (reason?: any) => void }>;
    results: Array<{ result: unknown, type: 'error' | 'success' }> = [];
    callBack: Array<{ event: 'end', callBack: Function }> = [];
    taskCont: number;
    index: number = 0; // 标记并行任务数
    currentIndex: number = 0; // 当前正在执行的下标
    hasResultsIndex: number = 0; // 已经返回了多少结果的下标

    constructor(taskCont?: number) {
        this.taskCont = taskCont || 5;
        this.promises = [];
    }

    init() {
        this.results = [];
        this.index = 0;
        this.currentIndex = 0;
        this.hasResultsIndex = 0;
        this.promises = [];
    }

    _createTask(task: Task, callBack?: <T>(val: T, index: number) => T, afterCreate?: Function) {
        return new Promise((resolve, reject) => {
            const currentIndex = this.currentIndex;
            const _callBack = callBack ? callBack : <T>(value: T, index: number): T => { return value };
            const checkTask = () => {
                if (this.promises.length === 0 && this.hasResultsIndex === this.currentIndex - 1) {
                    this.end();
                }
            }
            this.promises.push({
                resolve: (val) => {
                    this.results[currentIndex] = _callBack({ result: val, type: 'success' }, currentIndex);
                    resolve(val);
                    checkTask();
                }, reject: (err) => {
                    this.results[currentIndex] = _callBack({ result: err, type: 'error' }, currentIndex);
                    reject(err);
                    checkTask();
                }, task
            });
            if (afterCreate) afterCreate();
            this.currentIndex++;
        });
    }

    addTask(task: Task, callBack?: <T>(val: T, index: number) => T) {
        return this._createTask(task, callBack, () => this.run());
    }

    run() {
        while (this.promises.length && this.index < this.taskCont) {
            this.index++; // 循环判断
            const { task, resolve, reject } = this.promises.shift();
            const taskReturn = task();
            const next = () => {
                this.index--;
                this.run();
                this.hasResultsIndex++;
            }
            if (isPromise(taskReturn)) {
                (taskReturn as Promise<unknown>).then(resolve, reject).finally(() => {
                    next();
                }).catch((err) => {
                    console.log('err', err);
                });
            } else {
                try {
                    resolve(taskReturn);
                } catch (e) {
                    reject(e);
                }
                next();
            }
        }
    }

    all(tasks: Array<Task>, callBack?: <T>(val: T, index: number) => T) {
        this.init();
        tasks.forEach((task, index) => {
            this.addTask(task, callBack).catch((err) => {
            }).then();
        });
        this.run();
    }

    on(event: 'end', callBack: Function) {
        this.callBack.push({ event, callBack });
    }

    eventLoop(event: 'end') {
        this.callBack.forEach(({ event: _event, callBack }) => {
            if (_event === event) {
                callBack(this.results);
            }
        });
    }

    end() {
        this.eventLoop('end');
    }
}
/**
 * 任务分片，将耗时任务拆解 在空闲时间执行 避免卡顿
 */
export class FreeTasks {
    tasks: Array<Function> = [];
    constructor() {
        this.tasks = [];
    }

    addTask(task: Function) {
        this.tasks.push(task);
        this.run();
    }

    run() {
        if (this.tasks.length === 0) return;
        // @ts-ignore
        if (window.requestIdleCallback) {
            // @ts-ignore
            window.requestIdleCallback((idle) => {
                while (idle.timeRemaining() > 0 && this.tasks.length) {
                    const task: Function = this.tasks.shift();
                    if (isFunction(task)) {
                        task();
                    }
                }
                // 下次接着处理
                if (this.tasks.length && idle.timeRemaining() <= 0) {
                    this.run();
                }
            });
        }
    }
}

/**
 * 消除异步传染性
 */
type AsyncToSyncPromise = Promise<unknown> & { status: 'fulfilled' | 'rejected' | 'pending', value: unknown, reason: unknown };
export class AsyncToSync {
    useIndex: number = 0; // 标记use执行的顺序
    promiseIndex: number = 0; // 标记缓存的位置
    promiseCache: Array<AsyncToSyncPromise> = [];
    constructor() {
        this.useIndex = 0;
        this.promiseCache = [];
        this.promiseIndex = 0;
    }

    run(fn: Function) {
        try {
            this.useIndex = 0;
            fn();
        } catch (error) {
            if (error instanceof Promise) {
                error.then((res) => {
                    this.promiseCache[this.promiseIndex] = error as AsyncToSyncPromise;
                    this.promiseIndex++;
                    this.run(fn)
                });
            }
        }
    }

    use(_promise: Promise<unknown>) {
        const promise = (this.promiseCache[this.useIndex] || _promise) as AsyncToSyncPromise;
        this.useIndex++;
        if (promise.status === 'fulfilled') {
            return promise.value;
        } else if (promise.status === 'rejected') {
            throw promise.reason;
        } else if (promise.status === 'pending') {
            throw promise;
        } else {
            promise.status = 'pending';
            promise.then(
                result => {
                    promise.status = 'fulfilled';
                    promise.value = result;
                },
                reason => {
                    promise.status = 'rejected';
                    promise.reason = reason;
                },
            );
            throw promise;
        }
    }
}