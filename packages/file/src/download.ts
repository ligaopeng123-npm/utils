/**********************************************************************
 *
 * @模块名称: download
 *
 * @模块用途: 下载函数
 *
 * @date: 2021/7/30 8:47
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isElement, isEmpty, isObject, isString, isUndefined} from "@gaopeng123/utils.types";
import {mapObject, filterObject} from "@gaopeng123/utils.object";

/**
 * @params  需要拼接的参数
 *  拼接url地址参数
 *  urlJoinParmas({name:'zhangsan'})
 */
export interface urlJoinParmasPatams {
    [propName: string]: any
}

/**
 * 将参数拼接到url中
 * @param parmas
 */
export const urlJoinParmas = (parmas?: urlJoinParmasPatams): string => {
    if (isObject(parmas)) {
        let str = ``;
        let count = 1;
        for (let i in parmas) {
            const concatSymbol = count > 1 ? '&' : '';
            str += `${concatSymbol}${i}=${parmas[i]}`;
            count++;
        }
        // 防止空对象 传递冗余的'?'
        return str ? `?${str}` : str;
    } else {
        return '';
    }
};

/**
 * 去掉url的参数
 * @param url
 * @returns {any}
 */
export function removeUrlParams(url: string): string {
    if (url) {
        url = url.replace(/#/, '');
        if (url.indexOf('?') !== -1) {
            return url.substring(0, url.indexOf('?'));
        }
    }
    return url;
}

/**
 * 下载函数 文件需在服务端存在
 * @param url
 * @param {string} name
 */
export declare type DownloadParams = {
    url?: string, // uri地址
    fileName?: string, // 文件名
    blob?: string | Blob, // blob地址
    parmas?: any, // 请求参数
}

export const download = ({url, fileName, blob, parmas}: DownloadParams): void | Error => {
    if (!url && !blob) return new Error('url or blob is undefined');
    const href = blob ? URL.createObjectURL(blob as Blob) : url + urlJoinParmas(parmas);
    const elt = document.createElement('a');
    elt.setAttribute('href', href);
    elt.setAttribute('download', fileName || 'default');
    elt.style.display = 'none';
    document.body.appendChild(elt);
    elt.click();
    document.body.removeChild(elt);
    if (blob) URL.revokeObjectURL(href);
};

/**
 * 文档流下载函数 建议使用此方式进行下载 服务端不需要保存冗余文件
 * downloadStream({url:'', options: {body: ''},fileName: ''})
 */
export declare type DownloadStreamParams = {
    url: string; // uri地址
    options?: any; // fetch参数
    fileName?: string; // 文件名
}
export const downloadStream = ({url, options, fileName}: DownloadStreamParams): void => {
    fetch(url, Object.assign({responseType: 'blob'}, options)).then((res: any) => {
        const blob = new Blob([res],
            {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});
        download({blob: blob, fileName: fileName});
    });
};

/**
 * 解析url，获取参数
 * @param url
 */
export const queryParamsFromUrl = (url: string): Object => {
    const _url = url === null ? window.location.href : url;
    const search = _url.substring(_url.lastIndexOf('?') + 1);
    const obj: any = {};
    const reg = /([^?&=]+)=([^?&=]*)/g;
    // [^?&=]+表示：除了？、&、=之外的一到多个字符
    // [^?&=]*表示：除了？、&、=之外的0到多个字符（任意多个）
    search.replace(reg, function (rs: any, $1, $2) {
        const name = decodeURIComponent($1);
        const val = String(decodeURIComponent($2));
        obj[name] = val;
        return rs;
    });
    return obj;
};

type ImageType = 'image/png' | 'image/jpeg' | 'image/webp';
type CanvasToDataURL = {
    canvas: HTMLCanvasElement,
    type: ImageType,
    encoderOptions?: number,
}
/**
 * 基于canvas进行图片转换成base64
 * @param canvas
 * @param type
 * @param encoderOptions
 */
export const toBase64 = ({canvas, type, encoderOptions}: CanvasToDataURL): string => {
    if (canvas?.toDataURL) return canvas.toDataURL(type || 'image/png',
        isUndefined(encoderOptions) ? 1 : encoderOptions);
    return '';
};
/**
 * 将image标签转为base64编码
 */
export type ImageToBase64Props = {
    image: HTMLImageElement,
    width?: number; // 宽度 默认图片宽度
    height?: number; // 高度 默认图片高度
    type?: ImageType; // 图片类型 默认'image/png'
    opacity?: number; // 透明度 默认1
}
export const imageToBase64 = ({image, width, height, type, opacity}: ImageToBase64Props) => {
    const canvas = document.createElement('canvas');
    canvas.width = width ? width : image.width;
    canvas.height = height ? height : image.height;
    return toBase64({
        canvas,
        type: type || 'image/png',
        encoderOptions: opacity
    })
};

/**
 * 图片下载
 */
type DowmloadPictureOptions = {
    fileName?: string,
    type?: ImageType,
    encoderOptions?: number
}
export const dowmloadScreenshotPicture = (dom: HTMLCanvasElement | HTMLVideoElement | string,
                                          options: DowmloadPictureOptions) => {
    let videoDom: any;
    if (isElement(dom)) {
        videoDom = dom;
    } else {
        // @ts-ignore
        videoDom = document.getElementById(video);
    }

    if (videoDom) {
        let canvas;
        if (videoDom.tagName === 'VIDEO') {
            canvas = document.createElement('canvas');
            canvas.width = videoDom.offsetWidth;
            canvas.height = videoDom.offsetHeight;
            canvas.style.height = `${videoDom.offsetWidth}px`;
            canvas.style.height = `${videoDom.offsetHeight}px`;
        } else {
            canvas = videoDom;
        }
        download({
            url: toBase64({
                canvas: canvas,
                type: options?.type || 'image/png',
                encoderOptions: options?.encoderOptions
            }),
            fileName: options?.fileName
        })
    }
};

/**
 * 过滤参数中的冗余字段
 * undefined  null '' [] 会被删除
 * @param params
 */
export const removeEmptyParams = (params: any) => {
    const _params = Object.assign({}, params);
    for (let key in _params) {
        if (isEmpty(_params[key])) {
            delete _params[key];
        }
    }
    return _params;
};
/**
 * 使参数合适 正确
 */
export const makeParamsProper = (params: any) => {
    if (isObject(params)) {
        return mapObject(filterObject(params, (item) => !isEmpty(item)), (item: any) => {
            return isString(item) ? item?.trimStart()?.trimEnd() : item
        });
    }
    return params;
};

/**
 * 从uri中过滤出路由地址
 * @param uri
 */
export const routeFromUri = (uri: string): string => {
    return `/${uri?.split('/')?.splice(3)?.join('/')}`;
};

/**
 * 动态导入script
 * @param src
 */
export const injectScript = (src: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.type = 'text/JavaScript';
        s.async = true;
        s.onload = function () {
            resolve(true);
        };
        s.onerror = function () {
            reject(false);
        };
        s.src = src;
        const t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    });
}
/**
 * 批量加载js文件
 * @param src
 */
export const injectScripts = (src: any[string]): Promise<any> => {
    return Promise.all(src.map((itemStr: string) => {
        return injectScript(itemStr);
    }));
}
