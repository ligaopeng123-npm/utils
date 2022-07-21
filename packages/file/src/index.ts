export {downloadStream} from './download';
export type {DownloadStreamParams} from './download';

export {download} from './download';
export type {DownloadParams} from './download';
// 将图片转为base64位
export {imageToBase64} from './download';


export {dowmloadScreenshotPicture} from './download';

export {injectScript, injectScripts, injectCSS} from "./inject";


export {urlJoinParmas} from './download';
export {removeUrlParams} from './download';
export {routeFromUri, domainNameFromUri} from './download';
// 删除参数中的空数据
export {removeEmptyParams} from './download';
// 处理参数 使参数更合适下发给后端
export {makeParamsProper} from './download';
// 从query中获取参数
export {queryParamsFromUrl} from './download';
// 从file中获取imgage
export {imageFromFile} from './image';
// 预览base64图片
export {openToPreviewBase64} from './image';

// 文件类型转换
export {file2Blob} from './convert';
export {file2Url} from './convert';
export {base642Blob} from './convert';
export {blob2File} from './convert';
export {base642File} from './convert';
export {blob2Base64} from './convert';

// css 和 react style 相互转换

export {obj2css, css2obj, makeCssText} from "./css-obj";
