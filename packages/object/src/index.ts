import {clone, cloneAllItems, cloneAllArray, cloneAllObject} from './clone';
import {mousePosition} from './mouse';
import {getStyle, parentByExpected, copyText} from './dom';
import {default as assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray} from "./assignDeep";
import {filterObject, mapObject, forEachObject} from './objectLoop';
import {default as length} from "./length";
/**
 * clone函数
 */
export {clone, cloneAllItems, cloneAllArray, cloneAllObject};
/**
 * 鼠标位置
 */
export {mousePosition}
/**
 * 1、获取样式 2、获取符合预期的父节点 2、文本复制
 */
export {getStyle, parentByExpected, copyText}

/**
 * 获取数组、对象长度  length();
 */
export {length}
/**
 * 对象属性合并 数组默认覆盖  对象属性合并（数组是concat合并） 对象属性合并（数组不做处理）
 */
export {assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray};
/**
 * 对象的过滤循环  对象的map循环  对象的forEach循环
 */
export {filterObject, mapObject, forEachObject};
