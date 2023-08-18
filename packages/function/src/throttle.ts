/**********************************************************************
 *
 * @模块名称: throttle
 *
 * @模块用途: throttle  节流
 *
 * @date: 2021/8/31 10:11
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isFunction } from "@gaopeng123/utils.types";

/**
 * @desc 函数节流
 * @param fn 函数
 * @param timeout 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export type ThrottleOptions = {
    /**
     * 1 时间戳记录 2 setTimeout版本
     * 时间戳版本第一次会执行 leading为true  setTimeout 尾部会执行一次 trailing为true
     */
    type?: 1 | 2;
    leading?: boolean; // 第一时间是否立即调用 后续在节流  type为1
    trailing?: boolean; // 为true时 表示停止后会触发一次回调，传递最后一次的参数  type为 2
    notThrottle?: (...arg: any) => any; // 在去抖过程中 有一些非去抖处理 可以添加此参数
    clearTimeout?: (val: any) => any; // 清理时间参数 为hooks预留接口
}

export const createThrottle = (fn: any, wait: number, options: ThrottleOptions, timeout: any) => {
    let lastArgs: any;
    const _throttle = function (...args: any) {
        const {type, notThrottle, leading, trailing} = options;
        notThrottle && isFunction(notThrottle) && notThrottle(...args);
        // @ts-ignore
        const context: any = this;
        if (type === 1 || (leading && type !== 2)) {
            let now = Date.now();
            if (now - timeout > wait) {
                fn.apply(context, args);
                timeout = now;
            }
        } else if (type === 2 || trailing) {
            if (trailing) lastArgs = args;
            if (!timeout) {
                if (timeout === 0 && leading) {
                    fn.apply(context, args);
                    timeout = null;
                } else {
                    timeout = setTimeout(() => {
                        fn.apply(context, trailing ? lastArgs : args);
                        if (isFunction(options.clearTimeout)) {
                            options.clearTimeout(null);
                        } else {
                            timeout = null;
                        }
                    }, wait);
                }
            }
        }
        return timeout;
    };
    return _throttle;
}
/**
 * 获取默认参数
 * @param options
 */
export const throttleOptions = (options?: ThrottleOptions) => Object.assign({
    type: 1,
    leading: false
}, options);

const throttle = (fn: any, wait?: number, options?: ThrottleOptions) => {
    let _timeout: any = 0; // setTimeout 返回值timeoutID是一个正整数
    return createThrottle(fn, wait || 200, throttleOptions(options), _timeout);
};

export default throttle;
