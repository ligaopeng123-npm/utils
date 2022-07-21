/**********************************************************************
 *
 * @模块名称: css-obj
 *
 * @模块用途: css-obj
 *
 * @date: 2022/2/8 8:46
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isObject, isString} from "@gaopeng123/utils.types";
import {hump2hyphen, hyphen2hump} from "@gaopeng123/utils.string";

/**
 * 将react obj style类型 转换成 css类型
 * @param obj
 */
export const obj2css = (obj: any) => {
    if (isObject(obj)) {
        let css = ``;
        for (let key in obj) {
            css += `${hump2hyphen(key)}: ${obj[key]};`
        }
        return css;
    } else {
        return obj;
    }
}
/**
 * 将css类型  转换成  react obj style类型
 * @param obj
 */
export const css2obj = (css: string) => {
    if (isString(css)) {
        const obj: any = {};
        css.split(';').forEach((item: string) => {
            if (item) {
                const [key, value] = item.split(':');
                obj[hyphen2hump(key)] = value.trim();
            }
        });
        return obj;
    } else {
        return css;
    }
}

/**
 * 创建css字符串
 * @param cssTexts
 */
export const makeCssText = (cssTexts: any) => {
    let cssText = ``;
    for (const cssTextsKey in cssTexts) {
        cssText += `.${cssTextsKey} { ${obj2css(cssTexts[cssTextsKey])} } `
    }
    return cssText
}
