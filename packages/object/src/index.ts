/**
 * clone函数
 */
export {clone, cloneAllItems, cloneAllArray, cloneAllObject} from './clone';
/**
 * 鼠标位置
 */
export {mousePosition} from './mouse';
/**
 * 获取样式
 */
export {getStyle} from './dom';
/**
 * 获取符合预期的父节点
 */
export {parentByExpected} from './dom';
/**
 * 文本复制
 */
export {copyText} from './dom';
/**
 * 获取数组 对象长度
 */
export {default as length} from "./length";
/**
 * 对象属性合并 数组默认覆盖  对象属性合并（数组是concat合并） 对象属性合并（数组不做处理）
 */
export {default as assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray} from "./assignDeep";
/**
 * 对象的过滤循环
 */
export {filterObject} from './objectLoop';
/**
 * 对象的map循环
 */
export {mapObject} from './objectLoop';
/**
 *
 */
export {forEachObject} from './objectLoop';
