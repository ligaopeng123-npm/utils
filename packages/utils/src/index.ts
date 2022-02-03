// @ts-nocheck
/****************************   基本类型判断    *****************************/
export {isObject as isObject} from '@gaopeng123/utils.types';
export {isArray as isArray} from '@gaopeng123/utils.types';
export {isElement as isElement} from '@gaopeng123/utils.types';
export {isEmpty as isEmpty} from '@gaopeng123/utils.types';
export {isNumber as isNumber} from '@gaopeng123/utils.types';
export {isEmptyObject as isEmptyObject} from '@gaopeng123/utils.types';
export {isEqualByObj as isEqualByObj} from '@gaopeng123/utils.types';
export {isFunction as isFunction} from '@gaopeng123/utils.types';
export {isPromise as isPromise} from '@gaopeng123/utils.types';
export {isString as isString} from '@gaopeng123/utils.types';
export {isDate as isDate} from '@gaopeng123/utils.types';
export {isUndefined as isUndefined} from '@gaopeng123/utils.types';
export {isJSON as isJSON} from '@gaopeng123/utils.types';
export {isBoolean as isBoolean} from "@gaopeng123/utils.types";
export {isBuffer as isBuffer} from "@gaopeng123/utils.types";
export {isFormData as isFormData} from "@gaopeng123/utils.types";
export {isFile as isFile} from "@gaopeng123/utils.types";
export {isBlob as isBlob} from "@gaopeng123/utils.types";
export {isStream as isStream} from "@gaopeng123/utils.types";
export {isURLSearchParams as isURLSearchParams} from "@gaopeng123/utils.types";

/**
 * 浏览器判断
 */
export {isChrome as isChrome} from "@gaopeng123/utils.types";
export {isFirefox as isFirefox} from "@gaopeng123/utils.types";
export {isWebKit as isWebKit} from "@gaopeng123/utils.types";
export {isSafari as isSafari} from "@gaopeng123/utils.types";
export {isOpera as isOpera} from "@gaopeng123/utils.types";
export {isEdge as isEdge} from "@gaopeng123/utils.types";
export {isIE as isIE} from "@gaopeng123/utils.types";
export {isGecko as isGecko} from "@gaopeng123/utils.types";
/**
 * 硬件判断
 */
export {isWindows as isWindows} from "@gaopeng123/utils.types";
export {isMac as isMac} from "@gaopeng123/utils.types";
export {isLinux as isLinux} from "@gaopeng123/utils.types";
export {isMobile as isMobile} from "@gaopeng123/utils.types";
/**
 * 版本获取
 */
export {chromeVersion as chromeVersion} from "@gaopeng123/utils.types";
export {firefoxVersion as firefoxVersion} from "@gaopeng123/utils.types";
export {ieVersion as ieVersion} from "@gaopeng123/utils.types";
export {operaVersion as operaVersion} from "@gaopeng123/utils.types";
export {safariVersion as safariVersion} from "@gaopeng123/utils.types";
export {webKitVersion as webKitVersion} from "@gaopeng123/utils.types";

/**
 * 安全模式获取
 */
export {isStrict as isStrict} from "@gaopeng123/utils.types";
export {isSecure as isSecure} from "@gaopeng123/utils.types";

/****************************   文件操作    *****************************/
export {downloadStream as downloadStream} from '@gaopeng123/utils.file';
export {downloadStreamParams as downloadStreamParams} from '@gaopeng123/utils.file';

export {download as download} from '@gaopeng123/utils.file';
export {downloadParams as downloadParams} from '@gaopeng123/utils.file';

export {urlJoinParmas as urlJoinParmas} from '@gaopeng123/utils.file';

export {removeUrlParams as removeUrlParams} from '@gaopeng123/utils.file';

export {routeFromUri as routeFromUri} from '@gaopeng123/utils.file';

// 删除参数中的空数据
export {removeEmptyParams as removeEmptyParams} from '@gaopeng123/utils.file';
// 处理不合规参数
export {makeParamsProper as makeParamsProper} from '@gaopeng123/utils.file';
// 从url中获取参数
export {queryParamsFromUrl as queryParamsFromUrl} from '@gaopeng123/utils.file';
// 图片操作
export {imageFromFile as imageFromFile} from '@gaopeng123/utils.file';

export {openToPreviewBase64 as openToPreviewBase64} from '@gaopeng123/utils.file';

export {imageToBase64 as imageToBase64} from '@gaopeng123/utils.file';

export {dowmloadScreenshotPicture as dowmloadScreenshotPicture} from '@gaopeng123/utils.file';

// 图片类型数据转换
export {file2Blob as file2Blob} from '@gaopeng123/utils.file';
export {file2Url as file2Url} from '@gaopeng123/utils.file';
export {base642Blob as base642Blob} from '@gaopeng123/utils.file';
export {blob2File as blob2File} from '@gaopeng123/utils.file';
export {base642File as base642File} from '@gaopeng123/utils.file';
export {blob2Base64 as blob2Base64} from '@gaopeng123/utils.file';

/****************************  数组操作函数    *****************************/
export {convertToTwodimensional as convertToTwodimensional} from '@gaopeng123/utils.array';
// 树的查询
export {findTreeOrder as findTreeOrder} from '@gaopeng123/utils.array';
export {findSubtreeByOrder as findSubtreeByOrder} from '@gaopeng123/utils.array';


/****************************  字符串 数字操作    *****************************/
export {uuid as uuid} from '@gaopeng123/utils.string';

export {formatStr as formatStr} from '@gaopeng123/utils.string';
// 字符串截断
export {ellipsps as ellipsps} from '@gaopeng123/utils.string';

export {strWidth as strWidth} from '@gaopeng123/utils.string';

// 提取被字符包裹住的内容
export {extractEnclosedContent as extractEnclosedContent} from '@gaopeng123/utils.string';
export {extractParenthesesContent as extractParenthesesContent} from '@gaopeng123/utils.string';
export {extractMiddleParenthesesContent as extractMiddleParenthesesContent} from '@gaopeng123/utils.string';
export {extractBigParenthesesContent as extractBigParenthesesContent} from '@gaopeng123/utils.string';

// 常用正则校验
export {IPV4 as IPV4} from '@gaopeng123/utils.string';
export {PHONE_NUMBER as PHONE_NUMBER} from '@gaopeng123/utils.string';

// 颜色处理
export {addOpacity as addOpacity} from '@gaopeng123/utils.string';
export {hex2Rgb as hex2Rgb} from '@gaopeng123/utils.string';
export {rgb2hex as rgb2hex} from '@gaopeng123/utils.string';
export {rgba2hex as rgba2hex} from '@gaopeng123/utils.string';
export {rgba2rgb as rgba2rgb} from '@gaopeng123/utils.string';
// url路径拼接
export {pathJoin as pathJoin} from '@gaopeng123/utils.string';
/****************************  对象操作    *****************************/
// clone函数
export {clone as clone} from '@gaopeng123/utils.object';

export {cloneAllItems as cloneAllItems} from '@gaopeng123/utils.object';

export {cloneAllArray as cloneAllArray} from '@gaopeng123/utils.object';

export {cloneAllObject as cloneAllObject} from '@gaopeng123/utils.object';

export {mousePosition as mousePosition} from '@gaopeng123/utils.object';

export {getStyle as getStyle} from '@gaopeng123/utils.object';
// 获取父级dom 直到Expected条件为true
export {parentByExpected as parentByExpected} from '@gaopeng123/utils.object';
// 复制文本
export {copyText as copyText} from '@gaopeng123/utils.object';
// 数组 对象 字符串长度
export {length as length} from '@gaopeng123/utils.object';

/**
 * 对象属性合并 数组默认覆盖
 */
export {assignDeep as assignDeep} from '@gaopeng123/utils.object';
/**
 * 对象属性合并（数组是concat合并）
 */
export {assignDeepMergeArray as assignDeepMergeArray} from '@gaopeng123/utils.object';
/**
 * 对象属性合并（数组不做处理）
 */
export {assignDeepNotIncludedArray as assignDeepNotIncludedArray} from '@gaopeng123/utils.object';

/**
 * 对象的过滤循环
 */
export {filterObject as filterObject} from '@gaopeng123/utils.object';
/**
 * 对象的map循环
 */
export {mapObject as mapObject} from '@gaopeng123/utils.object';
/**
 * 对象forEach
 */
export {forEachObject as forEachObject} from '@gaopeng123/utils.object';
/****************************  函数操作    *****************************/
export {ResponseMonad as ResponseMonad} from '@gaopeng123/utils.function';
// 缓存函数
export {memoized as memoized} from '@gaopeng123/utils.function';
export {MemoizedFn as MemoizedFn} from '@gaopeng123/utils.function';
// 异步缓存
export {asyncMemoized as asyncMemoized} from '@gaopeng123/utils.function';
export {AsyncMemoizedFn as AsyncMemoizedFn} from '@gaopeng123/utils.function';
// 柯理化函数
export {curry as curry} from '@gaopeng123/utils.function';

export {partial as partial} from '@gaopeng123/utils.function';
// 函数合并
export {compose as compose} from '@gaopeng123/utils.function';
export {composePromises as composePromises} from '@gaopeng123/utils.function';
export {pipe as pipe} from '@gaopeng123/utils.function';
// fullscreen函数
export {isFullscreen as isFullscreen} from '@gaopeng123/utils.function';
export {fullscreen as fullscreen} from '@gaopeng123/utils.function';
export {exitFullscreen as exitFullscreen} from '@gaopeng123/utils.function';
export {autoFullscreen as autoFullscreen} from '@gaopeng123/utils.function';

// 窗口尺寸
export {WindowSize as WindowSize} from '@gaopeng123/utils.function';
export {windowSize as windowSize} from '@gaopeng123/utils.function';
// 去抖 节流
export {DebounceOptions as DebounceOptions} from "@gaopeng123/utils.function";
export {debounce as debounce} from "@gaopeng123/utils.function";
export {ThrottleOptions as ThrottleOptions} from "@gaopeng123/utils.function";
export {throttle as throttle} from "@gaopeng123/utils.function";

/****************************  时间操作    *****************************/
export {formatTimestamp as formatTimestamp} from '@gaopeng123/utils.date';
export {TimestampType as TimestampType} from '@gaopeng123/utils.date';

export {getYear as getYear} from '@gaopeng123/utils.date';

export {getMonth as getMonth} from '@gaopeng123/utils.date';

export {getDay as getDay} from '@gaopeng123/utils.date';

export {getHours as getHours} from '@gaopeng123/utils.date';

export {getMinutes as getMinutes} from '@gaopeng123/utils.date';

export {getSeconds as getSeconds} from '@gaopeng123/utils.date';

export {getWeek as getWeek} from '@gaopeng123/utils.date';

export {getWeekCN as getWeekCN} from '@gaopeng123/utils.date';

export {timeRange as timeRange} from '@gaopeng123/utils.date';
export {TimeRange as TimeRange} from '@gaopeng123/utils.date';

export {TimeRangeType as TimeRangeType} from '@gaopeng123/utils.date';
export {timeRangeCurrent as timeRangeCurrent} from '@gaopeng123/utils.date';

export {timeRangePrevious as timeRangePrevious} from '@gaopeng123/utils.date';

export {currentQuarterFirstMonth as currentQuarterFirstMonth} from '@gaopeng123/utils.date';

export {currentQuarterLastMonth as currentQuarterLastMonth} from '@gaopeng123/utils.date';

export {currentQuarterDays as currentQuarterDays} from '@gaopeng123/utils.date';

export {currentDayEarliest as currentDayEarliest} from '@gaopeng123/utils.date';

export {currentDayLatest as currentDayLatest} from '@gaopeng123/utils.date';
/****************************  number操作    *****************************/
export {randomInt as randomInt} from '@gaopeng123/utils.number';

export {toThousands as toThousands} from '@gaopeng123/utils.number';
export {unitUpgrade as unitUpgrade} from '@gaopeng123/utils.number';
export {bitUpgrade as bitUpgrade} from '@gaopeng123/utils.number';
export {bitRateUpgrade as bitRateUpgrade} from '@gaopeng123/utils.number';

export {max as max} from '@gaopeng123/utils.number';
export {min as min} from '@gaopeng123/utils.number';
