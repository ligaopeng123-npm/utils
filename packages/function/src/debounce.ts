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
import { isFunction } from "@gaopeng123/utils.types";
import type { FunctionCallback } from "@gaopeng123/utils.ts-types";


type DebounceFunction<T extends any[], R> = FunctionCallback<T, R>;

export type DebounceOptions<T extends any[]> = {
    leading?: boolean; // 第一时间是否立即执行 后续再去抖
    notDebounce?: (...arg: T) => void; // 在去抖过程中 有一些非去抖处理 可以添加此参数
}


export const createDebounce = <T extends any[], R>(fn: DebounceFunction<T, R>, _wait: number, options: DebounceOptions<T>, _timeout: any): DebounceFunction<T, void> => {
    const { leading, notDebounce } = options || {};
    let callNow = true;
    const _debounce = function (...arg: T) {
        notDebounce && isFunction(notDebounce) && notDebounce(...arg);
        let context = this;
        let args = arguments;
        if (_timeout) clearTimeout(_timeout);
        if (leading) {
            // 此时callNow为true _timeout为undefined 没有执行过
            if (callNow) {
                fn.apply(context, args);
                callNow = false;
            } else {
                _timeout = setTimeout(function () {
                    fn.apply(context, args);
                }, _wait);
            }
        } else {
            _timeout = setTimeout(function () {
                fn.apply(context, args);
            }, _wait);
        }
        return _timeout;
    };
    return _debounce;
}

export const debounceOptions = <T extends any[]>(options: DebounceOptions<T>) => Object.assign({ leading: false }, options)
export const debounce = <T extends any[], R>(fn: DebounceFunction<T, R>, wait?: number, options?: DebounceOptions<T>): DebounceFunction<T, void> => {
    let _timeout: any;
    return createDebounce<T, R>(fn, wait || 200, debounceOptions(options), _timeout);
};

// test ts code
// const t = (a: number, b: number) => {

// }

// const notDebounce = (a: number, b: number) => { }
// const fn = debounce(t, 200, {
//     notDebounce: (a, b) => {
//         console.log('notDebounce');
//     }
// }
// );

// fn(1, 2);