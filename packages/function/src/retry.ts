/**********************************************************************
 *
 * @模块名称: retry
 *
 * @模块作用: retry
 *
 * @创建人: pgli
 *
 * @date: 2024/2/17 4:12 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isPromise } from "@gaopeng123/utils.types";

// RetryConfig
export type RetryConfig = {
    max?: number; // 重试次数默认 3
    timeout?: number; // 延时时间 默认 0
}
export type RetryPromise = (fn: any, config?: RetryConfig) => Promise<unknown>;
/**
 * promise函数重试次数
 * @param fn
 * @param config
 */
const retry: RetryPromise = (fn, config) => {
    return new Promise((resolve, reject) => {
        let { max, timeout } = Object.assign({ max: 3, timeout: 0 }, config);
        const loop = () => {
            const _fnReturn = fn();
            const retryFn = (err: any) => {
                if (max--) {
                    timeout ? setTimeout(loop, timeout) : loop();
                } else {
                    reject(err);
                }
            }
            if (isPromise(_fnReturn)) {
                _fnReturn.then(resolve).catch(retryFn);
            } else {
                throw new TypeError('不是 Promise')
            }
        }
        loop();
    });
}

export default retry;
/**
 * 并行执行promise 根据配置设置最大并行数，并将结果组装返回
 * @param promises
 * @param opts:{
 *   concurrency: number,  // 最大并行数
 *   callback?: (result: unknown, index: number) => unknown // 回调函数
 * }
 */
export const promiseScheduler = (promises: Array<() => Promise<unknown>>, opts?: { concurrency: number, callback?: (result: unknown, index: number) => unknown }) => {
    const newPromises = [...promises];
    const results: Array<{ result: unknown, type: 'error' | 'success' }> = [];
    return new Promise((resolve, reject) => {
        let index = 0;
        let resultIndex = 0; // 标记结果
        let resultsHasValue = 0; // 标记结果是否有值，用于返回判断
        const { callback: cb } = opts || {};
        const { concurrency } = Object.assign({ concurrency: 5 }, opts);
        const next = () => {
            while (index < concurrency && newPromises.length) {
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