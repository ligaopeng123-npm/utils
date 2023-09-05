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
import { isArray, isNumber, isObject, isString } from "@gaopeng123/utils.types";
import { hump2hyphen, hyphen2hump } from "@gaopeng123/utils.string";

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


const hasOwn = {}.hasOwnProperty;

export const classnames = (...args: Array<any>) => {
    const classes = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg) continue;
        if (isString(arg) || isNumber(arg)) {
            classes.push(arg);
        } else if (isArray(arg)) {
            if (arg.length) {
                const inner = classnames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
        } else if (isObject(arg)) {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                classes.push(arg.toString());
                continue;
            }
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}