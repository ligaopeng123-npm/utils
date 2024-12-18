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
import { isObject } from "@gaopeng123/utils.types";
import { clearEmpty } from "./clearEmpty";

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
export const urlJoinParams = (params?: urlJoinParamsProps): string => {
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
export const downloadClickA = ({ href, fileName, blob }: DownloadClickAProps) => {
    const elt = document.createElement('a');
    elt.setAttribute('href', href);
    // 打开一个新的页签 防止覆盖当前页
    elt.setAttribute('target', '_blank');
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
 * @param params
 */
export const download = (config: DownloadParams): void | Error => {
    const { url, fileName, blob, params, origin } = config;
    if (!url && !blob) return new Error('url or blob is undefined');
    // @ts-ignore
    const _params = params || config.parmas;
    if (blob) {
        downloadClickA({ href: URL.createObjectURL(blob as Blob), blob, fileName });
    } else {
        if (checkOrigin(url) || !origin) {
            downloadClickA({ href: url + urlJoinParams(_params), blob, fileName });
        } else {
            const xhr = new window.XMLHttpRequest();
            xhr.open('GET', url + urlJoinParams(_params), true);
            xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
            xhr.responseType = 'blob';
            xhr.onload = () => {
                downloadClickA({ href: URL.createObjectURL(xhr.response), blob: xhr.response, fileName });
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
export const downloadStream = ({ url, options, fileName }: DownloadStreamParams): void => {
    fetch(url, Object.assign({ responseType: 'blob' }, options)).then((res: any) => {
        const blob = new Blob([res],
            { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
        download({ blob: blob, fileName: fileName });
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
    return clearEmpty(Object.assign({}, params), { extensions: [{}, null, []] });
};
/**
 * 使参数合适 正确
 */
export const makeParamsProper = (params: any) => {
    return removeEmptyParams(params);
};
/**
 * 通过Uri分解参数
 * @param uri
 */
export const getURLFormUri = (uri: string): URL => {
    if (uri.startsWith('http')) return new URL(uri);
    const urlArr = uri?.split('/');
    const protocol = urlArr[0];
    const makeUrl = (current: URL, protocol: string, replaceStr = 'http:') => {
        return {
            hash: current.hash,
            href: current.href?.replace(replaceStr, protocol),
            origin: current?.origin?.replace(replaceStr, protocol),
            protocol: protocol,
            username: current.username,
            host: current.host,
            hostname: current.hostname,
            port: current.port,
            pathname: current.pathname,
            search: current.search,
            searchParams: queryParamsFromUrl(current.search)
        } as URL;
    }
    // 私有协议
    if (protocol?.endsWith(':')) {
        const current = new URL(uri.replace(protocol, 'http:'))
        return makeUrl(current, protocol);
    } else {
        const current = new URL('http://' + uri)
        return makeUrl(current, '', 'http://');
    }
}

/**
 * 从URI中获取域名或者ip地址
 * @param uri
 */
export const domainNameFromUri = (uri: string): string => {
    return getURLFormUri(uri).origin;
};

/**
 * 从uri中过滤出路由地址
 * @param uri
 */
export const routeFromUri = (uri: string): string => {
    const {hash, pathname} = getURLFormUri(uri);
    if(hash) {
        return hash.replace('#', '').split('?')[0]
    }
    return pathname;
};