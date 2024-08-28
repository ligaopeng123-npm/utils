// 定义函数callback的类型及返回值
export type FunctionCallback<T extends any[], R> = (...arg: T) => R;
// T是函数则返回函数返回值 否则返回T
export type FunctionCallbackReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
// Optional<params, 'name' | ‘age’>； 将params的 name age 制成可选项
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// 获取一个对象的key和value的类型
export type ObjectValues<T> = T[keyof T];
export type ObjectKeys<T> = keyof T;
export type ObjectKeyValue<T> = {
    key: keyof T;
    value: T[keyof T];
};