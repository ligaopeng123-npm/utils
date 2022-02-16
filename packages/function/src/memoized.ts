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
interface Cache {
    [propName: string]: any
}

export interface MemoizedFn {
    (...arg: any): Array<any> | any
}


/**
 * 缓存管理
 */
type SetFn = (key: string, value: any) => Cache;
const cacheManagement = (): [Cache, SetFn] => {
    const cache: Cache = {};
    const set: SetFn = (key, value) => {
        return Object.defineProperty(cache, key, {
            enumerable: true, // 可枚举
            writable: true, // 可修改
            configurable: false, // 不可删除
            value: value
        });
    };
    return [cache, set]
};
/**
 * 同步缓存函数
 * @param fn
 */
export const memoized = (fn: MemoizedFn) => {
    // 缓存求值 如果有则取缓存 如果没有则赋值
    const [cache, set] = cacheManagement();
    const memoize: MemoizedFn = (...arg) => {
        const key = arg[0];
        return [cache[key] || set(key, fn(...arg))[key], cache];
    };
    return memoize;
};


/**
 * 异步缓存求值
 * @param fn
 */
export interface AsyncMemoizedFn {
    (...arg: any): Promise<Array<any>> | Promise<any>
}

export const asyncMemoized = (fn: AsyncMemoizedFn) => {
    // 缓存求值 如果有则取缓存 如果没有则赋值
    const [cache, set] = cacheManagement();
    const memoiz: AsyncMemoizedFn = async (...arg) => {
        const key = arg[0];
        return [cache[key] || set(key, await fn(...arg))[key], cache];
    };
    return memoiz;
};
