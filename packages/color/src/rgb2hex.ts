import { colorHexReg } from './common'

/**
 * 将rgb颜色转换成16进制颜色
 * @param that
 * @returns {any}
 */
export const rgb2hex = (rgb: string) => {
    if (/^(rgb|RGB)/.test(rgb)) {
        const aColor: any[] = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
        let strHex: string = '#';
        for (let i = 0; i < aColor.length; i++) {
            let hex = Number(aColor[i]).toString(16).padStart(2, '0');
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = rgb;
        }
        return strHex;
    } if (colorHexReg.test(rgb)) {
        const aNum = rgb.replace(/#/, '').split('');
        if (aNum.length === 6) {
            return rgb;
        }
        if (aNum.length === 3) {
            let numHex = '#';
            for (let i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return rgb;
    }
}
