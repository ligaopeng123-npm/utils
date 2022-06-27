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

/**
 * 缓存管理
 */
type SetFn = (key: string, value: any) => Cache;
type Clear = (key?: string) => void;
const cacheManagement = (): [Cache, SetFn, Clear] => {
    const cache: Cache = {};
    const set: SetFn = (key, value) => {
        return Object.defineProperty(cache, key, {
            enumerable: true, // 可枚举
            writable: true, // 可修改
            configurable: false, // 不可删除
            value: value
        });
    };
    /**
     * 数据清理
     * @param key
     */
    const clear = (key: string) => {
        if (key) {
            cache[key] = null;
        } else {
            for (const cacheKey in cache) {
                cache[cacheKey] = null;
            }
        }
    }
    return [cache, set, clear]
};
/**
 * 返回值类型定义
 */
export type MemoizedReturn = [any, Cache, string, Clear] | any;

export interface MemoizedFn {
    (...arg: any): MemoizedReturn;
}

/**
 * 同步缓存函数
 * @param fn
 */
export const memoized = (fn: MemoizedFn) => {
    // 缓存求值 如果有则取缓存 如果没有则赋值
    const [cache, set, clear] = cacheManagement();
    const memoize: MemoizedFn = (...arg) => {
        const key = arg[0];
        return [cache[key] || set(key, fn(...arg))[key], cache, key, clear];
    };
    return memoize;
};


/**
 * 异步缓存求值
 * @param fn
 */
export interface AsyncMemoizedFn {
    (...arg: any): Promise<MemoizedReturn> | Promise<any>
}

export const asyncMemoized = (fn: AsyncMemoizedFn) => {
    // 缓存求值 如果有则取缓存 如果没有则赋值
    const [cache, set, clear] = cacheManagement();
    const memoize: AsyncMemoizedFn = async (...arg) => {
        const key = arg[0];
        return [cache[key] || set(key, await fn(...arg))[key], cache, key, clear];
    };
    return memoize;
};
