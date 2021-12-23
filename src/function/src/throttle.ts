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
    leading?: boolean; // 第一时间是否立即调用 后续在去抖
}
const throttle = (fn: any, wait?: number, options?: ThrottleOptions) => {
    let previous = 0;
    let _timeout: any;
	const _wait = wait || 200;
    const _options = Object.assign({
        type: 1,
        leading: false
    }, options);

    const _throttle = function () {
        // @ts-ignore
        let context = this;
        let args = arguments;
        if (_options.type === 1) {
            let now = Date.now();
            if (now - previous > _wait) {
                fn.apply(context, args);
                previous = now;
            }
        } else if (_options.type === 2) {
            if (!_timeout) {
                _timeout = setTimeout(() => {
                    _timeout = null;
                    fn.apply(context, args)
                }, _wait)
            }
        }
    };
    return _throttle;
};

export default throttle;
