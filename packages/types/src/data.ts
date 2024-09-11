import * as exp from "constants";

/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @date: 2021/7/21 13:13
 *
 * @版权所有: pgli
 *
 **********************************************************************/
const toString = Object.prototype.toString;

interface typeFn {
    (v: unknown): boolean
}

/**
 *@函数名称：isObject
 *@参数：
 *@作用：IE6 使用toString判断是Object
 *@date 2018/5/17
 */
export const isObject: typeFn = (val) => {
    return toString.call(null) === '[object Object]'
        ? val !== null &&
        val !== undefined &&
        toString.call(val) === '[object Object]' &&
        // @ts-ignore
        val.ownerDocument === undefined // 排除dom
        : toString.call(val) === '[object Object]';
};
/**
 * 判断是否是数组
 * @param val
 * @returns {boolean}
 */
export const isArray: typeFn = (val) => {
    return 'isArray' in Array
        ? Array.isArray(val)
        : toString.call(val) === '[object Array]';
};
/**
 * 判断是否是稀疏数组
 * @param val
 */
export const isSparseArray: typeFn = (val) => {
    if (!isArray(val)) return false;
    const _val = val as Array<unknown>;
    for (let i = 0; i < _val.length; i++) {
        if (!(i in _val)) return true;
    }
    return false;
}
/**
 * 字符串判断
 * @param val
 */
export const isString: typeFn = (val) => {
    return typeof val === 'string';
};

/**
 * 判断是不是没有赋值
 * @param val
 */
export const isUndefined: typeFn = (val) => {
    return typeof val === 'undefined';
};

/**
 * 判断数字
 * @param val
 * @returns {boolean}
 */
export const isNumber: typeFn = function (val) {
    return typeof val === 'number' && isFinite(val);
};

/**
 * 判断boolean
 * @param val
 */
export const isBoolean: typeFn = function (val) {
    return typeof val === "boolean";
};

/**
 * 判断字符串是否为true
 * @param val
 */
export const isTrue: typeFn = function (val) {
    return isBoolean(val) ? val as boolean : val === 'true';
};

/**
 * 判断字符串是否为false
 * @param val
 */
export const isFalse: typeFn = function (val) {
    return isBoolean(val) ? val as boolean : val === 'false';
};

/**
 * Safari 3.x 4.x type判断dom返回的是function
 * @param val
 * @returns {boolean}
 */
export const isFunction: typeFn = function (val) {
    return typeof document !== 'undefined' &&
    typeof document.getElementsByTagName('body') === 'function'
        ? !!val && toString.call(val) === '[object Function]'
        : !!val && typeof val === 'function';
};

/**
 *判断是否为Promise
 * @param obj
 */
export const isPromise: typeFn = (obj) => {
    // @ts-ignore
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

/**
 * 判断是否是个async函数
 * @param val 
 * @returns 
 */
export const isAsync: typeFn = (val) => {
    return isFunction(val) 
        // @ts-ignore
        && val[Symbol.toStringTag] === 'AsyncFunction';
}

/**
 * 判断dom  nodeType 属性可返回节点的类型。
 * @param val
 * @returns {boolean}
 元素类型     节点类型
 元素element       1
 属性attr          2
 文本text          3
 注释comments      8
 文档document      9
 */
export const isElement: typeFn = (val) => {
    // @ts-ignore
    return val ? val?.nodeType === 1 : false;
};

/**
 * 字符串为“”，数组为空数组
 * @param val
 */
export const isEmpty: typeFn = (val) => {
    return (
        val === undefined ||
        val === null ||
        val === '' ||
        (isArray(val) && (val as [])?.length === 0) ||
        (isObject(val) && isEmptyObject(val))
    );
};

/**
 * 是否为null
 * @param val
 */
export const isNull: typeFn = (val) => {
    return toString.call(val) === '[object Null]';
}

/**
 * 判断是不是空对象
 * @param val
 */
export const isEmptyObject: typeFn = (val) => {
    return JSON.stringify(val) === '{}';
};

/**
 * 判断对象是否相等
 * @param k
 * @param l
 */
export const isEqualByObj = function (k: object, l: object) {
    return k === l || JSON.stringify(k) === JSON.stringify(l);
};

/**
 * 判断多个数字是否相等
 * @param args
 */
export const isEqual = (...args: Array<any>) => {
    const equalFn = (val: any) => {
        return (k: string, v: any) => {
            if (isNumber(val) || isBoolean(val)) {
                return `${v}`;
            }
            return v;
        }
    }
    for (let i = 0; i < args.length; i++) {
        if (i > 0) {
            if (args[i] !== args[i - 1] && (JSON.stringify(args[i], equalFn(args[i])) !== JSON.stringify(args[i - 1], equalFn(args[i - 1])))) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 判断字符串是否是json格式
 * @param str
 */
export const isJSON: typeFn = (val) => {
    // 如果是对象或者数组 直接返回true
    if (isObject(val) || isArray(val)) return true;
    // 非字符串返回false
    if (!isString(val)) return false;
    // @ts-ignore
    let str: string = val;
    // 开头结尾不一致 也非合法json
    if (str.startsWith('{') && !str.endsWith('}')) return false;
    if (str.startsWith('[') && !str.endsWith(']')) return false;
    // 开头不是{ [ 也不是合法的json
    if (!str?.startsWith('{') && !str?.startsWith('[')) return false;
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
/**
 * 判断是否是一个日期格式
 * @param val
 */
export const isDate: typeFn = (val) => {
    return toString.call(val) === '[object Date]';
};
/**
 * 是否是有效日期
 * @param date
 */
export const isValidDate: typeFn = (date) => {
    return date instanceof Date && !isNaN(date.getTime())
}
/**
 * 判断字符串是否是utc格式
 * @param val
 */
export const isUTC: typeFn = (val) => {
    if (isString(val)) {
        return /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}\+00:00$/.test(val as string);
    }
    return false;
}

/**
 * 判断是不是Buffer类型
 * @param val
 */
export const isBuffer: typeFn = (val: any) => {
    // 先判断不是 `undefined`和`null`
    // 再判断 `val`存在构造函数，因为`Buffer`本身是一个类
    // 最后通过自身的`isBuffer`方法判断
    return val !== null
        && !isUndefined(val)
        && val.constructor !== null
        && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function'
        && val.constructor.isBuffer(val);
}

/**
 * 判断数据类型FormData
 * @param val
 */
export const isFormData: typeFn = (val) => {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * 判断是否是File类型
 * @param val
 */
export const isFile: typeFn = (val) => {
    return toString.call(val) === '[object File]';
}

/**
 * 判断是否是Blob类型
 * @param val
 */
export const isBlob: typeFn = (val) => {
    return toString.call(val) === '[object Blob]';
}

/**
 * 判断是否是流数据
 * @param val
 */
export const isStream: typeFn = (val) => {
    return isObject(val) && isFunction((val as any)?.pipe);
}

/**
 * 判断是否是URLSearchParams
 * @param val
 */
export const isURLSearchParams: typeFn = (val) => {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * node环境
 */
export const isNodejs = () => {
    return !(typeof window !== "undefined" && window !== null);
}
/**
 * 浏览器环境
 */
export const isBrowser = () => {
    return typeof window !== "undefined" && window !== null && this === window;
}

/**
 * 是否在焦点上
 * @param el
 */
export const isFocus: typeFn = (el) => {
    return document.activeElement === el;
}
/**
 * 是否是个合法的url
 * @param url
 */
export const isUrl: typeFn = (url) => {
    try {
        new URL(url as string);
        return true;
    } catch (err) {
        return false;
    }
}