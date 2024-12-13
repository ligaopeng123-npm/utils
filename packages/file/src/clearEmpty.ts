/**
 * 清理空数据
 * @param params
 * @param config
 */
export const clearEmpty = <T extends Record<string, unknown> | any[]>(params: T, config?: { patterns?: any[], extensions?: any[] }): T extends any[] ? any[] : Partial<T> => {
    const { patterns, extensions } = Object.assign({
        patterns: [null, undefined, ''] as any[],
        extensions: [] as any[]
    }, config);
    const emptyKeys = [...patterns, ...extensions];
    const checkEmpty = (value: unknown) => {
        for (let i = 0; i < emptyKeys.length; i++) {
            const pattern = emptyKeys[i];
            if (pattern === value || ((typeof pattern === 'object' || Array.isArray(pattern)) && JSON.stringify(value) === JSON.stringify(pattern))) {
                return true;
            }
        }
        return false;
    }
    if (Array.isArray(params)) return emptyKeys.filter(value => !checkEmpty(value)) as T extends any[] ? any[] : Partial<T>;
    return Object.keys(params).reduce((res: Partial<T>, key: string) => {
        const value = params[key];
        if (checkEmpty(value)) return res;
        return {
            ...res,
            [key]: typeof value === 'string' ? value.trim() : value,
        };
    }, {}) as T extends any[] ? any[] : Partial<T>;
}