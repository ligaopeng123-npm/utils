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

export const curry = (fn: Curry) => {
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

interface CurrySuperFn {
    (...args: Array<unknown>): CurrySuperFn;

    value: unknown;
    clear: () => void;
}

export const currySuper = (fn: Function, initialValue: unknown) => {
    if (typeof fn !== 'function') {
        throw new Error(`${fn} is not a function`);
    }

    /**
     * 当涉及比较和类型转化时 计算值 并将值返回
     */
    const getResult = () => {
        // 初始值参与计算，因此需要传递的参数就少一位 allArgs就多一位
        const fnLength = fn.length - 1;
        const len = Math.ceil((allArgs.length + 1) / fnLength);
        // 循环调用fn去计算
        for (let i = 0; i < len; i++) {
            if (allArgs.length >= fnLength) {
                const currentArgs = allArgs.splice(0, fnLength);
                result = fn(result, ...currentArgs);
            }
        }
        // 传递过来的参数有可能过少 过少的参数就不参与计算
        if (allArgs.length > 0) {
            console.error(`Too many arguments【${allArgs.join()}】 for ${fn.name}`);
        }
        return result;
    }

    // 保存初始值 记录每次调用的参数 每次调用将参数拼接
    let result = initialValue;
    let allArgs: Array<unknown> = [];
    const f = (...args: Array<unknown>) => {
        allArgs.push(...args);
        // 也可以显式调用无参返回最后的结果
        // if (args.length === 0) {
        //     return getResult();
        // }
        return f as CurrySuperFn;
    };

    /**
     * 重写toString和valueOf方法
     * 在参与计算、比较等涉及需要类型转换的时候（打印也会） 会调用toString或valueOf函数 输出结果
     */
    // f.toString = f.valueOf = function () {
    //     return getResult();
    // };

    f.clear = () => {
        result = initialValue;
        allArgs = [];
    }

    Object.defineProperty(f, 'value', {
        get: function () {
            return getResult();
        }
    });
    return f;
}