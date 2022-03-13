import { isFunction, isPromise } from "@gaopeng123/utils.types"

/**
 * 同步延迟执行
 */
type DelayFunc = (...args: any) => any;
export const delay = (func: DelayFunc, wait: number, ...args: any) => {
    if (!isFunction(func)) {
        throw new TypeError('func must be a function');
    }
    return setTimeout(func, +wait || 0, ...args);
}

/**
 * 异步延迟执行
 */
type AsyncDelayFunc = (...args: any) => Promise<any>;
export const asyncDelay = (func: AsyncDelayFunc, wait: number, ...args: any): Promise<any> => {
    if (!isPromise(func)) {
        throw new TypeError('func must be a promise');
    }
    return new Promise((resolve, reject) => {
        delay(() => {
            func(...args).then(resolve).catch(reject);
        }, wait)
    });
}