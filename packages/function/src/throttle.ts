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

/**
 * @desc 函数节流
 * @param fn 函数
 * @param timeout 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export type ThrottleOptions = {
    type?: 1 | 2; // 1 时间戳记录 2 setTimeout版本
    leading?: boolean; // 第一时间是否立即调用 后续在节流
}

export const createThrottle = (fn: any, wait: number, options: ThrottleOptions, timeout: any) => {
    const _throttle = function (...args: any) {
        // @ts-ignore
        const context: any = this;
        if (options.type === 1) {
            let now = Date.now();
            if (now - timeout > wait) {
                fn.apply(context, args);
                timeout = now;
            }
        } else if (options.type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    fn.apply(context, args);
                }, wait);
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
