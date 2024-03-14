/**********************************************************************
 *
 * @模块名称: overload
 *
 * @模块作用: 函数重栽处理
 *
 * @创建人: pgli
 *
 * @date: 2024/3/14 3:41 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isFunction } from "@gaopeng123/utils.types";

// jquery中的实现
// 问题：1 需要额外定义一个对象 2 只能比较参数数量，类型变更不行 3 参数不能使用默认值
export function addMethod(object: { [key: string]: any }, name: string, fn: Function) {
    // 上一次添加的方法
    const old = object[name];
    object[name] = function () {
        // 传入的参数个数相等时，直接调用
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments);
            // 否则，递归去查历史添加的函数
        } else if (typeof old === "function") {
            return old.apply(this, arguments);
        }
    }
}

// const testObj: any = {};
//
// addMethod(testObj, 'fn', ()=> {
//     console.log('没有参数')
// })
//
// addMethod(testObj, 'fn', (str: number)=> {
//     console.log('一个参数')
// })
//
// addMethod(testObj, 'fn', (str1: number, str2: number)=> {
//     console.log('2个参数')
// })
//
// testObj.fn()
// testObj.fn(1)
// testObj.fn(1, 2)

/**
 * 创建重栽函数
 */
export const createOverload = () => {
    // 保存函数和key的映射
    const fnMap = new Map();

    const getMapKey = (args: Array<any>) => {
        return args.map((arg: any) => typeof arg).join('_')
    }

    // 返回的重栽函数
    function overload(...args: any) {
        const mapKey = getMapKey(args);
        const fn = fnMap.get(mapKey);
        if (fn) {
            // 保证this指向
            return fn.apply(this, args);
        } else {
            throw new Error(`当前参数对应的函数没有定义`)
        }
    }

    // 添加重栽类型
    overload.addMethod = function (...args: any) {
        const fn = args.pop();
        if (!isFunction(fn)) {
            return;
        }
        const params = args;
        fnMap.set(params.join('_'), fn);
    }

    return overload;
}





// const overload = createOverload();
//
//
// overload.addMethod(null, ()=> {
//     console.log('没有参数')
// })
//
// overload.addMethod('string', (str: string)=> {
//     console.log('string')
// })
//
// overload.addMethod('number', (num: number)=> {
//     console.log('number')
// })
//
// overload()
// overload('12')
// overload(12)