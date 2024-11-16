/**********************************************************************
 *
 * @模块名称: format
 *
 * @模块用途: format
 *
 * @date: 2021/8/13 14:54
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isEmpty } from "@gaopeng123/utils.types";

/**
 * 字符串格式化
 * 将一个'hello {o}, I like {1}' {0}{1} 替换成对应字符
 * formatStr('hello {o}, I like {1}')('china', 'you');
 * @param str
 */
export type FormatStrFn = (...args: any[]) => string;
export const formatStr = (str: string): FormatStrFn => {
    return (...args: any[]) => {
        let result = str;
        for (let i = 0; i < args.length; i++) {
            if (args[i] != undefined) {
                const reg = new RegExp('({)' + i + '(})', 'g');
                result = result.replace(reg, args[i]);
            }
        }
        return result;
    }
};

/**
 * 字符串转大小写
 * @param str
 * @param type 0-首字母大写 1-全大写 2-全小写
 */
export const toCase = (str: string, type: 1 | 2 | 0 = 0) => {
    switch (type) {
        case 1:
            return str.toUpperCase()
        case 2:
            return str.toLowerCase()
        case 0:
            return str[0].toUpperCase() + str.substring(1).toLowerCase()
        default:
            return str
    }
}


/**
 * 处理空数据展示处理
 */
export type EmptyValueOpts = {
    unit?: string;
    emptyValue?: string;
}

export const makeEmptyValue = (v: any, opt?: EmptyValueOpts)=> {
    const {unit, emptyValue} = Object.assign({unit: '', emptyValue: '-'}, opt);
    if (isEmpty(v)) {
        return emptyValue;
    }
    return `${v}${unit || ''}`;
}
