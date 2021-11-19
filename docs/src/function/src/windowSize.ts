/**********************************************************************
 *
 * @模块名称: conentHeight
 *
 * @模块用途: conentHeight window各种高度
 *
 * @date: 2021/8/31 9:42
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 *
 * @returns {{width: number; 浏览器宽度
 * height: number; 浏览器高度
 * availWidth: any;  可视化宽度
 * availHeight: any}} 可视化高度
 */

export type WindowSize = {
	availWidth: number; // 可视化宽度
	availHeight: number; // 可视化高度
	width: number; // 浏览器宽度
	height: number; // 浏览器宽度
	screenWidth: number; // 分辨率宽度
	screenHeight: number; // 分辨率高度
}
const windowSize = (): WindowSize => {
	let xScroll: number;
	let yScroll: number;
	let pageWidth: number;
	let pageHeight: number;
	// @ts-ignore
	if (window.innerHeight && window['scrollMaxY']) {
		// @ts-ignore
		xScroll = window.innerWidth + window['scrollMaxX'];
		// @ts-ignore
		yScroll = window.innerHeight + window['scrollMaxY'];
	} else {
		if (document.body.scrollHeight > document.body.offsetHeight) {
			// all but Explorer Mac
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else {
			// Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}
	}
	let windowWidth, windowHeight;
	if (window.self.innerHeight) {
		// @ts-ignore except Explorer
		if (document.documentElement.clientWidth) {
			// @ts-ignore
			windowWidth = document.documentElement.clientWidth;
		} else {
			windowWidth = window.self.innerWidth;
		}
		windowHeight = window.self.innerHeight;
	} else {
		if (document.documentElement && document.documentElement.clientHeight) {
			// Explorer 6 Strict Mode
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else {
			if (document.body) {
				// other Explorers
				windowWidth = document.body.clientWidth;
				windowHeight = document.body.clientHeight;
			}
		}
	}
	// @ts-ignore for small pages with total height less then height of the viewport
	if (yScroll < windowHeight) {
		// @ts-ignore
		pageHeight = windowHeight;
	} else {
		pageHeight = yScroll;
	}
	//@ts-ignore  for small pages with total width less then width of the viewport
	if (xScroll < windowWidth) {
		pageWidth = xScroll;
	} else {
		// @ts-ignore
		pageWidth = windowWidth;
	}
	return {
		width: pageWidth,
		height: pageHeight,
		availWidth: windowWidth as number,
		availHeight: windowHeight as number,
		screenHeight: window.screen.height,
		screenWidth: window.screen.width,
	};
};

export default windowSize;
