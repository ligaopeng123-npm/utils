/**********************************************************************
 *
 * @模块名称: assignDeep
 *
 * @模块用途: assignDeep 数据的深度合并
 *
 * @date: 2021年9月27日10:56:54
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isArray, isNull, isObject, isUndefined} from "@gaopeng123/utils.types";

/**
 * merge数组
 * @param input
 */
const mergeArray = (input: any[]): any[] => {
    return input.map(mergeValue);
};

/**
 * merge对象
 * @param source
 */
const mergeObject = (source: any) => {
    const output: any = {};
    for (const key in source) {
        if (!source.hasOwnProperty(key)) {
            continue;
        }
        output[key] = mergeValue(source[key]);
    }
    return output;
};

/**
 * merge属性
 * @param value
 */
const mergeValue = (value: any) => {
    if (isObject(value)) {
        return mergeObject(value);
    } else if (isArray(value)) {
        return mergeArray(value);
    }
    return value;
};
type Options = {
    arrayHandle: 'merge' | 'replace' | 'cover';
}
const deepMerge = (target: any, sources: Array<any>, options?: Options) => {
    const _options = {
        arrayHandle: options?.arrayHandle || 'replace'
    };
    const output: any = target || {};
    // 遍历整个sources 拿到里面的各个对象 将每个对象都copy一遍
    for (let oIndex = 0; oIndex < sources.length; oIndex++) {
        const source = sources[oIndex];
        const keys = Object.keys(source);
        // 遍历每一个对象的属性
        for (let kIndex = 0; kIndex < keys.length; kIndex++) {
            const key = keys[kIndex];
            // sourceValue
            const sourceValue = source[key];
            // targetValue
            const targetValue = output[key];
            /**
             * 如果是对象 则遍历copy
             */
            if (isObject(sourceValue)) {
                if (!isUndefined(targetValue)) {
                    const existingValue = (isObject(targetValue) ? targetValue : {});
                    output[key] = deepMerge({}, [existingValue, mergeValue(sourceValue)], _options);
                } else {
                    output[key] = mergeValue(sourceValue);
                }
            } else if (isArray(sourceValue)) {
                if (isArray(targetValue)) {
                    // 数组覆盖
                    if (_options.arrayHandle === 'cover') {
                        output[key] = targetValue;
                    } else {
                        const newValue = mergeArray(sourceValue);
                        output[key] = (_options.arrayHandle === 'merge' ? output[key].concat(newValue) : newValue);
                    }
                } else {
                    output[key] = mergeArray(sourceValue);
                }
            } else {
                output[key] = sourceValue;
            }
        }
    }
    return output;
};
/**
 * 对象属性的深度合并
 * @param target
 * @param source
 */
export const assignDeep = (target: any, ...source: any) => {
    /**
     * 如果target 不是对象类型 则默认Merge给一个新对象
     */
    return deepMerge(target, source);
};
/**
 * 不合并数组
 * @param target
 * @param source
 */
export const assignDeepNotIncludedArray = (target: any, ...source: any) => {
    /**
     * 如果target 不是对象类型 则默认Merge给一个新对象
     */
    return deepMerge(target, source, {arrayHandle: 'cover'});
};

/**
 * 合并数组
 * @param target
 * @param source
 */
export const assignDeepMergeArray = (target: any, ...source: any) => {
    /**
     * 如果target 不是对象类型 则默认Merge给一个新对象
     */
    return deepMerge(target, source, {arrayHandle: 'merge'});
};

/**
 * 根据指令进行属性copy
 */
type AssignIfOrder = (v:any)=> boolean;
export const assignIfByOrder = (order:AssignIfOrder,target: any, ...source: any):void=> {
    const _target = Object.assign({}, target);
    source?.forEach((sourceItem: any) => {
        if (isObject(target) && isObject(sourceItem)) {
            let property;
            for (property in sourceItem) {
                if (order(_target[property])) {
                    _target[property] = sourceItem[property];
                }
            }
        }
    });
    return _target;
}

/**
 * 属性的浅copy 如果目标对象 有该属性(不为null undefined) 则不copy
 * @param target
 * @param source
 */
export const assignIf = (target: any, ...source: any): any => {
    return assignIfByOrder((v)=> isNull(v) || isUndefined(v), target, ...source);
};

