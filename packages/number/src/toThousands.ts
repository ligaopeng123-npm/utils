/**********************************************************************
 *
 * @模块名称: toThousands
 *
 * @模块用途: toThousands
 *
 * @date: 2021/8/18 8:44
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isUndefined } from "@gaopeng123/utils.types";

/**
 *@函数名称：toThousands
 *@参数：value Number  num,小数点精确到几位数
 *@作用：将数字格式化成千位符号进行展示
 *@date 2018/5/22
 */
export const toThousands = (val: string | number, digit: number = 0): string => {
    const value = Number(val);
    const num: any = (value || 0).toFixed(digit || 0).toString();
    let result = '';
    let integer: any = num.match(/(\S*)\./);
    let decimal = '';
    // 将字符串从'.'断开 用点之前的数据做分割处理，最后再加上小数点后面的数字
    if (integer) {
        integer = integer[1];
        decimal = num.match(/\.(\S*)/)[0]; // 拿到小数点后面的数字
    } else {
        integer = num;
    }
    // integer = integer.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    while (integer.length > 3) {
        result = ',' + integer.slice(-3) + result;
        integer = integer.slice(0, integer.length - 3);
    }
    if (integer) {
        result = integer + result;
    }
    return result + decimal;
};
/**
 * 数据根据单位进行升级
 * @param num
 * @param units
 * @param index
 */
const numUpgrade = (units: number[]) => {
    let index = 0;
    const upgrade: any = (num: number) => {
        // 单位最大值
        const uintNum = units[index];
        const n = num / uintNum;
        if (n >= 1) {
            index++;
            return upgrade(n);
        }
        return [num, index];
    };
    return upgrade;
};
// bit存储单位
const BIT_UNIT = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
const BIT_MAX = new Array(8).fill(1000).map((n, c) => n ** (c + 1));

// 比特率单位
const BIT_RATE_UNIT = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps'];
const BIT_RATE_MAX = new Array(8).fill(1024).map((n, c) => n ** (c + 1));

type UnitUpgradeProps = {
    type?: 'bit' | 'bitRate',
    decimal?: number, // 保留几位小数 默认俩位
}
/**
 * 数据进阶 根据配置
 * @param num
 * @param options
 */
export const unitUpgrade = (num: number, options?: UnitUpgradeProps): [number, string] => {
    const { type, decimal } = Object.assign({ type: 'bit', decimal: 2 }, options);
    const upgrade = numUpgrade(type === 'bitRate' ? BIT_RATE_MAX : BIT_MAX);
    const [max, unitIndex] = upgrade(num);
    return [unitIndex === 0 ? max : max.toFixed(decimal),
        (type === 'bitRate' ? BIT_RATE_UNIT : BIT_UNIT)[unitIndex]];
};
/**
 * 默认值处理
 * @param decimal
 */
const defaultDecimal = (decimal?: number) => isUndefined(decimal) ? 2 : decimal;
const defaultDelimiter = (delimiter?: string) => isUndefined(delimiter) ? '' : delimiter;
type UpgradeOptions = {
    decimal?: number, // 保留几位小数 默认俩位
    delimiter?: string, // 数字和单位之间的分隔符 默认为 无
}
/**
 * bit单位转换
 * @param num
 * @param options
 */
export const bitUpgrade = (num: number, options?: UpgradeOptions) => {
    const [numStr, unit] = unitUpgrade(num, { type: 'bit', decimal: defaultDecimal(options?.decimal) });
    return `${numStr}${defaultDelimiter(options?.delimiter)}${unit}`;
};
/**
 * 比特率转换
 * @param num
 * @param options
 */
export const bitRateUpgrade = (num: number, options?: UpgradeOptions) => {
    const [numStr, unit] = unitUpgrade(num, { type: 'bitRate', decimal: defaultDecimal(options?.decimal) });
    return `${numStr}${defaultDelimiter(options?.delimiter)}${unit}`;
};