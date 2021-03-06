/**********************************************************************
 *
 * @模块名称: timeLimit
 *
 * @模块用途: timeLimit  时间范围
 *
 * @date: 2021/8/15 16:44
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {getMonth, getWeek, getYear} from "./timestamp";

/**
 * 月份天数
 * @param month
 */
export const monthDays = (month: number | string): number => {
	// @ts-ignore
	return new Date(getYear(new Date()), month, 0).getDate();
};
/**
 * 当月天数
 */
export const currentMonthDays = (): number => {
	// @ts-ignore
	return monthDays(getMonth(new Date()));
};
/**
 * 获取当前季度的第一个月份
 */
export const currentQuarterFirstMonth = (): number => {
	const month = Number(getMonth(new Date()));
	return Math.ceil(month / 3) * 3 - 3 + 1;
};
/**
 * 获取当前季度的最后一个月份
 */
export const currentQuarterLastMonth = (): number => {
	const month = Number(getMonth(new Date()));
	return Math.ceil(month / 3) * 3;
};

/**
 * 当季度天数
 */
export const currentQuarterDays = (): number => {
	// 当前季度的第一个月份
	const firstMonth = currentQuarterFirstMonth();
	return [firstMonth, firstMonth + 1, firstMonth + 2].reduce((total: number, current: number) => total + monthDays(current), 0);
};

/**
 * 一天的时间戳
 */
const DAYTIME: number = 86400000;
/**
 *各种时间维度的长度
 */
const DATAMAP = {
	day: 1,
	threeDays: 3,
	week: 7,
	month: currentMonthDays(),
	quarter: currentQuarterDays(),
	year: 365,
};


/**
 * 当天0点时间戳
 */
export const currentDayEarliest = (): number => {
	return Number(new Date(new Date().setHours(0, 0, 0, 0)));
};

/**
 * 当天23点59分59秒
 */
export const currentDayLatest = (): number => {
	return Number(new Date(new Date().setHours(23, 59, 59, 999)));
};
/**
 * 自然周 月 的时间维度
 * @param days    总共天数
 * @param nowDay  当前是第几天
 */
const monthOrWeekTimeRange = (days: number, nowDay: number): TimeRange => {
	return {
		startTime: currentDayEarliest() - (nowDay - 1) * DAYTIME,
		endTime: currentDayLatest() + (days - nowDay) * DAYTIME,
	}
};
/**
 * 时间范围时间戳
 * @param days
 */
const timeRange = (days: number): TimeRange => {
	return {
		startTime: days === 1 ? currentDayEarliest() : currentDayEarliest() - (days - 1) * DAYTIME,
		endTime: currentDayLatest(), // (Number(thisDayZore) + 86400) * 1000
	}
};
/**
 * 当前时间类型
 * @param type
 */
export type TimeRange = {
	startTime: number;
	endTime: number;
};
export type TimeRangeType = 'day' | 'threeDays' | 'week' | 'month' | 'quarter' | 'year';
export const timeRangePrevious = (type: TimeRangeType): TimeRange => {
	if (DATAMAP[type]) return timeRange(DATAMAP[type]);
	throw new Error(`${type} is not of type CurrentTimeRangeType('day' | 'week' | 'month' | 'year' | 'threeDays')`);
};
/**
 * 本周 当月 本季度 自然时间 时间范围
 * @param type
 */
export const timeRangeCurrent = (type: TimeRangeType): TimeRange => {
	if (DATAMAP[type]) {
		switch (type) {
			case 'threeDays':
				return timeRangePrevious('threeDays');
			case 'week':
				return monthOrWeekTimeRange(DATAMAP[type], getWeek(new Date()));
			case 'month':
				return monthOrWeekTimeRange(DATAMAP[type], new Date().getDate());
			case 'quarter':
				const date = new Date();
				const startTime = Number(new Date(Number(getYear(date)), currentQuarterFirstMonth() - 1, 1).setHours(0, 0, 0, 0));
				const lastMonth = currentQuarterLastMonth();
				const endTime = Number(new Date(Number(getYear(date)), lastMonth - 1, monthDays(lastMonth)).setHours(23, 59, 59, 999));
				return {
					startTime,
					endTime
				};
			case 'year':
				const firstDay = new Date().setFullYear(new Date().getFullYear(), 0, 1);
				const lastDay = new Date().setFullYear(new Date().getFullYear(), 11, 31);
				return {
					startTime: Number(new Date(firstDay).setHours(0, 0, 0, 0)),
					endTime: Number(new Date(lastDay).setHours(23, 59, 59, 999)),
				};
			default:
				return timeRange(1);
		}
	}
	throw new Error(`${type} is not of type CurrentTimeRangeType('day' | 'week' | 'month' | 'year' | 'threeDays')`);
};

export default timeRange;
