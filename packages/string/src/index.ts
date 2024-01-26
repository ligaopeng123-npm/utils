/**********************************************************************
 *
 * @模块名称: uuid
 *
 * @模块用途: 随机数获取
 *
 * @date: 2021/7/29 21:15
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export type { FormatStrFn, EmptyValueOpts } from './format';
export { default as formatStr, toCase, makeEmptyValue } from './format';

export { default as ellipsps, default as ellipsis } from './ellipsps';
export { strWidth } from './ellipsps';


export { default as uuid } from './uuid';
export type { UuidFn } from './uuid';

/**
 * 提取被字符包裹中的内容
 */
export { default as extractEnclosedContent, extractEnclosedContentByStrs } from './regexp';
export { extractParenthesesContent } from './regexp';
export { extractMiddleParenthesesContent } from './regexp';
export { extractBigParenthesesContent } from './regexp';
// 常用正则校验
export {
    PHONE_NUMBER_STR,
    PHONE_NUMBER,
    OPERATOR_NUMBER_STR,
    OPERATOR_NUMBER,
    IOT_PHONE_NUMBER_STR,
    IOT_PHONE_NUMBER,
    maskMobile,
    PASSWORD_RegExp_STR,
    PASSWORD_RegExp,
    PASSWORD_STR,
    PASSWORD,
    PASSWORD_STR_MAX_16,
    PASSWORD_MAX_16,
    IPV4_STR,
    IPV4,
    RTF2str,
    RTF_TAG
} from './regexp';
/**
 * 颜色处理
 */
export { addOpacity } from './color';
export { hex2Rgb, rgb2hex, rgba2hex, rgba2rgb } from './color';
export { randomRgb, randomHex, randomColor } from './color';
/**
 * 路径拼接
 */
export { pathJoin, replaceDomain } from './path';

/**
 * 驼峰转换
 */
export { hyphen2hump, hump2hyphen } from './hump';

/**
 * css处理
 */
export { addBoxSizeUnit } from './css';
