/**
 * clone函数
 */
export { clone, cloneAllItems, cloneAllArray, cloneAllObject } from './clone';
/**
 * 鼠标位置
 */
export { mousePosition } from './mouse';
/**
 * 1、获取样式 2、获取符合预期的父节点 3、文本复制 4、是否在可视范围内 5、可视范围加载监听
 */
export { getStyle, parentByExpected, copyText, isVisibleInViewport, observeViewport } from './dom';
/**
 * 悬浮球函数
 */
export { levitatingBall } from "./levitatingBall";
export type { levitatingBallConfig } from "./levitatingBall";
/**
 * 对象属性合并 数组默认覆盖  对象属性合并（数组是concat合并） 对象属性合并（数组不做处理）
 */
export { assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray, assignIf, assignIfByOrder } from "./assignDeep";
/**
 * 对象的过滤循环  对象的map循环  对象的forEach循环
 */
export { filterObject, mapObject, forEachObject } from './objectLoop';
/**
 * 获取数组、对象长度  length();
 */
export { length } from "./length";

export { clearEmpty } from './clearEmpty'



