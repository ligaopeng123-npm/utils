import { hex2rgb } from './hex2rgb'

/**
 * 添加透明度
 * @param {string} color
 * @param {number} opacity
 */
export const addOpacity = (color: string, opacity: number = 1) => {
    if (!color) return '#ffffff';
    let col = color.toLowerCase();
    if (col.startsWith('rgba')) {
        const strArr = col.split(',');
        const finalStr = strArr[strArr.length - 1]
        const originOpacityStr = finalStr.substring(0, finalStr.length - 1)
        return col.replace(originOpacityStr, `${Number(originOpacityStr) * opacity}`);
    }
    if (color.startsWith('#')) {
        col = hex2rgb(col).toLowerCase();
    }
    col = col.replace(/rgb\(/, 'rgba(');
    col = col.replace(/\)/, `,${  opacity  })`);
    return col;
}

// console.log(addOpacity('#0dbc79', .6))
// console.log(addOpacity('#369', .6))
// console.log(addOpacity('RGB(13,188,121)', .6))
// console.log(addOpacity('RGBA(13,188,121, .5)', .6))
