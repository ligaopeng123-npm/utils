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
