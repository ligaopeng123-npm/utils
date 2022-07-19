/**
 * 将16进制转换成rgb颜色
 * @param col
 * @returns {string}
 */
import { colorHexReg } from "./common";
 export const hex2rgb = (col: string) => {
    let sColor = col.toLowerCase();
    if (sColor && colorHexReg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        const sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt(`0x${  sColor.slice(i, i + 2)}`));
        }
        return `RGB(${  sColorChange.join(',')  })`;
    } 
    return sColor;
}
