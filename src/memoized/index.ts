/**********************************************************************
 *
 * @模块名称: memoized
 *
 * @模块用途: 缓存函数
 *
 * @date: 2021/7/23 8:22
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 缓存函数
 * @param fn
 */
interface Cache {
	[propName: string]: any
}

interface FN {
	(...arg: any): Array<any>
}

export const memoized = (fn: FN) => {
	// 缓存求值 如果有则取缓存 如果没有则赋值
	const cache: Cache = {};
	const memoiz: FN = (...arg) => {
		return [cache[arg[0]] || (cache[arg[0]] = fn(...arg)), cache];
	};
	return memoiz;
};


/**
 * 异步缓存求值
 * @param fn
 */
interface AsyncFN {
	(arg: string): Promise<Array<any>>
}

export const asyncMemoized = (fn: AsyncFN) => {
	// 缓存求值 如果有则取缓存 如果没有则赋值
	const cache: Cache = {};
	const memoiz: AsyncFN = async (...arg) => {
		cache[arg[0]] || (cache[arg[0]] = await fn(...arg));
		return [cache[arg[0]], cache];
	};
	return memoiz;
};
