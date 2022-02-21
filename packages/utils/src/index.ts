import {
    // 数据类型判断
    isObject, isArray, isElement, isEmpty, isNumber, isEmptyObject,
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

import {
    downloadStream, download,
    // 删除参数中的空数据 处理不合规参数 从url中获取参数
    urlJoinParmas, removeUrlParams, routeFromUri, removeEmptyParams,
    makeParamsProper, queryParamsFromUrl,
    // 图片操作
    imageFromFile, openToPreviewBase64, imageToBase64, dowmloadScreenshotPicture,
    // 图片类型数据转换
    file2Blob, file2Url, base642Blob, blob2File, base642File, blob2Base64,
    // css 和 react style 相互转换
    obj2css, css2obj
} from "@gaopeng123/utils.file";

import type {DownloadStreamParams, DownloadParams} from "@gaopeng123/utils.file";

import {
    // 数组截断转二维数组
    convertToTwodimensional,
    // 树的查询
    findTreeOrder, findSubtreeByOrder
} from "@gaopeng123/utils.array";


import {
    uuid, formatStr,
    // 字符串截断
    ellipsps, strWidth,
    // 提取被字符包裹住的内容
    extractEnclosedContent, extractParenthesesContent, extractMiddleParenthesesContent, extractBigParenthesesContent,
    // 常用正则校验
    IPV4, PHONE_NUMBER,
    // 颜色处理
    addOpacity, hex2Rgb, rgb2hex, rgba2hex, rgba2rgb,
    // url路径拼接
    pathJoin,
    // 驼峰转换
    hump2hyphen, hyphen2hump,
} from "@gaopeng123/utils.string";


import {
    // clone函数
    clone, cloneAllItems, cloneAllArray, cloneAllObject,
    // 鼠标样式获取 样式获取 获取父级dom 直到Expected条件为true
    mousePosition, getStyle, parentByExpected,
    // 复制文本 数组 对象 字符串长度
    copyText, length,
    // 1、对象属性合并 数组默认覆盖 2、对象属性合并（数组是concat合并） 3、对象属性合并（数组不做处理）
    assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray,
    // 对象的过滤循环  对象的map循环 对象forEach
    filterObject, mapObject, forEachObject
} from "@gaopeng123/utils.object";

import {
    // Monad函数  柯理化函数 函数合并
    ResponseMonad, curry, partial, compose, composePromises, pipe,
    // 缓存函数
    memoized, asyncMemoized,
    // fullscreen函数
    isFullscreen, fullscreen, exitFullscreen, autoFullscreen,
    // 窗口尺寸
    windowSize,
    // 去抖 节流
    debounce, throttle
} from "@gaopeng123/utils.function";

import {MemoizedFn, AsyncMemoizedFn, WindowSize, DebounceOptions, ThrottleOptions,} from "@gaopeng123/utils.function";

import {
    formatTimestamp,
    getYear, getMonth, getDay, getHours, getMinutes, getSeconds, getWeek, getWeekCN,
    timeRange, timeRangeCurrent, timeRangePrevious,
    currentQuarterFirstMonth, currentQuarterLastMonth, currentQuarterDays,
    currentDayEarliest, currentDayLatest,
} from "@gaopeng123/utils.date";

import type {TimestampType, TimeRange, TimeRangeType,} from "@gaopeng123/utils.date";

import {
    randomInt, toThousands, unitUpgrade, bitUpgrade, bitRateUpgrade,
    max, min
} from "@gaopeng123/utils.number";

/****************************   基本类型判断    *****************************/
export {
    // 数据类型判断
    isObject, isArray, isElement, isEmpty, isNumber, isEmptyObject,
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
}
/****************************   文件操作    *****************************/
export {
    downloadStream, download,
    // 删除参数中的空数据 处理不合规参数 从url中获取参数
    urlJoinParmas, removeUrlParams, routeFromUri, removeEmptyParams,
    makeParamsProper, queryParamsFromUrl,
    // 图片操作
    imageFromFile, openToPreviewBase64, imageToBase64, dowmloadScreenshotPicture,
    // 图片类型数据转换
    file2Blob, file2Url, base642Blob, blob2File, base642File, blob2Base64,
    // css 和 react style 相互转换
    obj2css, css2obj
}

export type {DownloadStreamParams, DownloadParams};


/****************************  数组操作函数    *****************************/

export {
    // 数组截断转二维数组
    convertToTwodimensional,
    // 树的查询
    findTreeOrder, findSubtreeByOrder
}

/****************************  字符串 数字操作    *****************************/
export {
    uuid, formatStr,
    // 字符串截断
    ellipsps, strWidth,
    // 提取被字符包裹住的内容
    extractEnclosedContent, extractParenthesesContent, extractMiddleParenthesesContent, extractBigParenthesesContent,
    // 常用正则校验
    IPV4, PHONE_NUMBER,
    // 颜色处理
    addOpacity, hex2Rgb, rgb2hex, rgba2hex, rgba2rgb,
    // url路径拼接
    pathJoin,
    // 驼峰转换
    hump2hyphen, hyphen2hump,
}
/****************************  对象操作    *****************************/
export {
    // clone函数
    clone, cloneAllItems, cloneAllArray, cloneAllObject,
    // 鼠标样式获取 样式获取 获取父级dom 直到Expected条件为true
    mousePosition, getStyle, parentByExpected,
    // 复制文本 数组 对象 字符串长度
    copyText, length,
    // 1、对象属性合并 数组默认覆盖 2、对象属性合并（数组是concat合并） 3、对象属性合并（数组不做处理）
    assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray,
    // 对象的过滤循环  对象的map循环 对象forEach
    filterObject, mapObject, forEachObject
}
/****************************  函数操作    *****************************/
export {
    // Monad函数  柯理化函数 函数合并
    ResponseMonad, curry, partial, compose, composePromises, pipe,
    // 缓存函数
    memoized, asyncMemoized,
    // fullscreen函数
    isFullscreen, fullscreen, exitFullscreen, autoFullscreen,
    // 窗口尺寸
    windowSize,
    // 去抖 节流
    debounce, throttle
}

export {MemoizedFn, AsyncMemoizedFn, WindowSize, DebounceOptions, ThrottleOptions,}

/****************************  时间操作    *****************************/

export {
    formatTimestamp,
    getYear, getMonth, getDay, getHours, getMinutes, getSeconds, getWeek, getWeekCN,
    timeRange, timeRangeCurrent, timeRangePrevious,
    currentQuarterFirstMonth, currentQuarterLastMonth, currentQuarterDays,
    currentDayEarliest, currentDayLatest,
}

export {
    TimestampType, TimeRange, TimeRangeType,
}

/****************************  number操作    *****************************/
export {
    randomInt, toThousands, unitUpgrade, bitUpgrade, bitRateUpgrade,
    max, min
}

