/****************************   基本类型判断    *****************************/
export {
    // 数据类型判断
    isObject, isArray, isElement, isEmpty, isNumber, isEmptyObject, isNull,
    isEqualByObj, isFunction, isPromise, isString, isDate, isUndefined,
    isJSON, isBoolean, isBuffer, isFormData, isFile, isBlob, isStream, isURLSearchParams,
    // 浏览器判断
    isChrome, isFirefox, isWebKit, isSafari, isOpera, isEdge, isIE, isGecko,
    // 硬件判断
    isWindows, isMac, isLinux, isMobile,
    // 版本获取
    chromeVersion, firefoxVersion, ieVersion, operaVersion, safariVersion, webKitVersion,
    // 安全模式获取
    isStrict, isSecure
} from '@gaopeng123/utils.types';

/****************************   文件操作    *****************************/
export {
    downloadStream, download,
    // 删除参数中的空数据 处理不合规参数 从url中获取参数
    urlJoinParmas, removeUrlParams, routeFromUri, removeEmptyParams,
    //使参数合适 正确, 解析url，获取参数
    makeParamsProper, queryParamsFromUrl,
    // 图片操作
    imageFromFile, openToPreviewBase64, imageToBase64, dowmloadScreenshotPicture,
    // 动态插入js
    injectScript,
    // 图片类型数据转换
    file2Blob, file2Url, base642Blob, blob2File, base642File, blob2Base64,
    // css 和 react style 相互转换
    obj2css, css2obj
} from "@gaopeng123/utils.file";

export type {DownloadStreamParams, DownloadParams} from "@gaopeng123/utils.file";

/****************************  数组操作函数    *****************************/
export {
    // 数组截断转二维数组       分页器                  array 转 tree
    convertToTwodimensional, pageTurnerFixedLength, list2tree,
    // 树的查询
    findTreeOrder, findSubtreeByOrder, traverseTree, mapTree
} from "@gaopeng123/utils.array";

/****************************  字符串 数字操作    *****************************/
export {
    uuid, formatStr,
    // 字符串截断
    ellipsps, strWidth,
    // 提取被字符包裹住的内容
    extractEnclosedContent, extractParenthesesContent, extractMiddleParenthesesContent, extractBigParenthesesContent,
    // 常用正则校验
    PHONE_NUMBER_STR, PHONE_NUMBER, PASSWORD_STR, PASSWORD, IPV4_STR, IPV4,
    // 颜色处理
    addOpacity, hex2Rgb, rgb2hex, rgba2hex, rgba2rgb,
    // url路径拼接
    pathJoin,
    // 驼峰转换
    hump2hyphen, hyphen2hump,
    // css style 尺寸单位处理
    addBoxSizeUnit
} from "@gaopeng123/utils.string";

/****************************  对象操作    *****************************/
export {
    // clone函数
    clone, cloneAllItems, cloneAllArray, cloneAllObject,
    // 鼠标样式获取 样式获取 获取父级dom 直到Expected条件为true
    mousePosition, getStyle, parentByExpected, isVisibleInViewport, observeViewport,
    // 复制文本 数组 对象 字符串长度
    copyText, length,
    // 1、对象属性合并 数组默认覆盖 2、对象属性合并（数组是concat合并） 3、对象属性合并（数组不做处理）
    assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray, assignIfByOrder, assignIf,
    // 对象的过滤循环  对象的map循环 对象forEach
    filterObject, mapObject, forEachObject
} from "@gaopeng123/utils.object";

/****************************  函数操作    *****************************/
export {
    // Monad函数  柯理化函数 函数合并
    ResponseMonad, curry, partial, compose, composePromises, pipe,
    // 缓存函数
    memoized, asyncMemoized,
    // fullscreen函数
    isFullscreen, fullscreen, exitFullscreen, autoFullscreen,
    // 窗口尺寸
    windowSize, pcZoom,
    // 去抖 节流
    debounce, createDebounce, debounceOptions, throttle, createThrottle, throttleOptions, delay, asyncDelay
} from "@gaopeng123/utils.function";

export type {
    MemoizedFn, AsyncMemoizedFn, WindowSize, DebounceOptions, ThrottleOptions
} from "@gaopeng123/utils.function";

/****************************  时间操作    *****************************/

export {
    formatTimestamp, timestampToCN,
    getTime, getDate,
    getYear, getMonth, getDay, getHours, get12Hours, getMinutes, getSeconds, getWeek, getWeekCN, getWeekCNDay,
    timeRange, timeRangeCurrent, timeRangePrevious,
    currentQuarterFirstMonth, currentQuarterLastMonth, currentQuarterDays,
    currentDayEarliest, currentDayLatest,
} from "@gaopeng123/utils.date";

export type {TimestampType, TimeRange, TimeRangeType} from "@gaopeng123/utils.date";

/****************************  number操作    *****************************/
export {
    randomInt, toThousands, unitUpgrade, bitUpgrade, bitRateUpgrade,
    max, min
} from "@gaopeng123/utils.number";
