/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index  时间处理
 *
 * @date: 2021/8/13 14:37
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export {
    formatTimestamp,
    getTime,
    getDate,
    getYear,
    getMonth,
    getDay,
    getHours,
    get12Hours,
    getMinutes,
    getSeconds,
    getWeek,
    getWeekCN,
    getWeekCNDay, setTimeFillZero
} from './timestamp';
export type { TimestampType } from './timestamp';


export {
    timeRange,
    timeRangePeriod,
    timeRangeCurrent,
    timeRangePrevious,
    currentQuarterFirstMonth,
    currentQuarterLastMonth,
    currentQuarterDays,
    currentDayEarliest,
    currentDayLatest,
    currentMonthDays, currentYearMonthDays, getMonthDays
} from './timeRange';
export type { TimeRange, TimeRangeType } from './timeRange';

export { timestampToCN } from './timestampToCN';
