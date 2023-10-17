/** ********************************************************************
 *
 * @模块名称: unique
 *
 * @模块用途: unique
 *
 * @date: 2022/9/15 11:34
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import { isArray, isString } from "@gaopeng123/utils.types";

/**
 * 数组去重
 * @param arr
 * @param key 基于对象去重
 */
export const unique = <T>(arr: Array<T>, key?: string): Array<T> => {
    if (arr.length === 0) return
    const list: Array<T> = [];
    const map: any = {}
    arr.forEach((item) => {
        const itemKey: string = key ? (item as any)[key] : item;
        if (!map[itemKey]) {
            map[itemKey] = item;
            list.push(item);
        }
    })
    return list;
}

export const uniqueArrByKey = <T>(arr: Array<T>, key: string): Array<T> => unique(arr, key);


/**
 * 删除数组的某一项
 * @param arr
 * @param callBack
 */
export const delItem = <T>(v: T, callBack: (v: any) => boolean): T => {
    if (callBack) {
        const fn = (arr: Array<any>)=> {
            const _arr: any[] = [];
            arr.filter((item) => {
                if (!callBack(item)) {
                    _arr.push(item);
                }
            })
            return _arr as unknown;
        }
        if (isArray(v)) {
            return fn(v as any) as T;
        } else if (isString(v)) {
            return (fn(((v as any).split(''))) as any).join('') as T;
        } else {
            console.warn(`${v}只能是数组或者字符串`);
            return v;
        }
    } else {
        return v;
    }
}