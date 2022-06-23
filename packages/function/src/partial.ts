/**********************************************************************
 *
 * @模块名称: partial
 *
 * @模块用途: partial 偏应用函数
 *
 * @date: 2021/8/17 9:06
 *
 * @版权所有: pgli
 *
 **********************************************************************/
type PartialFn = (...args: Array<any>) => any;
const partial = (fn: PartialFn, ...args: Array<any>): any => {
    return (...args2: Array<any>) => {
        let current = 0;
        // 定义当前参数，避免执行后被污染
        const curArgs = [...args];
        for (let i = 0; i < args.length && current < args2.length; i++) {
            // 如果参数中有undefined 则使用后面传入的参数做替换
            if (args[i] === undefined) curArgs[i] = args2[current++];
        }
        return fn(...curArgs);
    }
};


export default partial;
