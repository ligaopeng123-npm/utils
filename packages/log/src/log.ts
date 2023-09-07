/**********************************************************************
 *
 * @模块名称: log
 *
 * @模块作用: log
 *
 * @创建人: pgli
 *
 * @date: 2023/9/7 1:52 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isString, isNumber, isObject } from "@gaopeng123/utils.types";

type LogType = 'success' | 'info' | 'log' | 'warn' | 'error';

const COLOR_TYPE: LogType[] = ['info', 'log', 'warn', 'error', 'success'];

const COLORS: Record<LogType, string> = {
    info: '#bfbfbf',
    log: '#1677ff',
    warn: '#fa8c16',
    error: "#f5222d",
    success: '#52c41a',
};

const getColor = (type: LogType) => COLORS[type];
/**
 * 创建log的type
 * @param fn
 */
const createLogTypesFactory = <T extends any[]>(
    fn: (type: LogType, ...args: T) => void
): Record<LogType, (...args: T) => void> => {
    return COLOR_TYPE.reduce((logs, type) => {
        logs[type] = (...args: T) => fn(type, ...args);
        return logs;
    }, {} as Record<LogType, (...args: T) => void>);
};
/**
 * 带标记的打印
 */
export const consoleTag = createLogTypesFactory((type: LogType, ns: string, msg: string, ...args: any[]) => {
    const color = getColor(type);
    const hasTwoTags = isString(msg) || isNumber(msg);
    const logArgs = [`%c ${ns} ${hasTwoTags ? '%c ' + msg : ''} %c ${args.length ? '%o' : ''}`];
    if (hasTwoTags) {
        logArgs.push(`background:${color};border:1px solid ${color}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`);
        logArgs.push(`border:1px solid ${color}; padding: 1px; border-radius: 0 4px 4px 0; color: ${color};`);
        logArgs.push('background:transparent');
    } else {
        logArgs.push(`background:${color};border:1px solid ${color}; padding: 1px; border-radius: 4px; color: #fff;`);
        logArgs.push('background:transparent');
        logArgs.push(msg);
    }
    console.log(
        ...logArgs,
        ...args
    );
});

/**
 * 修改字符串颜色
 */
export const consoleStr = createLogTypesFactory((type: LogType, msg: string, ...args: any[]) => {
    const color = getColor(type);
    console.log(
        `%c ${msg} ${args.length ? '%o' : ''}`,
        `color: ${color};`,
        ...args
    );
});

/**
 * 修改打印背景
 */
export const consoleBg = createLogTypesFactory((type: LogType, msg: string, ...args: any[]) => {
    const color = getColor(type);
    console.log(
        `%c ${msg} ${args.length ? '%o' : ''}`,
        `background:${color}; padding: 2px; border-radius: 4px; color: #fff;`,
        ...args
    );
});

/**
 * 对外报漏修改入口
 * @param obj
 * @param myColors
 */
export const createConsoleFactory = (obj: any, myColors?: Record<LogType, string>) => {
    Object.assign(COLORS, myColors);
    if (isObject(obj)) {
        obj.bg = consoleBg;
        obj.str = consoleStr;
        obj.tag = consoleTag;
    }
}