/**
 * 数组转换基础函数
 * @param arr
 * @param callBack
 */
type Arr2enumValue = {
    [propsName: string]: any;
}
export const arr2enumBase = (arr: any[], callBack: (item: any) => Arr2enumValue) => {
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
export const arr2enum = (arr: any[], valueKey: string = 'id', labelKey: string = 'name'): Arr2enumValue => arr2enumBase(arr, (item) => {
    return {
        [item[valueKey]]: item[labelKey]
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
export const enum2arrBase = (val: Arr2enumValue, callBack: (key: string, item: any, rows: Arr2enumValue) => any) => {
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
