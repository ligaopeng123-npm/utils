/**********************************************************************
 *
 * @模块名称: ellipsps
 *
 * @模块用途: ellipsps
 *
 * @date: 2021/8/13 14:53
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 获取文本宽度
 * @param {string} text
 */
export function strWidth(ctx: any, text: string, fontSize: number = 12, fontFamily: string = 'Arial') {
	if (!ctx) {
		ctx = document.createElement('canvas').getContext('2d');
	}
	ctx.font = fontSize + 'px ' + fontFamily; // sans-serif
	return ctx.measureText(text).width;
}

/**
 * 字符串截取...显示
 * @param {string} text
 * @param {number} width
 * @param {number} size
 * @param {string} font
 * @returns {string}
 */
export default function ellipsps(text: string, width: number = 100, size: number = 12, font: string = 'Arial'): string {
	const w = strWidth(null, text, size, font);
	if (w < width) return text;
	let ellipspsText = '';
	const len = text.length;
	for (let i = 0; i < len; i++) {
		ellipspsText += text[i];
		if (strWidth(null, ellipspsText + '...', size, font) > width) return ellipspsText + '...';
	}
	return text;
}
