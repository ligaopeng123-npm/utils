/**********************************************************************
 *
 * @模块名称: curry
 *
 * @模块用途: curry 柯理化函数
 *
 * @date: 2021/8/17 9:00
 *
 * @版权所有: pgli
 *
 **********************************************************************/
type Curry = (...args: Array<any>) => any;

const curry = (fn: Curry) => {
	if (typeof fn !== 'function') {
		throw new Error(`${fn} is not a function`);
	}
	/**
	 * 拼接参数
	 * @private
	 */
	const g = (...args1: Array<any>) => {
		// 当g函数调用传递参数比fn本身参数少 则直接执行fn 并将结果返回
		if (args1.length >= fn.length) return fn(...args1);
		// 当g函数调用传递参数比fn本身参数多 则需要拼接缓存参数
		return (...args2: Array<any>) => {
			return g(...args1, ...args2);
		}
	};
	return g;
};

export default curry;
