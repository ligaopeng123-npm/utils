/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index  图片处理
 *
 * @date: 2021/8/6 9:16
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isElement, isUndefined } from "@gaopeng123/utils.types";
import { domainNameFromUri, download, removeUrlParams } from "./download";

/**
 * 根据img file获取img的html路径
 * @param file
 */
export let imageFromFile = (file: File): string => {
    // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
    // @ts-ignore
    if (!isUndefined(window.createObjectURL)) {   // basic
        // @ts-ignore
        imageFromFile = (file, base64) => window.createObjectURL(file);
    } else if (!isUndefined(window.URL)) {        // mozilla(firefox)
        // @ts-ignore
        imageFromFile = (file, base64) => window.URL.createObjectURL(file);
    } else if (!isUndefined(window.webkitURL)) {  // webkit or chrome
        // @ts-ignore
        imageFromFile = (file, base64) => window.webkitURL.createObjectURL(file);
    }
    return imageFromFile(file);
};
/**
 * 预览base64图片 解决chorme的安全限制
 * @param base64URL
 */
export const openToPreviewBase64 = (base64URL: string) => {
    let win = window.open();
    // @ts-ignore
    win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}

type ImageType =
    'image/png'
    | 'image/jpeg'
    | 'image/jpg'
    | 'image/webp';
type CanvasToDataURL = {
    canvas: HTMLCanvasElement,
    type: ImageType,
    encoderOptions?: number,
}

/**
 * 根据URL获取图片格式
 * @param url
 */
export const imageTypeFromUrl = (url: string): string => {
    return removeUrlParams(url)?.split('.').pop();
}

/**
 * 基于canvas进行图片转换成base64
 * @param canvas
 * @param type
 * @param encoderOptions
 */
export const toBase64 = ({
    canvas,
    type,
    encoderOptions
}: CanvasToDataURL): string => {
    if (canvas?.toDataURL) {
        const base64Str = canvas.toDataURL(type || 'image/png',
            isUndefined(encoderOptions) ? 1 : encoderOptions);
        canvas = null;
        return base64Str;
    }
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
export const imageToBase64 = ({
    image,
    width,
    height,
    type,
    opacity
}: ImageToBase64Props) => {
    const canvas = document.createElement('canvas');
    const currentWidth = width || image.width;
    const currentHeight = height || image.height;
    canvas.width = currentWidth;
    canvas.height = currentHeight;
    canvas?.getContext('2d')?.drawImage(image, 0, 0, currentWidth, currentHeight);
    return toBase64({
        canvas,
        type: type || 'image/png',
        encoderOptions: opacity
    })
};

/**
 * imageUrlToBase64转base64
 * @param url
 * @param isProxy 是否需要前端处理代理 默认为true 如果服务端配置好允许跨域 则可设置为false
 */
type ImageUrlToBase64 = (url: string, isProxy: boolean) => Promise<string>;
export const imageUrlToBase64: ImageUrlToBase64 = (url: string, isProxy = true) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.setAttribute("crossOrigin", 'Anonymous');
        const currentSrc = isProxy ? url?.replace(domainNameFromUri(url), '') : url;
        image.src = currentSrc;
        image.onload = () => {
            const type = `image/${imageTypeFromUrl(url)}` as ImageType;
            const base64 = imageToBase64({
                image,
                type: type
            });
            resolve(base64);
        }
        image.onerror = () => {
            reject(new Error(`image by ${url} error`));
        };
    });
}

/**
 * 图片转blob
 * @param url
 * @param isProxy 是否需要前端处理代理 默认为true 如果服务端配置好允许跨域 则可设置为false
 */
type ImageUrlToBlob = (url: string, isProxy: boolean) => Promise<Blob>;
export const imageUrlToBlob: ImageUrlToBlob = async (url: string, isProxy = true) => {
    const currentUrl = new Request(isProxy ? url?.replace(domainNameFromUri(url), '') : url);
    const res = await fetch(currentUrl);
    return await res.blob();
}

/**
 * 图片下载
 */
type DownloadPictureOptions = {
    fileName?: string,
    type?: ImageType,
    encoderOptions?: number,
    height?: number,
    width?: number,
}
export const downloadScreenshotPicture = (dom: HTMLCanvasElement | HTMLVideoElement | string,
    options: DownloadPictureOptions) => {
    let videoDom: any;
    if (isElement(dom)) {
        videoDom = dom;
    } else {
        videoDom = document.getElementById(dom as string);
    }
    console.log('videoDom', videoDom)
    if (videoDom) {
        let canvas;
        console.log('videoDom.tagName', videoDom.tagName)
        if (videoDom.tagName === 'VIDEO') {
            canvas = document.createElement('canvas');
            const width = options.width || videoDom.offsetWidth;
            const height = options.height || videoDom.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            canvas.style.height = `${width}px`;
            canvas.style.height = `${height}px`;
            const context = canvas.getContext('2d');
            context.drawImage(videoDom, 0, 0, width, height);
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
