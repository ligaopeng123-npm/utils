/**********************************************************************
 *
 * @模块名称: debounce
 *
 * @模块用途: debounce
 *
 * @date: 2021/8/31 10:02
 *
 * @版权所有: pgli
 *
 **********************************************************************/

/**
 * @desc 函数防抖
 * @param fn 函数
 * @param timeout 延迟执行毫秒数
 * @param options
 */
import {isFunction} from "@gaopeng123/utils.types";

export type DebounceOptions = {
    leading?: boolean; // 第一时间是否立即执行 后续再去抖
    notDebounce?: (...arg: any) => any; // 在去抖过程中 有一些非去抖处理 可以添加此参数
}

export const createDebounce = (fn: any, _wait: number, options: DebounceOptions, _timeout: any) => {
    // @ts-ignore
    const {leading, notDebounce} = options || {};
    const _debounce = function (...arg: any) {
        // @ts-ignore
        let context: any = this;
        let args = arguments;
        if (_timeout) clearTimeout(_timeout);
        if (leading) {
            // 此时callNow为true _timeout为undfined 没有执行过
            let callNow = !_timeout;
            // wait 秒后 将_timeout重置为null callNow就为true了 继续执行
            _timeout = setTimeout(() => {
                _timeout = null;
            }, _wait);
            if (callNow) fn.apply(context, args);
        } else {
            _timeout = setTimeout(function () {
                fn.apply(context, args);
            }, _wait);
        }
        notDebounce && isFunction(notDebounce) && notDebounce(...arg);
        return _timeout;
    };
    return _debounce
}

export const debounceOptions = (options: DebounceOptions) => Object.assign({leading: false}, options)
const debounce = (fn: any, wait?: number, options?: DebounceOptions) => {
    let _timeout: any;
    return createDebounce(fn, wait || 200, debounceOptions(options), _timeout);
};


export default debounce;
