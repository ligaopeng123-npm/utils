/****************************   基本类型判断    *****************************/
export {isObject} from "@gaopeng123/utils.types";
export {isArray} from "@gaopeng123/utils.types";
export {isElement} from "@gaopeng123/utils.types";
export {isEmpty} from "@gaopeng123/utils.types";
export {isNumber} from "@gaopeng123/utils.types";
export {isEmptyObject} from "@gaopeng123/utils.types";
export {isEqualByObj} from "@gaopeng123/utils.types";
export {isFunction} from "@gaopeng123/utils.types";
export {isPromise} from "@gaopeng123/utils.types";
export {isString} from "@gaopeng123/utils.types";
export {isDate} from "@gaopeng123/utils.types";
export {isUndefined} from "@gaopeng123/utils.types";
export {isJSON} from "@gaopeng123/utils.types";
export {isBoolean} from "@gaopeng123/utils.types";
export {isBuffer} from "@gaopeng123/utils.types";
export {isFormData} from "@gaopeng123/utils.types";
export {isFile} from "@gaopeng123/utils.types";
export {isBlob} from "@gaopeng123/utils.types";
export {isStream} from "@gaopeng123/utils.types";
export {isURLSearchParams} from "@gaopeng123/utils.types";

/**
 * 浏览器判断
 */
export {isChrome} from "@gaopeng123/utils.types";
export {isFirefox} from "@gaopeng123/utils.types";
export {isWebKit} from "@gaopeng123/utils.types";
export {isSafari} from "@gaopeng123/utils.types";
export {isOpera} from "@gaopeng123/utils.types";
export {isEdge} from "@gaopeng123/utils.types";
export {isIE} from "@gaopeng123/utils.types";
export {isGecko} from "@gaopeng123/utils.types";
/**
 * 硬件判断
 */
export {isWindows} from "@gaopeng123/utils.types";
export {isMac} from "@gaopeng123/utils.types";
export {isLinux} from "@gaopeng123/utils.types";
export {isMobile} from "@gaopeng123/utils.types";
/**
 * 版本获取
 */
export {chromeVersion} from "@gaopeng123/utils.types";
export {firefoxVersion} from "@gaopeng123/utils.types";
export {ieVersion} from "@gaopeng123/utils.types";
export {operaVersion} from "@gaopeng123/utils.types";
export {safariVersion} from "@gaopeng123/utils.types";
export {webKitVersion} from "@gaopeng123/utils.types";

/**
 * 安全模式获取
 */
export {isStrict} from "@gaopeng123/utils.types";
export {isSecure} from "@gaopeng123/utils.types";

/****************************   文件操作    *****************************/
export {downloadStream} from "@gaopeng123/utils.file";
export type {DownloadStreamParams} from "@gaopeng123/utils.file";

export {download} from "@gaopeng123/utils.file";
export type {DownloadParams} from "@gaopeng123/utils.file";

export {urlJoinParmas} from "@gaopeng123/utils.file";

export {removeUrlParams} from "@gaopeng123/utils.file";

export {routeFromUri} from "@gaopeng123/utils.file";

// 删除参数中的空数据
export {removeEmptyParams} from "@gaopeng123/utils.file";
// 处理不合规参数
export {makeParamsProper} from "@gaopeng123/utils.file";
// 从url中获取参数
export {queryParamsFromUrl} from "@gaopeng123/utils.file";
// 图片操作
export {imageFromFile} from "@gaopeng123/utils.file";

export {openToPreviewBase64} from "@gaopeng123/utils.file";

export {imageToBase64} from "@gaopeng123/utils.file";

export {dowmloadScreenshotPicture} from "@gaopeng123/utils.file";

// 图片类型数据转换
export {file2Blob} from "@gaopeng123/utils.file";
export {file2Url} from "@gaopeng123/utils.file";
export {base642Blob} from "@gaopeng123/utils.file";
export {blob2File} from "@gaopeng123/utils.file";
export {base642File} from "@gaopeng123/utils.file";
export {blob2Base64} from "@gaopeng123/utils.file";

// css 和 react style 相互转换
export {obj2css} from "@gaopeng123/utils.file";
export {css2obj} from "@gaopeng123/utils.file";

/****************************  数组操作函数    *****************************/
export {convertToTwodimensional} from "@gaopeng123/utils.array";
// 树的查询
export {findTreeOrder} from "@gaopeng123/utils.array";
export {findSubtreeByOrder} from "@gaopeng123/utils.array";


/****************************  字符串 数字操作    *****************************/
export {uuid} from "@gaopeng123/utils.string";

export {formatStr} from "@gaopeng123/utils.string";
// 字符串截断
export {ellipsps} from "@gaopeng123/utils.string";

export {strWidth} from "@gaopeng123/utils.string";

// 提取被字符包裹住的内容
export {extractEnclosedContent} from "@gaopeng123/utils.string";
export {extractParenthesesContent} from "@gaopeng123/utils.string";
export {extractMiddleParenthesesContent} from "@gaopeng123/utils.string";
export {extractBigParenthesesContent} from "@gaopeng123/utils.string";

// 常用正则校验
export {IPV4} from "@gaopeng123/utils.string";
export {PHONE_NUMBER} from "@gaopeng123/utils.string";

// 颜色处理
export {addOpacity} from "@gaopeng123/utils.string";
export {hex2Rgb} from "@gaopeng123/utils.string";
export {rgb2hex} from "@gaopeng123/utils.string";
export {rgba2hex} from "@gaopeng123/utils.string";
export {rgba2rgb} from "@gaopeng123/utils.string";
// url路径拼接
export {pathJoin} from "@gaopeng123/utils.string";
// 驼峰转换
export {hump2hyphen} from "@gaopeng123/utils.string";
export {hyphen2hump} from "@gaopeng123/utils.string";
/****************************  对象操作    *****************************/
// clone函数
export {clone} from "@gaopeng123/utils.object";

export {cloneAllItems} from "@gaopeng123/utils.object";

export {cloneAllArray} from "@gaopeng123/utils.object";

export {cloneAllObject} from "@gaopeng123/utils.object";

export {mousePosition} from "@gaopeng123/utils.object";

export {getStyle} from "@gaopeng123/utils.object";
// 获取父级dom 直到Expected条件为true
export {parentByExpected} from "@gaopeng123/utils.object";
// 复制文本
export {copyText} from "@gaopeng123/utils.object";
// 数组 对象 字符串长度
export {length} from "@gaopeng123/utils.object";

/**
 * 对象属性合并 数组默认覆盖
 */
export {assignDeep} from "@gaopeng123/utils.object";
/**
 * 对象属性合并（数组是concat合并）
 */
export {assignDeepMergeArray} from "@gaopeng123/utils.object";
/**
 * 对象属性合并（数组不做处理）
 */
export {assignDeepNotIncludedArray} from "@gaopeng123/utils.object";

/**
 * 对象的过滤循环
 */
export {filterObject} from "@gaopeng123/utils.object";
/**
 * 对象的map循环
 */
export {mapObject} from "@gaopeng123/utils.object";
/**
 * 对象forEach
 */
export {forEachObject} from "@gaopeng123/utils.object";
/****************************  函数操作    *****************************/
export {ResponseMonad} from "@gaopeng123/utils.function";
// 缓存函数
export {memoized} from "@gaopeng123/utils.function";
export type {MemoizedFn} from "@gaopeng123/utils.function";
// 异步缓存
export {asyncMemoized} from "@gaopeng123/utils.function";
export type {AsyncMemoizedFn} from "@gaopeng123/utils.function";
// 柯理化函数
export {curry} from "@gaopeng123/utils.function";

export {partial} from "@gaopeng123/utils.function";
// 函数合并
export {compose} from "@gaopeng123/utils.function";
export {composePromises} from "@gaopeng123/utils.function";
export {pipe} from "@gaopeng123/utils.function";
// fullscreen函数
export {isFullscreen} from "@gaopeng123/utils.function";
export {fullscreen} from "@gaopeng123/utils.function";
export {exitFullscreen} from "@gaopeng123/utils.function";
export {autoFullscreen} from "@gaopeng123/utils.function";

// 窗口尺寸
export type {WindowSize} from "@gaopeng123/utils.function";
export {windowSize} from "@gaopeng123/utils.function";
// 去抖 节流
export type {DebounceOptions} from "@gaopeng123/utils.function";
export {debounce} from "@gaopeng123/utils.function";
export type {ThrottleOptions} from "@gaopeng123/utils.function";
export {throttle} from "@gaopeng123/utils.function";

/****************************  时间操作    *****************************/
export {formatTimestamp} from "@gaopeng123/utils.date";
export type {TimestampType} from "@gaopeng123/utils.date";

export {getYear} from "@gaopeng123/utils.date";

export {getMonth} from "@gaopeng123/utils.date";

export {getDay} from "@gaopeng123/utils.date";

export {getHours} from "@gaopeng123/utils.date";

export {getMinutes} from "@gaopeng123/utils.date";

export {getSeconds} from "@gaopeng123/utils.date";

export {getWeek} from "@gaopeng123/utils.date";

export {getWeekCN} from "@gaopeng123/utils.date";

export {timeRange} from "@gaopeng123/utils.date";
export type {TimeRange} from "@gaopeng123/utils.date";

export type {TimeRangeType} from "@gaopeng123/utils.date";
export {timeRangeCurrent} from "@gaopeng123/utils.date";

export {timeRangePrevious} from "@gaopeng123/utils.date";

export {currentQuarterFirstMonth} from "@gaopeng123/utils.date";

export {currentQuarterLastMonth} from "@gaopeng123/utils.date";

export {currentQuarterDays} from "@gaopeng123/utils.date";

export {currentDayEarliest} from "@gaopeng123/utils.date";

export {currentDayLatest} from "@gaopeng123/utils.date";
/****************************  number操作    *****************************/
export {randomInt} from "@gaopeng123/utils.number";

export {toThousands} from "@gaopeng123/utils.number";
export {unitUpgrade} from "@gaopeng123/utils.number";
export {bitUpgrade} from "@gaopeng123/utils.number";
export {bitRateUpgrade} from "@gaopeng123/utils.number";

export {max} from "@gaopeng123/utils.number";
export {min} from "@gaopeng123/utils.number";
