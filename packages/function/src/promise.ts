/**********************************************************************
 *
 * @模块名称: promise
 *
 * @模块作用: promise
 *
 * @创建人: pgli
 *
 * @date: 2024/7/9 5:10 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/

// 写个promise的简单实现
const _Promise = function (fn: Function) {
    const me = this;
    me.status = 'pending';
    me.value = undefined; // 数据
    me.error = undefined;
    me.onResolveCallbacks = [];    // 存放成功回调函数
    me.onRejectedCallbacks = [];     // 存放失败回调函数

    const resolve = (value: any) => {
        if (me.status === 'pending') {
            me.status = 'fulfilled';
            me.value = value;    // 成功状态
            me.onResolveCallbacks.forEach((_fn: Function) => _fn(value));
        }
    }

    const reject = (value: any) => {
        if (me.status === 'pending') {
            me.status = 'rejected';
            me.error = value;    // 成功状态
            me.onRejectedCallbacks.forEach((_fn: Function) => _fn(value));
        }
    }

    try {
        fn(resolve, reject);
    } catch (err) {
        reject(err)
    }
}

_Promise.prototype.then = function (onResolve: Function, onRejected: Function) {
    const me = this;
    //@ts-ignore 由于promise可以无限调用 因此返回值也得是个promise
    return new _Promise((resolve, reject) => {
        const checkPromise = (_p: any, resolve: Function, reject: Function) => {
            // 如果then里面返回个promise 则执行then
            if (_p instanceof _Promise) {
                // @ts-ignore
                _p.then(resolve, reject);
            } else {
                resolve(_p);
            }
        };
        // 成功回调
        if (me.status === 'fulfilled') {
            checkPromise(onResolve(me.value), resolve, reject);
        }
        // 失败回调
        if (me.status === 'rejected') {
            checkPromise(onRejected(me.value), resolve, reject);
        }
        // 等待状态
        if (me.status === 'pending') {
            me.onResolveCallbacks.push(() => checkPromise(onResolve(me.value), resolve, reject));
            me.onRejectedCallbacks.push(() => checkPromise(onRejected(me.error), resolve, reject));
        }
    });
}


class newPromise {
    value: any;
    error: any;
    status: 'pending' | 'fulfilled' | 'rejected';
    onResolveCallbacks: Function[];    // 存放成功回调函数
    onRejectedCallbacks: Function[];     // 存放失败回调函数
    constructor(executor: (resolve: (value: any) => void, reject: (value: any) => void) => void | Promise<any>) {
        this.status = 'pending';
        this.value = null; // 数据
        this.error = null;
        this.onResolveCallbacks = [];    // 存放成功回调函数
        this.onRejectedCallbacks = [];     // 存放失败回调函数

        const resolve = (value: any) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onResolveCallbacks.forEach((_fn: Function) => _fn(value));
            }
        }

        const reject = (value: any) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.error = value;
                this.onRejectedCallbacks.forEach((_fn: Function) => _fn(value));
            }
        }

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }

    // 由于promise可以无限调用 因此then返回值也得是个promise
    then(onResolve: Function, onRejected?: Function) {
        const me = this;
        // onRejected 可能为空
        onRejected = onRejected || ((err: any) => {
            throw err;
        });
        return new newPromise((resolve, reject) => {
            // 确定返回值 如果是个promise 则执行then 否则直接将值返回
            const checkPromise = (_p: any, resolve: Function, reject: Function) => {
                if (_p instanceof newPromise) {
                    _p.then(resolve, reject);
                } else {
                    resolve(_p);
                }
            };
            // 成功回调
            if (me.status === 'fulfilled') {
                checkPromise(onResolve(me.value), resolve, reject);
            }
            // 失败回调
            if (me.status === 'rejected') {
                checkPromise(onRejected(me.value), resolve, reject);
            }
            // 等待状态
            if (me.status === 'pending') {
                me.onResolveCallbacks.push(() => checkPromise(onResolve(me.value), resolve, reject));
                me.onRejectedCallbacks.push(() => checkPromise(onRejected(me.error), resolve, reject));
            }
        });
    }

    catch(onRejected: Function) {
        this.then(null, onRejected);
    }

    static all = (promises: Array<unknown>) => {
        let _resolve: Function;
        let _reject: Function;
        const p = new Promise((resolve, reject) => {
            _resolve = resolve;
            _reject = reject;
        });

        if (promises.length === 0) {
            _resolve([]);
        }

        let index = 0;
        let count = 0;
        const result: Array<unknown> = [];
        for (const promise of promises) {
            const currentIndex = index; // 避免循环改变index 导致顺序不对
            index++;
            Promise.resolve(promise).then((value) => {
                result[currentIndex] = value;
                count++;
                if (count === promises.length) {
                    _resolve(result);
                }
            }).catch((err) => {
                _reject(err);
            })
        }

        return p;
    }
}


new newPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 1000);
}).then((res: any) => {
    console.log(111, res)
    return new newPromise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 1000);
    });
}).then((res: any) => {
    console.log(222, res)
}).catch((err: any) => {
    console.log(333, err)
})


newPromise.all([1, ``, Promise.resolve(2),
    new Promise((resolve, reject) => {setTimeout(() => resolve(3), 1000)}),
    Promise.reject('error all')])
    .then((res) => {
    console.log(444, res)
}).catch((err) => {
    console.log(err)
})
