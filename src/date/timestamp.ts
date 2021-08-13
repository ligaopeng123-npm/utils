/**********************************************************************
 *
 * @模块名称: timestamp
 *
 * @模块用途: timestamp 时间戳转换
 *
 * @date: 2021/8/13 15:13
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isDate, isString} from "../types";


// 返回 01-12 的月份值
export const getYear = (date: Date): string => {
	return date.getFullYear() + '';
};

// 返回 01-12 的月份值
export const getMonth = (date: Date): string => {
	const month = date.getMonth() + 1; // getMonth()得到的月份是0-11
	return setTimeFillZero(month);
};

// 返回01-30的日期
export const getDay = (date: Date): string => {
	const day = date.getDate();
	return setTimeFillZero(day);
};

// 返回小时
export const getHours = (date: Date): string => {
	const hours = date.getHours();
	return setTimeFillZero(hours);
};

// 返回分
export const getMinutes = (date: Date): string => {
	const minute = date.getMinutes();
	return setTimeFillZero(minute);
};

// 返回秒
export const getSeconds = (date: Date): number | string => {
	const second = date.getSeconds();
	return setTimeFillZero(second);
};
// 周
export const getWeek = (date: Date) => {
	return date.getDay() || 7;
};

export const getWeekCN = (date: Date): string => {
	// 中文周期
	const week = ['', '一', '二', '三', '四', '五', '六', '日'];
	return `星期${week[getWeek(date)]}`
};

export const setTimeFillZero = (num: number): string => {
	return num < 10 ? '0' + num : (num + '');
};

/**
 *@函数名称：timestampToTime
 *@参数：timestamp时间戳 type时间格式 yyyy-MM-dd yyyy-MM-dd HH:mm:ss HH:mm:ssv  HH
 *@作用：将时间戳转换成日期
 *@date 2018/5/21
 */
export type TimestampType = 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd' | 'HH:mm:ss'
	| 'MM-dd' | 'MM-dd HH:mm:ss' | 'dd HH:mm:ss'
	| 'yyyy' | 'MM' | 'dd' | 'HH' | 'mm' | 'ss'
const formatTimestamp = (timestamp: Date | number | string, type: TimestampType = 'yyyy-MM-dd HH:mm:ss'): string => {
	// 处理字符串类型
	if (isString(timestamp) && isNaN(Number(timestamp))) {
		timestamp = new Date(timestamp);
	}
	const date = new Date(isDate(timestamp) ? timestamp : Number(timestamp));
	switch (type) {
		case 'yyyy-MM-dd HH:mm:ss':
			return `${getYear(date)}-${getMonth(date)}-${getDay(date)} ${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`;
		case 'yyyy-MM-dd':
			return `${getYear(date)}-${getMonth(date)}-${getDay(date)}`;
		case 'HH:mm:ss':
			return `${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`;
		case 'MM-dd':
			return `${getMonth(date)}-${getDay(date)}`;
		case 'MM-dd HH:mm:ss':
			return `${getMonth(date)}-${getDay(date)} ${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`;
		case 'dd HH:mm:ss':
			return `${getDay(date)} ${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`;
		case 'yyyy':
			return getYear(date);
		case 'MM':
			return `${getMonth(date)}`;
		case 'dd':
			return `${getDay(date)}`;
		case 'HH':
			return `${getHours(date)}`;
		case 'mm':
			return `${getMinutes(date)}`;
		case 'ss':
			return `${getSeconds(date)}`;
		default:
			return `${getYear(date)}-${getMonth(date)}-${getDay(date)} ${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`;
	}
};

export default formatTimestamp;
