/**********************************************************************
 *
 * @模块名称: dom
 *
 * @模块用途: dom
 *
 * @date: 2021/8/18 16:52
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isElement, isFunction} from "../../types";

/**
 * 获取样式
 * @param el
 * @param styleName
 */
export const getStyle = (el: Element, styleName: string): string => {
	if (isElement(el)) {
		// @ts-ignore
		if (el.currentStyle) {
			// @ts-ignore
			return el.currentStyle[styleName];
		} else {
			const computed = getComputedStyle(el, null);
			// @ts-ignore
			return computed[styleName] || (computed.getPropertyValue ? computed.getPropertyValue(styleName) : '');
		}
	}
	return '';
};

/**
 * 递归查找符合预期的dom结构
 * @param dom
 * @param expected
 * @returns {any}
 */
export const parentByExpected = (dom: any, expected: any): any => {
	// 如果找到根节点了 就返回 避免循环死掉
	if (dom.tagName === 'BODY' || isFunction(expected) && expected(dom)) return dom;
	return parentByExpected(dom.parentNode || dom.parentElement, expected);
};

/**
 * 点击文本复制
 * @param span
 */
export const copyText = (span: any): void => {
	const text = span.innerText;
	const inputCache = document.createElement('input');
	inputCache.setAttribute('value', text);
	// document.getElementsByTagName('body')[0].appendChild(input);
	inputCache.select();
	if (document.execCommand('copy')) {
		console.log('复制成功')
	}
};
