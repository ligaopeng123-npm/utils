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
/**
 * 大数据相加
 * @param str1
 * @param str2
 */
export const sumMaxNumber = (str1: string, str2: string): string => {
	const str1Arr = str1.split('').reverse();
	const str2Arr = str2.split('').reverse();
	const len = Math.max(str1Arr.length, str2Arr.length);
	let arr: any[] = [];
	for (let i = 0; i < len; i++) {
		if (str2Arr[i] && str1Arr[i]) {
			arr[i] = Number(str1Arr[i]) + Number(str2Arr[i]) + (arr[i] || 0);
			if (arr[i] > 9) {
				arr[i] = arr[i] - 10;
				arr[i + 1] = 1;
			}
		} else {
			arr[i] = Number((+str1Arr[i] || 0) + (+str2Arr[i] || 0));
		}
	}
	return arr.reverse().join('');
}
