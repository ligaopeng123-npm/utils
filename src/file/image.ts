/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index  图片处理
 *
 * @date: 2021/8/6 9:16
 *
 * @版权所有: pgli
 *
 **********************************************************************/

import {isUndefined} from "../types";

/**
 * 根据img file获取img的html路径
 * @param file
 */
export let imageFromFile = (file: File): string => {
	// 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
	// @ts-ignore
	if (!isUndefined(window.createObjectURL)) {   // basic
		// @ts-ignore
		imageFromFile = (file, base64) => window.createObjectURL(file);
	} else if (!isUndefined(window.URL)) {        // mozilla(firefox)
		// @ts-ignore
		imageFromFile = (file, base64) => window.URL.createObjectURL(file);
	} else if (!isUndefined(window.webkitURL)) {  // webkit or chrome
		// @ts-ignore
		imageFromFile = (file, base64) => window.webkitURL.createObjectURL(file);
	}
	return imageFromFile(file);
};
