/**
 * 数组转换基础函数
 * @param arr
 * @param callBack
 */
import { isUndefined } from "@gaopeng123/utils.types";

type Arr2enumValue = Record<string, unknown>;

export const arr2enumBase = <T>(arr: Array<T>, callBack: (item: T) => Arr2enumValue) => {
    return arr.reduce(
        (pre: object, cur: any) => ({
            ...pre,
            ...callBack(cur)
        }),
        {}
    );
}
/**
 * 将数组转换成枚举数据
 * @param arr
 * @param valueKey
 * @param labelKey
 */
export const arr2enum = (arr: Array<Arr2enumValue>, valueKey: string = 'id', labelKey: string = 'name'): Arr2enumValue => arr2enumBase(arr, (item) => {
    return {
        [item[valueKey] as string]: item[labelKey]
    }
});


/**
 * AntdTable枚举
 * @param arr
 * @param valueKey
 * @param labelKey
 */
export const arr2AntdTableEnum = (arr: any[], valueKey: string = 'id', labelKey: string = 'name'): Arr2enumValue => arr2enumBase(arr, (item) => {
    return {
        [item[valueKey]]: {
            text: item[labelKey]
        }
    }
});
/**
 * 枚举对象转换成数组
 */
export const enum2arrBase = (val: Arr2enumValue, callBack: (key: string, item: unknown, rows: Arr2enumValue) => any) => {
    const arr = [];
    for (const valKey in val) {
        arr.push(callBack(valKey, val[valKey], val));
    }
    return arr;
}
/**
 * 将枚举转换成数组
 * @param val
 */
type Enum2arrValue = {
    label: any;
    value: string;
}
/**
 * 枚举转换成数组
 * @param val
 */
export const enum2arr = (val: any): Array<Enum2arrValue> => enum2arrBase(val, (key, item, rows) => {
    return {
        label: item,
        value: key
    }
})


/**
 * 表格合并处理
 */
export const createAntdTableCell = (key: string) => {
    let cache: Record<string, { val?: number, index?: number, __index?: number }> = {};
    const setData = (data: Array<unknown>) => {
        cache = {};
        let __index = 0;
        (data || []).forEach((item: Record<string, any>, index: number) => {
            const cacheKey: string = item[key];
            if (!cache[cacheKey]) {
                __index++;
            }
            const currentCache = cache[cacheKey];
            const val = (currentCache?.val || 0) + 1;
            cache[cacheKey] = {
                val: val,
                index: isUndefined(currentCache?.index) ? index : currentCache?.index,
                __index: __index - 1,
            }
        });
    }

    const getCell = (item: Record<string, any>, index: number): { colSpan: number, rowSpan: number } => {
        const currentCache = cache[item[key]];
        if (currentCache) {
            if (currentCache.index === index) {
                return {
                    rowSpan: currentCache.val,
                    colSpan: 1
                }
            } else {
                return {
                    rowSpan: 0,
                    colSpan: 1
                }
            }
        } else {
            return {
                rowSpan: 1,
                colSpan: 1
            }
        }
    }
    return {
        setTableData: setData,
        getTdCell: getCell,
        getColSpanIndex: (record: Record<string, unknown>) => {
            const currentCache = cache[record[key] as string];
            return currentCache?.__index;
        },
        isLastRow: (record: Record<string, unknown>, index: number) => {
            const currentCache = cache[record[key] as string];
            if (currentCache) {
                return (currentCache.index + currentCache.val - 1) === index;
            }
            return false;
        }
    }
}