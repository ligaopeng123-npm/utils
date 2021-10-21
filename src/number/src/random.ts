/**********************************************************************
 *
 * @模块名称: random
 *
 * @模块用途: random  随机数
 *
 * @date: 2021/8/13 14:38
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 随机整数
 * @param min
 * @param max
 */
const randomInt = (min?: number, max?: number): number => {
	min = min || 0;
	max = max || 10;
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default randomInt;
