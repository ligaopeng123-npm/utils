/**
 * 数据类型
 */
import { isAndroid, isIOS } from "./browser";

export { isObject, isArray, isBoolean, isTrue, isFalse } from "./data";
export { isElement as isElement } from "./data";
export { isPromise as isPromise } from "./data";
export { isFunction as isFunction } from "./data";
export { isNumber as isNumber } from "./data";
export { isUndefined as isUndefined } from "./data";
export { isNull as isNull } from "./data";
export { isString as isString } from "./data";
export { isJSON as isJSON } from "./data";
export { isDate as isDate, isUTC } from "./data";
export { isBuffer as isBuffer } from "./data";
export { isFormData as isFormData } from "./data";
export { isFile as isFile } from "./data";
export { isBlob as isBlob } from "./data";
export { isStream as isStream } from "./data";
export { isURLSearchParams as isURLSearchParams } from "./data";
export { isEmpty, isEmptyObject, isEqualByObj, isEqual } from "./data";

/**
 * 执行环境判断
 */
export { isNodejs, isBrowser } from "./data";

/**
 * 浏览器判断
 */
export { isChrome as isChrome } from "./browser";
export { isFirefox as isFirefox } from "./browser";
export { isWebKit as isWebKit } from "./browser";
export { isSafari as isSafari } from "./browser";
export { isOpera as isOpera } from "./browser";
export { isEdge as isEdge } from "./browser";
export { isIE as isIE } from "./browser";
export { isGecko as isGecko } from "./browser";
/**
 * 硬件判断
 */
export { isWindows as isWindows } from "./browser";
export { isMac as isMac } from "./browser";
export { isLinux as isLinux } from "./browser";
export { isMobile as isMobile } from "./browser";
export { isAndroid as isAndroid } from "./browser";
export { isIOS as isIOS } from "./browser";
/**
 * 版本获取
 */
export { chromeVersion as chromeVersion } from "./browser";
export { firefoxVersion as firefoxVersion } from "./browser";
export { ieVersion as ieVersion } from "./browser";
export { operaVersion as operaVersion } from "./browser";
export { safariVersion as safariVersion } from "./browser";
export { webKitVersion as webKitVersion } from "./browser";

/**
 * 安全模式获取
 */
export { isStrict as isStrict } from "./browser";
export { isSecure as isSecure } from "./browser";
