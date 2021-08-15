/****************************   基本类型判断    *****************************/
export {isObject as isObject} from './types';
export {isArray as isArray} from './types';
export {isElement as isElement} from './types';
export {isEmpty as isEmpty} from './types';
export {isNumber as isNumber} from './types';
export {isEmptyObject as isEmptyObject} from './types';
export {isEqualByObj as isEqualByObj} from './types';
export {isFunction as isFunction} from './types';
export {isPromise as isPromise} from './types';
export {isString as isString} from './types';
export {isDate as isDate} from './types';
export {isUndefined as isUndefined} from './types';
export {isJSON as isJSON} from './types';

/****************************   文件操作    *****************************/
export {downloadStream as downloadStream} from './file';
export {downloadStreamParams as downloadStreamParams} from './file';

export {download as download} from './file';
export {downloadParams as downloadParams} from './file';

export {urlJoinParmas as urlJoinParmas} from './file';
export {removeUrlParames as removeUrlParames} from './file';
// 图片操作
export {imageFromFile as imageFromFile} from './file';


/****************************  数组操作函数    *****************************/
export {convertToTwodimensional as convertToTwodimensional} from './array';


/****************************  字符串 数字操作    *****************************/
export {uuid as uuid} from './string';
export {formatStr as formatStr} from './string';
// 字符串截断
export {ellipsps as ellipsps} from './string';
export {getTextWidth as getTextWidth} from './string';

/****************************  对象操作    *****************************/
// clone函数
export {clone as clone} from './object';
export {cloneAllItems as cloneAllItems} from './object';
export {cloneAllArray as cloneAllArray} from './object';
export {cloneAllObject as cloneAllObject} from './object';


/****************************  函数操作    *****************************/
export {ResponseMonad as ResponseMonad} from './function';
// 缓存函数
export {memoized as memoized} from './function';
export {MemoizedFn as MemoizedFn} from './function';

export {asyncMemoized as asyncMemoized} from './function';
export {AsyncMemoizedFn as AsyncMemoizedFn} from './function';

/****************************  时间操作    *****************************/
export {formatTimestamp as formatTimestamp} from './date';
export {TimestampType as TimestampType} from './date';
export {getYear as getYear} from './date';
export {getMonth as getMonth} from './date';
export {getDay as getDay} from './date';
export {getHours as getHours} from './date';
export {getMinutes as getMinutes} from './date';
export {getSeconds as getSeconds} from './date';
export {getWeek as getWeek} from './date';
export {getWeekCN as getWeekCN} from './date';

export {timeRange as timeRange} from './date';
export {TimeRange as TimeRange} from './date';
export {TimeRangeType as TimeRangeType} from './date';
export {timeRangeCurrent as timeRangeCurrent} from './date';
export {timeRangePrevious as timeRangePrevious} from './date';
export {currentQuarterFirstMonth as currentQuarterFirstMonth} from './date';
export {currentQuarterLastMonth as currentQuarterLastMonth} from './date';
export {currentQuarterDays as currentQuarterDays} from './date';
export {currentDayEarliest as currentDayEarliest} from './date';
export {currentDayLatest as currentDayLatest} from './date';
/****************************  number操作    *****************************/
export {randomInt as randomInt} from './number';
