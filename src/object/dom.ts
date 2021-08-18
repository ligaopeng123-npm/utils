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
import {isElement} from "../types";

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
