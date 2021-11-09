/****************************   基本类型判断    *****************************/
export {isObject as isObject} from './types/src';
export {isArray as isArray} from './types/src';
export {isElement as isElement} from './types/src';
export {isEmpty as isEmpty} from './types/src';
export {isNumber as isNumber} from './types/src';
export {isEmptyObject as isEmptyObject} from './types/src';
export {isEqualByObj as isEqualByObj} from './types/src';
export {isFunction as isFunction} from './types/src';
export {isPromise as isPromise} from './types/src';
export {isString as isString} from './types/src';
export {isDate as isDate} from './types/src';
export {isUndefined as isUndefined} from './types/src';
export {isJSON as isJSON} from './types/src';
export {isBoolean as isBoolean} from "./types/src";

/**
 * 浏览器判断
 */
export {isChrome as isChrome} from "./types/src";
export {isFirefox as isFirefox} from "./types/src";
export {isWebKit as isWebKit} from "./types/src";
export {isSafari as isSafari} from "./types/src";
export {isOpera as isOpera} from "./types/src";
export {isEdge as isEdge} from "./types/src";
export {isIE as isIE} from "./types/src";
export {isGecko as isGecko} from "./types/src";
/**
 * 硬件判断
 */
export {isWindows as isWindows} from "./types/src";
export {isMac as isMac} from "./types/src";
export {isLinux as isLinux} from "./types/src";
/**
 * 版本获取
 */
export {chromeVersion as chromeVersion} from "./types/src";
export {firefoxVersion as firefoxVersion} from "./types/src";
export {ieVersion as ieVersion} from "./types/src";
export {operaVersion as operaVersion} from "./types/src";
export {safariVersion as safariVersion} from "./types/src";
export {webKitVersion as webKitVersion} from "./types/src";

/**
 * 安全模式获取
 */
export {isStrict as isStrict} from "./types/src";
export {isSecure as isSecure} from "./types/src";

/****************************   文件操作    *****************************/
export {downloadStream as downloadStream} from './file/src';
export {downloadStreamParams as downloadStreamParams} from './file/src';

export {download as download} from './file/src';
export {downloadParams as downloadParams} from './file/src';

export {urlJoinParmas as urlJoinParmas} from './file/src';

export {removeUrlParams as removeUrlParams} from './file/src';

export {routeFromUri as routeFromUri} from './file/src';

// 删除参数中的空数据
export {removeEmptyParams as removeEmptyParams} from './file/src';
// 处理不合规参数
export {makeParamsProper as makeParamsProper} from './file/src';
// 从url中获取参数
export {queryParamsFromUrl as queryParamsFromUrl} from './file/src';
// 图片操作
export {imageFromFile as imageFromFile} from './file/src';

export {imageToBase64 as imageToBase64} from './file/src';

export {dowmloadScreenshotPicture as dowmloadScreenshotPicture} from './file/src';

/****************************  数组操作函数    *****************************/
export {convertToTwodimensional as convertToTwodimensional} from './array/src';
// 树的查询
export {findTreeOrder as findTreeOrder} from './array/src';
export {findSubtreeByOrder as findSubtreeByOrder} from './array/src';


/****************************  字符串 数字操作    *****************************/
export {uuid as uuid} from './string/src';

export {formatStr as formatStr} from './string/src';
// 字符串截断
export {ellipsps as ellipsps} from './string/src';

export {strWidth as strWidth} from './string/src';

// 提取被字符包裹住的内容
export {extractEnclosedContent as extractEnclosedContent} from './string/src';
export {extractParenthesesContent as extractParenthesesContent} from './string/src';
export {extractMiddleParenthesesContent as extractMiddleParenthesesContent} from './string/src';
export {extractBigParenthesesContent as extractBigParenthesesContent} from './string/src';

// 颜色处理
export {addOpacity as addOpacity} from './string/src';
export {hex2Rgb as hex2Rgb} from './string/src';
export {rgb2hex as rgb2hex} from './string/src';
export {rgba2hex as rgba2hex} from './string/src';
export {rgba2rgb as rgba2rgb} from './string/src';
// url路径拼接
export {pathJoin as pathJoin} from './string/src';
/****************************  对象操作    *****************************/
// clone函数
export {clone as clone} from './object/src';

export {cloneAllItems as cloneAllItems} from './object/src';

export {cloneAllArray as cloneAllArray} from './object/src';

export {cloneAllObject as cloneAllObject} from './object/src';

export {mousePosition as mousePosition} from './object/src';

export {getStyle as getStyle} from './object/src';
// 获取父级dom 直到Expected条件为true
export {parentByExpected as parentByExpected} from './object/src';
// 复制文本
export {copyText as copyText} from './object/src';
// 数组 对象 字符串长度
export {length as length} from './object/src';

/**
 * 对象属性合并 数组默认覆盖
 */
export {assignDeep as assignDeep} from './object/src';
/**
 * 对象属性合并（数组是concat合并）
 */
export {assignDeepMergeArray as assignDeepMergeArray} from './object/src';
/**
 * 对象属性合并（数组不做处理）
 */
export {assignDeepNotIncludedArray as assignDeepNotIncludedArray} from './object/src';

/**
 * 对象的过滤循环
 */
export {filterObject as filterObject} from './object/src';
/**
 * 对象的map循环
 */
export {mapObject as mapObject} from './object/src';
/**
 * 对象forEach
 */
export {forEachObject as forEachObject} from './object/src';
/****************************  函数操作    *****************************/
export {ResponseMonad as ResponseMonad} from './function/src';
// 缓存函数
export {memoized as memoized} from './function/src';
export {MemoizedFn as MemoizedFn} from './function/src';
// 异步缓存
export {asyncMemoized as asyncMemoized} from './function/src';
export {AsyncMemoizedFn as AsyncMemoizedFn} from './function/src';
// 柯理化函数
export {curry as curry} from './function/src';

export {partial as partial} from './function/src';
// 函数合并
export {compose as compose} from './function/src';
export {composePromises as composePromises} from './function/src';
export {pipe as pipe} from './function/src';
// fullscreen函数
export {isFullscreen as isFullscreen} from './function/src';
export {fullscreen as fullscreen} from './function/src';
export {exitFullscreen as exitFullscreen} from './function/src';
export {autoFullscreen as autoFullscreen} from './function/src';

// 窗口尺寸
export {WindowSize as WindowSize} from './function/src';
export {windowSize as windowSize} from './function/src';
// 去抖 节流
export {DebounceOptions as DebounceOptions} from "./function/src";
export {debounce as debounce} from "./function/src";
export {ThrottleOptions as ThrottleOptions} from "./function/src";
export {throttle as throttle} from "./function/src";

/****************************  时间操作    *****************************/
export {formatTimestamp as formatTimestamp} from './date/src';
export {TimestampType as TimestampType} from './date/src';

export {getYear as getYear} from './date/src';

export {getMonth as getMonth} from './date/src';

export {getDay as getDay} from './date/src';

export {getHours as getHours} from './date/src';

export {getMinutes as getMinutes} from './date/src';

export {getSeconds as getSeconds} from './date/src';

export {getWeek as getWeek} from './date/src';

export {getWeekCN as getWeekCN} from './date/src';

export {timeRange as timeRange} from './date/src';
export {TimeRange as TimeRange} from './date/src';

export {TimeRangeType as TimeRangeType} from './date/src';
export {timeRangeCurrent as timeRangeCurrent} from './date/src';

export {timeRangePrevious as timeRangePrevious} from './date/src';

export {currentQuarterFirstMonth as currentQuarterFirstMonth} from './date/src';

export {currentQuarterLastMonth as currentQuarterLastMonth} from './date/src';

export {currentQuarterDays as currentQuarterDays} from './date/src';

export {currentDayEarliest as currentDayEarliest} from './date/src';

export {currentDayLatest as currentDayLatest} from './date/src';
/****************************  number操作    *****************************/
export {randomInt as randomInt} from './number/src';

export {toThousands as toThousands} from './number/src';
export {unitUpgrade as unitUpgrade} from './number/src';
export {bitUpgrade as bitUpgrade} from './number/src';
export {bitRateUpgrade as bitRateUpgrade} from './number/src';

export {max as max} from './number/src';
export {min as min} from './number/src';
