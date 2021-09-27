export {clone as clone} from './clone';
export {cloneAllItems as cloneAllItems} from './clone';
export {cloneAllArray as cloneAllArray} from './clone';
export {cloneAllObject as cloneAllObject} from './clone';

/**
 * 鼠标位置
 */
export {mousePosition as mousePosition} from './mouse';
/**
 * 获取样式
 */
export {getStyle as getStyle} from './dom';
/**
 * 获取符合预期的父节点
 */
export {parentByExpected as parentByExpected} from './dom';
/**
 * 文本复制
 */
export {copyText as copyText} from './dom';
/**
 * 获取数组 对象长度
 */
export {default as length} from './length';
/**
 * 对象属性合并 数组默认覆盖
 */
export {default as assignDeep} from './assignDeep';
/**
 * 对象属性合并（数组是concat合并）
 */
export {assignDeepMergeArray as assignDeepMergeArray} from './assignDeep';
/**
 * 对象属性合并（数组不做处理）
 */
export {assignDeepNotIncludedArray as assignDeepNotIncludedArray} from './assignDeep';