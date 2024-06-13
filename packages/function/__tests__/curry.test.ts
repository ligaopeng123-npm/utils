/**********************************************************************
 *
 * @模块名称: curry.test
 *
 * @模块作用: curry.test
 *
 * @创建人: pgli
 *
 * @date: 2024/6/13 9:48 上午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { currySuper, curry } from "../src";

describe('curry', () => {
    const add = (a: number, b: number) => {
        return a + b;
    }

    it('curry works', () => {
        expect(curry(add)(1)(2)).toEqual(3);
    });

    it('currySuper works', () => {
        expect(currySuper(add, 0)(1)(3, 2, 15, 3).value).toEqual(24);
    });
});