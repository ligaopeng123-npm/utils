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
export const obj2css = (obj: Record<string, string>) => {
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


interface MyObjectFn {
    (element: HTMLElement): (strings: TemplateStringsArray, ...values: any[]) => MyObject
}

type MyObjectAttr = 'styled' | 'attrs' | 'classes' | 'content';


type MyObject = {
    [key in MyObjectAttr]: MyObjectFn;
}

export function stylesComponents() {
    const strToAttr = (str: string, callBack: (key: string, value: string) => void) => {
        const cssArr = str.replaceAll('\n', '').split(';');
        cssArr.forEach((item: string) => {
            if (item.trim()) {
                const [key, value] = item.split(':');
                callBack(`${hump2hyphen(key.trim())}`, value.trim())
            }
        });
    }

    const myStyles: MyObject = {
        styled: (a: HTMLElement) => {
            return (strings: TemplateStringsArray, ...values: any[]) => {
                let css = '';
                strToAttr(strings[0], (key, value) => {
                    css += `${key}: ${value};`
                })
                a.style.cssText = a.style.cssText + css;
                return myStyles;
            };
        },
        attrs: (a: HTMLElement) => {
            return (strings: TemplateStringsArray, ...values: any[]) => {
                strToAttr(strings[0], (key, value) => {
                    a.setAttribute(key, value)
                })
                return myStyles;
            }
        },
        classes: (a: HTMLElement) => {
            return (strings: TemplateStringsArray, ...values: any[]) => {
                a.classList.add(strings[0]);
                return myStyles;
            }
        },
        content: (a: HTMLElement) => {
            return (strings: TemplateStringsArray, ...values: any[]) => {
                a.innerText = strings[0];
                return myStyles;
            }
        }
    }
    return myStyles;
}


export const { styled } = stylesComponents();
