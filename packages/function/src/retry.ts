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
import { sleep } from "./delay";

// RetryConfig
export type RetryConfig = {
    max?: number; // 重试次数默认 3
    timeout?: number; // 延时时间 默认 0
}
export type RetryPromise = (fn: () => Promise<unknown>, config?: RetryConfig) => Promise<unknown>;
/**
 * promise函数重试次数
 * @param fn
 * @param config
 */
// const retry: RetryPromise = (fn, config) => {
//     return new Promise((resolve, reject) => {
//         let { max, timeout } = Object.assign({ max: 3, timeout: 0 }, config);
//         const loop = () => {
//             const _fnReturn = fn();
//             const retryFn = (err: any) => {
//                 if (max--) {
//                     timeout ? setTimeout(loop, timeout) : loop();
//                 } else {
//                     reject(err);
//                 }
//             }
//             if (isPromise(_fnReturn)) {
//                 _fnReturn.then(resolve).catch(retryFn);
//             } else {
//                 throw new TypeError('不是 Promise')
//             }
//         }
//         loop();
//     });
// }
/**
 * 优化版本
 * @param fn 一个promise
 * @param config 配置项
 * @returns 
 */
const retry: RetryPromise = (fn, config) => {
    const cfg = Object.assign({ max: 3, timeout: 0 }, config);
    const promise = fn();
    if (!isPromise(promise)) {
        return Promise.reject(new TypeError('fn的返回值不是Promise'));
    }
    return promise.catch(async (err: unknown) => {
        if (cfg.max) {
            if (cfg.timeout) {
                await sleep(cfg.timeout);
            }
            return retry(fn, Object.assign({}, cfg, { max: cfg.max - 1 }));
        }
        return Promise.reject(err);
    })
}

export default retry;