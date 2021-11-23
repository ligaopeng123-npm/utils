/**********************************************************************
 *
 * @模块名称: compose
 *
 * @模块用途: compose
 *
 * @date: 2021/8/6 16:28
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * compose 函数
 */
type FnType = (...args: any) => any;
export const compose = (...fns: any) => {
	if (fns.length === 0) return (arg: any) => arg;
	if (fns.length === 1) return fns[0];
	/**
	 * 巧妙利用reduce的一直拼接特性 函数从右到左执行 右边的函数结果做完参数传递下去
	 * 返回一个无限包裹的函数(x)=> a(b(c(c(d(x)))))
	 */
	return fns.reduce((a: FnType, b: FnType) => (...args: any) => a(b(...args)))
};
/**
 * pie 函数
 * 和compose 执行顺序相反
 */
export const pipe = (...fns: any) => {
	if (fns.length === 0) return (arg: any) => arg;
	if (fns.length === 1) return fns[0];
	/**
	 * 巧妙利用reduce的一直拼接特性 从左到右执行
	 * 返回一个无限包裹的函数(x)=> d(c(b(a(x))))
	 */
	return fns.reduce((a: FnType, b: FnType) => (...args: any) => b(a(...args)))
};

type fn = (...arg: any) => Promise<any>;
export type Promises = Array<Promise<fn>>;
export const composePromises = (promises: Promises, initialValue?: any): Promise<void> => {
	return promises.reduce(
		// @ts-ignore
		(prev, current) => prev.then((res) => current(res)),
		Promise.resolve(initialValue)
	)
};
