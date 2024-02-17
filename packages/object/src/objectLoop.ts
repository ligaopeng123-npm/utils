/**********************************************************************
 *
 * @模块名称: map
 *
 * @模块用途: map  过滤对象
 *
 * @date: 2021/10/27 19:23
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isObject, isUndefined } from "@gaopeng123/utils.types";
import { cloneAllItems } from "./clone";

type ObjectCallBack = (currentVal?: any, index?: number, obj?: any) => any;
type FilterObjectCallBack = (currentVal?: any, index?: number, obj?: any) => boolean;
export const filterObject = (obj: any, callback?: FilterObjectCallBack) => {
    let index = 0;
    const newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (callback) {
            const callBackVal = callback(newObj[key], index, obj);
            if (callBackVal === false) {
                delete newObj[key];
            }
        }
        index++;
    }
    return newObj;
};

/**
 * 对象的forEach过滤
 * @param obj
 * @param callback
 */
export const forEachObject = (obj: any, callback?: ObjectCallBack) => {
    let index = 0;
    const newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (callback) {
            const callBackVal = callback(newObj[key], index, obj);
            newObj[key] = callBackVal;
        }
        index++;
    }
    return newObj;
};

/**
 * 对象的map过滤
 * @param obj
 * @param callback
 */
export const mapObject = (obj: any, callback?: ObjectCallBack) => {
    let index = 0;
    for (let key in obj) {
        if (callback) {
            const callBackVal = callback(obj[key], index, obj);
            obj[key] = callBackVal;
        }
        index++;
    }
    return obj;
};
/**
 * 获取对象的属性值
 * @param obj
 * @param chainKeys  链式keys  a.b.c.d
 */
export const getObjectAttr = <T>(obj: T, chainKeys: string): T => {
    if (isUndefined(obj)) return obj;
    if (chainKeys.includes('.')) {
        const keyArr = chainKeys.split('.');
        const currentKey = keyArr.shift();
        // @ts-ignore
        return getObjectAttr(obj[currentKey], keyArr.join('.'))
    } else {
        if (isObject(obj)) {
            // @ts-ignore
            return obj[chainKeys];
        }
    }
}
/**
 * 根据链式chainKeys 给obj的属性赋值
 * @param obj
 * @param chainKeys 链式keys  a.b.c.d
 * @param val
 */
export const setObjectAttrFn = (obj: any, chainKeys: string, val: unknown) => {
    if (isUndefined(obj)) {
        return;
    }
    if (chainKeys.includes('.')) {
        const keyArr = chainKeys.split('.');
        const currentKey = keyArr.shift();
        if (isUndefined(obj[currentKey])) {
            obj[currentKey] = {};
        }
        setObjectAttrFn(obj[currentKey] as any, keyArr.join('.'), val)
    } else {
        if (isObject(obj)) {
            obj[chainKeys] = val;
        }
    }
}
/**
 * 包装下 避免污染数据
 * @param obj
 * @param chainKeys
 * @param val
 */
export const setObjectAttr = <T>(obj: T, chainKeys: string, val: unknown): T => {
    const current = cloneAllItems(obj);
    setObjectAttrFn(current, chainKeys, val);
    return current;
}