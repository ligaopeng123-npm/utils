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
import { isEmpty, isObject, isString } from "@gaopeng123/utils.types";
import { mapObject, filterObject } from "@gaopeng123/utils.object";

/**
 * @params  需要拼接的参数
 *  拼接url地址参数
 *  urlJoinParams({name:'zhangsan'})
 */
export interface urlJoinParamsProps {
    [propName: string]: any
}

/**
 * 将参数拼接到url中
 * @param params
 */
export const urlJoinParmas = (params?: urlJoinParamsProps): string => {
    if (isObject(params)) {
        let str = ``;
        let count = 1;
        for (let i in params) {
            const concatSymbol = count > 1 ? '&' : '';
            str += `${concatSymbol}${i}=${params[i]}`;
            count++;
        }
        // 防止空对象 传递冗余的'?'
        return str ? `?${str}` : str;
    } else {
        return '';
    }
};

export const urlJoinParams = urlJoinParmas;

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
    url?: string; // uri地址
    fileName?: string; // 文件名
    blob?: string | Blob; // blob地址
    parmas?: any; // 请求参数
    params?: any; // 请求参数
    origin?: boolean; // 是否处理过跨域
}

/**
 * 检查是否同域
 * @param url
 */
export const checkOrigin = (url: string) => {
    return url?.startsWith(window.location.origin) || !url?.startsWith('http');
}

/**
 * 获取文件名
 * @param url
 */
export const getFileNameFromUrl = (url: string) => {
    const urlArr = url.split('/');
    const currentUrl = urlArr[urlArr.length - 1];
    return currentUrl.includes('.') ? currentUrl : null;
}

type DownloadClickAProps = {
    href?: string;
    fileName?: string;
    blob?: Blob | string;
}
export const downloadClickA = ({href, fileName, blob}: DownloadClickAProps) => {
    const elt = document.createElement('a');
    elt.setAttribute('href', href);
    elt.setAttribute('download', fileName || getFileNameFromUrl(href) || 'default');
    elt.style.display = 'none';
    document.body.appendChild(elt);
    elt.click();
    document.body.removeChild(elt);
    if (blob) URL.revokeObjectURL(href);
}

/**
 * 文件下载
 * @param url
 * @param fileName
 * @param blob
 * @param parmas
 */
export const download = ({url, fileName, blob, parmas, params, origin}: DownloadParams): void | Error => {
    if (!url && !blob) return new Error('url or blob is undefined');
    if (blob) {
        downloadClickA({href: URL.createObjectURL(blob as Blob), blob, fileName});
    } else {
        if (checkOrigin(url) || !origin) {
            downloadClickA({href: url + urlJoinParams(params || parmas), blob, fileName});
        } else {
            const xhr = new window.XMLHttpRequest();
            xhr.open('GET', url + urlJoinParams(params || parmas), true);
            xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
            xhr.responseType = 'blob';
            xhr.onload = () => {
                downloadClickA({href: URL.createObjectURL(xhr.response), blob: xhr.response, fileName});
            };
            xhr.send();
        }
    }
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
 * 从URI中获取域名或者ip地址
 * @param uri
 */
export const domainNameFromUri = (uri: string): string => {
    const urlArr = uri.split('/');
    return urlArr[0].includes('http') ? `${urlArr[0]}//${urlArr[2]}` : urlArr[0];
};

/**
 * 从uri中过滤出路由地址
 * @param uri
 */
export const routeFromUri = (uri: string): string => {
    const uriArr = uri?.split('?');
    return uriArr[0].replace(domainNameFromUri(uriArr[0]), '')?.replace('/#', '');
};
