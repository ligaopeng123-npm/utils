/**********************************************************************
 *
 * @模块名称: browser
 *
 * @模块用途: browser  检查浏览器
 *
 * @date: 2021/9/7 14:16
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 检查浏览器状态
 * @param regex
 */
export const check = function (regex: RegExp) {
    return regex.test(navigator.userAgent.toLowerCase());
};
/**
 * 是否能使用dom
 */
export const isHasDom = () => {
    return !!(typeof window !== 'undefined' && typeof document !== 'undefined' && window.document && window.document.createElement);
};
/**
 * 版本检查
 * @param is
 * @param regex
 */
export const version = function (is: boolean, regex: RegExp) {
    let m;
    return is && (m = regex.exec(navigator.userAgent.toLowerCase()))
        ? parseFloat(m[1])
        : 0;
};
/**
 * Chrome检查
 */
export const isChrome = (): boolean => {
    return check(/\bchrome\b/) && !check(/edge/);
};
/**
 * 火狐
 */
export const isFirefox = (): boolean => {
    return firefoxVersion() ? true : false;
};
/**
 * webkit内核检查
 */
export const isWebKit = (): boolean => {
    return check(/webkit/);
};
/**
 * Safari 检查
 */
export const isSafari = (): boolean => {
    return !isChrome() && check(/safari/);
};
/**
 * Opera浏览器检查
 */
export const isOpera = (): boolean => {
    return check(/opera/);
};
/**
 * Edge 检查
 */
export const isEdge = (): boolean => {
    return isIE() && check(/edge/);
};
/**
 * IE检查
 */
export const isIE = (): boolean => {
    const ActiveXObject: any = 'ActiveXObject';
    return (!isOpera() && (check(/msie/) || check(/edge/))) ||
        (!!window[ActiveXObject] || ActiveXObject in window);
};
/**
 * Gecko内核检查
 */
export const isGecko = (): boolean => {
    return !isWebKit() && check(/gecko/);
};
/**
 * window mac linux检查
 */
export const isWindows = (): boolean => {
    return check(/windows|win32/);
};

export const isMac = (): boolean => {
    return check(/macintosh|mac os x/);
};

export const isLinux = (): boolean => {
    return check(/linux/);
};

export const isAndroid = (): boolean => {
    return check(/android/);
};

export const isIOS = (): boolean => {
    return check(/ios|iphone|ipad|ipod/);
};
/**
 * 是否是移动端设备
 */
export const isMobile = (): boolean => {
    return check(/Android|webOS|iPhone|iPod|BlackBerry/i);
};
/**
 * 是否是严格模式渲染
 */
export const isStrict = () => {
    // @ts-ignore
    return (typeof window === "undefined" ? global : window)?.compatMode === 'CSS1Compat';
};

/**
 * 获取版本号
 */
export const chromeVersion = (): number => {
    return version(true, /\bchrome\/(\d+\.\d+)/);
};

export const firefoxVersion = (): number => {
    return version(true, /\bfirefox\/(\d+\.\d+)/);
};

export const ieVersion = (): number => {
    return version(isIE(), /msie (\d+\.\d+)/);
};

export const operaVersion = (): number => {
    return version(isOpera(), /version\/(\d+\.\d+)/);
};

export const safariVersion = (): number => {
    return version(isSafari(), /version\/(\d+\.\d+)/);
};

export const webKitVersion = (): number => {
    return version(isWebKit(), /webkit\/(\d+\.\d+)/);
};

/**
 * 是否是安全的https链接
 */
export const isSecure = () => {
    return /^https/i.test((typeof window === "undefined" ? global : window)?.location?.protocol);
};

/**
 * ie版本
 */
export const docMode = (): number => {
    const dom: any = document;
    return dom['documentMode'];
};
export const isIE6 = (): boolean => {
    return isIE() && check(/msie 6/);
};

export const isIE7 = (): boolean => {
    return isIE() &&
        ((check(/msie 7/) &&
            docMode() !== 8 &&
            docMode() !== 9 &&
            docMode() !== 10) ||
            docMode() === 7);
};

export const isIE8 = (): boolean => {
    return isIE() &&
        ((check(/msie 8/) &&
            docMode() !== 7 &&
            docMode() !== 9 &&
            docMode() !== 10) ||
            docMode() === 8);
};

export const isIE9 = (): boolean => {
    return isIE() &&
        ((check(/msie 9/) &&
            docMode() !== 7 &&
            docMode() !== 8 &&
            docMode() !== 10) ||
            docMode() === 9);
};

export const isIE10 = (): boolean => {
    return isIE() &&
        ((check(/msie 10/) &&
            docMode() !== 7 &&
            docMode() !== 8 &&
            docMode() !== 9) ||
            docMode() === 10);
};

export const isIE11 = (): boolean => {
    return isIE() && check(/trident/);
};

/**
 *Safari版本
 */
export const isSafari2 = (): boolean => {
    return isSafari() && check(/applewebkit\/4/);
}; // unique to Safari 2
export const isSafari3 = (): boolean => {
    return isSafari() && check(/version\/3/);
};

export const isSafari4 = (): boolean => {
    return isSafari() && check(/version\/4/);
};

export const isSafari5_0 = (): boolean => {
    return isSafari() && check(/version\/5\.0/);
};

export const isSafari5 = (): boolean => {
    return isSafari() && check(/version\/5/);
};

/**
 *Gecko版本
 */
export const isGecko3 = (): boolean => {
    return isGecko() && check(/rv:1\.9/);
};

export const isGecko4 = (): boolean => {
    return isGecko() && check(/rv:2\.0/);
};

export const isGecko5 = (): boolean => {
    return isGecko() && check(/rv:5\./);
};

export const isGecko10 = (): boolean => {
    return isGecko() && check(/rv:10\./);
};
/**
 *FF版本
 */
export const isFF3_0 = (): boolean => {
    return isGecko3() && check(/rv:1\.9\.0/);
};

export const isFF3_5 = (): boolean => {
    return isGecko3() && check(/rv:1\.9\.1/);
};

export const isFF3_6 = (): boolean => {
    return isGecko3() && check(/rv:1\.9\.2/);
};


export const isOpera10_5 = (): boolean => {
    return isOpera() && check(/version\/10\.5/);
};
