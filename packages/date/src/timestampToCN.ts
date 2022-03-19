/** ********************************************************************
 *
 * @模块名称: timeToCN
 *
 * @模块用途: timeToCN
 *
 * @date: 2022/3/18 14:03
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import {isDate} from "@gaopeng123/utils.types";
import {setTimeFillZero} from "./timestamp";

const TIME_THRESHOLD = [{
    k: 'dd',
    v: 86400
}, {
    k: 'HH',
    v: 3600,
}, {
    k: 'mm',
    v: 60,
}, {
    k: 'ss',
    v: 1
}];

const getTimer = (timestamp: number) => {
    const values: any = {
        dd: '',
        HH: '',
        mm: '',
        ss: '',
    };
    // 是否已经匹配到值
    let vFlag = false;
    for (let i = 0; i < TIME_THRESHOLD.length; i++) {
        const {k, v} = TIME_THRESHOLD[i];
        if (timestamp >= v) {
            // 最后一位 不再循环 直接赋值
            if (i === TIME_THRESHOLD.length - 1) {
                values[k] = timestamp;
            } else {
                values[k] = Math.floor(timestamp / v);
                timestamp = timestamp % v;
            }
            vFlag = true;
        } else if (vFlag) {
            values[k] = '0';
        }
    }
    return values;
}

/**
 * 将时间戳转换为dd HH mm ss 格式展示
 * @param s dd {天} HH {小时} mm {分钟} ss {秒}
 */
type TimeType = 'dd天HH小时mm分钟ss秒' | string;
export const timestampToCN = (timestamp: Date | number | string, type: TimeType = 'dd天HH小时mm分钟ss秒'): string => {
    const times = (isDate(timestamp) ? timestamp : Number(timestamp)) as number;
    const values = getTimer(times / 1000);
    TIME_THRESHOLD.forEach(({k, v: number}, index) => {
        if (!values[k]) {
            const key = TIME_THRESHOLD[index + 1]?.k;
            type = key ? type.replace(new RegExp(`.*(?=${key})`), '') : type;

        }
    });
    const {dd, HH, mm, ss} = values;
    return type.replace(/dd/, dd ? setTimeFillZero(dd) : '')
        .replace(/d/, dd)
        .replace(/HH/, HH ? setTimeFillZero(HH) : '')
        .replace(/H/, HH)
        .replace(/mm/, mm ? setTimeFillZero(mm) : '')
        .replace(/m/, mm)
        .replace(/ss/, ss ? setTimeFillZero(ss) : '')
        .replace(/s/, ss);
}
