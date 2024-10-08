/**
 * 基础数据类型
 */

export { isObject, isArray,isSparseArray, isBoolean, isTrue, isFalse } from "./data";
export { isElement, isPromise, isAsync, isFunction, isNumber, isUndefined } from "./data";
export { isNull, isString, isJSON, isDate, isValidDate, isBuffer, isUTC, isFormData } from "./data";
export { isFile, isBlob, isStream, isURLSearchParams } from "./data";
export { isEmpty, isEmptyObject, isEqualByObj, isEqual, isFocus, isUrl } from "./data";
/**
 * 执行环境判断
 */
export { isNodejs, isBrowser } from "./data";
/**
 * 浏览器判断
 */
export { isChrome, isFirefox, isWebKit, isSafari, isOpera, isEdge, isIE, isGecko, isHasDom, getPlatform, isWX, isFlutter } from "./browser";
/**
 * 硬件判断
 */
export { isWindows, isMac, isLinux, isMobile, isAndroid, isIOS } from "./browser";
/**
 * 版本获取
 */
export { chromeVersion, firefoxVersion, ieVersion, operaVersion, safariVersion, webKitVersion } from "./browser";
/**
 * 安全模式获取
 */
export { isStrict, isSecure } from "./browser";
