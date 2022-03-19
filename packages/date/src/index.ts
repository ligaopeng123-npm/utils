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
export {default as formatTimestamp} from './timestamp';
export type {TimestampType} from './timestamp';
export {getYear} from './timestamp';
export {getMonth} from './timestamp';
export {getDay} from './timestamp';
export {getHours} from './timestamp';
export {getMinutes} from './timestamp';
export {getSeconds} from './timestamp';
export {getWeek} from './timestamp';
export {getWeekCN} from './timestamp';
export {getWeekCNDay} from './timestamp';

export {default as timeRange} from './timeRange';
export type {TimeRange} from './timeRange';
export type {TimeRangeType} from './timeRange';
export {timeRangeCurrent as timeRangeCurrent} from './timeRange';
export {timeRangePrevious as timeRangePrevious} from './timeRange';
export {currentQuarterFirstMonth as currentQuarterFirstMonth} from './timeRange';
export {currentQuarterLastMonth as currentQuarterLastMonth} from './timeRange';
export {currentQuarterDays as currentQuarterDays} from './timeRange';
export {currentDayEarliest as currentDayEarliest} from './timeRange';
export {currentDayLatest as currentDayLatest} from './timeRange';

export {timestampToCN} from './timestampToCN';
