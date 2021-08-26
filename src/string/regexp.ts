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
import {isString} from "../types";
import {partial} from "../function";

const RegExpCharacters = ['$', '(', ')', '*', '+', '.', '[', ']', '?', '\\', '^', '{', '}', '|'];

/**
 * 提取包裹住的内容
 * @param str
 * @param relyStr
 */
const extractEnclosedContent = (str: string, startStr: string, endStr: string): Array<string> => {
	if (isString(str) && isString(startStr) && isString(endStr)) {
		if (RegExpCharacters.includes(startStr)) startStr = '\\' + startStr;
		if (RegExpCharacters.includes(endStr)) endStr = '\\' + endStr;
		const regStr = '(?<=' + startStr + ')(.+?)(?=' + endStr + ')';
		return str.match(new RegExp(regStr, 'g')) || [];
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

export default extractEnclosedContent;
