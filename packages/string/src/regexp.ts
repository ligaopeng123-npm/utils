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
import {isSafari, isString} from "@gaopeng123/utils.types";
import {partial} from "@gaopeng123/utils.function";

const RegExpCharacters = ['$', '(', ')', '*', '+', '.', '[', ']', '?', '\\', '^', '{', '}', '|'];

/**
 * 提取包裹住的内容
 * @param str
 * @param relyStr
 */
const extractEnclosedContent = (str: string, startStr: string, endStr: string): Array<string> => {
    if (isString(str) && isString(startStr) && isString(endStr)) {
        if (isSafari()) {
            const arr = [];
            let currentIndex = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === startStr) {
                    currentIndex = i;
                }
                if (str[i] === endStr) {
                    arr.push(str.substr(currentIndex + 1, i - currentIndex - 1))
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
export const PASSWORD_STR = '(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}';
export const PASSWORD = new RegExp(PASSWORD_STR);
/**
 * 手机号校验
 */
export const PHONE_NUMBER_STR = '^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$';
export const PHONE_NUMBER = new RegExp(PHONE_NUMBER_STR);

export default extractEnclosedContent;
