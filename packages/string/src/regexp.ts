/**********************************************************************
 *
 * @模块名称: regexp
 *
 * @模块用途: regexp  正则函数
 *
 * @date: 2021/8/25 16:07
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isSafari, isString } from "@gaopeng123/utils.types";
import { partial } from "@gaopeng123/utils.function";

const RegExpCharacters = ['$', '(', ')', '*', '+', '.', '[', ']', '?', '\\', '^', '{', '}', '|'];

/**
 * 提取包裹住的内容
 * @param str
 * @param relyStr
 */
export const extractEnclosedContentByStrs = (str: string, startStr: string, endStr: string, arr: Array<string> = []): Array<string> => {
    const startIndex = str.indexOf(startStr);
    const endIndex = str.indexOf(endStr, startIndex + startStr.length);
    if (~startIndex && ~endIndex && endIndex > startIndex) {
        arr.push(str.substring(startIndex + startStr.length, endIndex));
        return extractEnclosedContentByStrs(str.substring(endIndex + endStr?.length), startStr, endStr, arr)
    } else {
        return arr;
    }
}
const extractEnclosedContent = (str: string, startStr: string, endStr: string): Array<string> => {
    if (isString(str) && isString(startStr) && isString(endStr)) {
        if (isSafari()) {
            const arr: Array<string> = [];
            if (startStr?.length || endStr?.length > 1) {
                return extractEnclosedContentByStrs(str, startStr, endStr, arr);
            } else {
                let currentIndex = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === startStr) {
                        currentIndex = i;
                    }
                    if (str[i] === endStr) {
                        arr.push(str.substr(currentIndex + 1, i - currentIndex - 1));
                    }
                }
            }
            return arr;
        } else {
            if (RegExpCharacters.includes(startStr)) startStr = '\\' + startStr;
            if (RegExpCharacters.includes(endStr)) endStr = '\\' + endStr;
            const regStr = '(?<=' + startStr + ')(.+?)(?=' + endStr + ')';
            return str.match(new RegExp(regStr, 'g')) || [];
        }
    }
    return [];
};
/**
 * 提取小括号内容
 */
export const extractParenthesesContent = partial(extractEnclosedContent, undefined, '(', ')');
/**
 * 提取中括号内容
 */
export const extractMiddleParenthesesContent = partial(extractEnclosedContent, undefined, '[', ']');
/**
 * 提取大括号内容
 */
export const extractBigParenthesesContent = partial(extractEnclosedContent, undefined, '{', '}');
/**
 * IPV4正则
 */
export const IPV4_STR = '^(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}$';
export const IPV4 = new RegExp(IPV4_STR);
/**
 * 密码正则
 */
export const PASSWORD_RegExp_STR = (min: number = 8, max: number | string = '')=> {
    return `(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{${min},${max}}`
}
export const PASSWORD_RegExp = (min = 8, max = 16): RegExp => {
    return new RegExp(PASSWORD_RegExp_STR(min, max));
}
export const PASSWORD_STR = PASSWORD_RegExp_STR(8, '');
export const PASSWORD = new RegExp(PASSWORD_STR);
// 8-16位
export const PASSWORD_STR_MAX_16 = PASSWORD_RegExp_STR(8, 16);
export const PASSWORD_MAX_16 = PASSWORD_RegExp(8, 16);
/**
 * 手机卡 + 数据卡 + 上网卡
 */
export const OPERATOR_NUMBER_STR = `^(?:\\+?86)?1(?:3\\d{3}|5[^4\\D]\\d{2}|8\\d{3}|7(?:[01356789]\\d{2}|4(?:0\\d|1[0-2]|9\\d))|9[012356789]\\d{2}|6[2567]\\d{2}|4(?:[14]0\\d{3}|[68]\\d{4}|[579]\\d{2}))\\d{6}$`;
export const OPERATOR_NUMBER = new RegExp(OPERATOR_NUMBER_STR);
/**
 * 匹配所有支持短信功能的号码（手机卡 + 上网卡）
 */
export const PHONE_NUMBER_STR = `^(?:\\+?86)?1(?:3\\d{3}|5[^4\\D]\\d{2}|8\\d{3}|7(?:[012356789]\\d{2}|4(?:0\\d|1[0-2]|9\\d))|9[012356789]\\d{2}|6[2567]\\d{2}|4[579]\\d{2})\\d{6}$`;
export const PHONE_NUMBER = new RegExp(PHONE_NUMBER_STR);
/**
 * 物联网数据卡
 */
export const IOT_PHONE_NUMBER_STR = `^(?:\\+?86)?14(?:[14]0|[68]\\d)\\d{9}$`;
export const IOT_PHONE_NUMBER = new RegExp(IOT_PHONE_NUMBER_STR);

export default extractEnclosedContent;
// 富文本标签
export const RTF_TAG = /<\/?[a-zA-Z]+.*?>/g;
// 左边箭头
const lt = /&lt;/g;
// 右边箭头
const gt = /&gt;/g;
/**
 * 富文本标签转字符串
 * @param rtf
 * @constructor
 */
export const RTF2str = (rtf: string) => {
    return rtf?.replace(RTF_TAG, '')?.replace(lt, '<')?.replace(gt, '<')
}
/**
 * 手机号脱敏
 * @param mobile
 */
export const maskMobile = (mobile: string) => {
    return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
