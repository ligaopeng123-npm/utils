/**********************************************************************
 *
 * @模块名称: math
 *
 * @模块用途: math
 *
 * @date: 2021/9/1 14:24
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 获取最大值
 * @param args
 */
export const max = (...args: number[]): number => {
	return Math.max.apply(null, args);
};
/**
 * 获取最小值
 * @param args
 */
export const min = (...args: number[]): number => {
	return Math.min.apply(null, args);
};
