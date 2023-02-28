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
import { isObject, isString } from "@gaopeng123/utils.types";

/**
 * 获取文本宽度
 * @param {string} text
 */
export function strWidth(ctx: any, text: string, fontSize?: number, fontFamily?: string) {
    if (!ctx) {
        ctx = document.createElement('canvas').getContext('2d');
    }
    const _fontFamily = fontFamily || 'Arial'
    const _fontSize = fontSize || getComputedStyle(document.documentElement)["fontSize"];
    ctx.font = `${isString(_fontSize) ? _fontSize : _fontSize + 'px '}${_fontFamily}`; // sans-serif
    const textWidth = ctx.measureText(text).width;
    return textWidth;
}

/**
 * 字符串截取...显示
 * @param {string} text
 * @param {number} width
 * @param {number} size
 * @param {string} font
 * @returns {string}
 */
type EllipsisOpts = {
    width?: number;
    fontSize?: number;
    fontFamily?: string;
    ellipsisValue?: string;
}
export default function ellipsis(text: string, width: number | EllipsisOpts = 100, fontSize?: number, fontFamily?: string, ellipsisValue?: string): string {
    if (isObject(width)) {
        // @ts-ignore
        const opt: EllipsisOpts = width;
        width = opt.width;
        fontSize = opt.fontSize;
        fontFamily = opt.fontFamily;
        ellipsisValue = opt.ellipsisValue;
    }
    const _ellipsisValue = ellipsisValue || '...';
    const w = strWidth(null, text, fontSize, fontFamily);
    if (w < width) return text;
    let ellipsisText = '';
    const len = text.length;
    for (let i = 0; i < len; i++) {
        ellipsisText += text[i];
        if (strWidth(null, ellipsisText + (text[i + 1] || '') + _ellipsisValue, fontSize, fontFamily) >= width) {
            return ellipsisText + _ellipsisValue;
        }
    }
    return text;
}
