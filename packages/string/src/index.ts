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

export {formatStrFn as formatStrFn} from './format';
export {default as formatStr} from './format';

export {default as ellipsps} from './ellipsps';
export {strWidth as strWidth} from './ellipsps';


export {default as uuid} from './uuid';
export {uuidFn as uuidFn} from './uuid';

/**
 * 提取被字符包裹中的内容
 */
export {default as extractEnclosedContent} from './regexp';
export {extractParenthesesContent as extractParenthesesContent} from './regexp';
export {extractMiddleParenthesesContent as extractMiddleParenthesesContent} from './regexp';
export {extractBigParenthesesContent as extractBigParenthesesContent} from './regexp';
// 常用正则校验
export {IPV4 as IPV4} from './regexp';
export {PHONE_NUMBER as PHONE_NUMBER} from './regexp';
/**
 * 颜色处理
 */
export {addOpacity as addOpacity} from './color';
export {hex2Rgb as hex2Rgb} from './color';
export {rgb2hex as rgb2hex} from './color';
export {rgba2hex as rgba2hex} from './color';
export {rgba2rgb as rgba2rgb} from './color';
/**
 * 路径拼接
 */
export {pathJoin as pathJoin} from './path';

/**
 * 驼峰转换
 */
export {hump2hyphen as hump2hyphen} from './hump';
export {hyphen2hump as hyphen2hump} from './hump';
