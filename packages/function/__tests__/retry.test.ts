/**********************************************************************
 *
 * @模块名称: retry.test
 *
 * @模块作用: retry.test
 *
 * @创建人: pgli
 *
 * @date: 2024/7/8 11:30 上午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { promiseScheduler } from "../src";

// jest.setTimeout(100000); // 默认5秒

describe('retry', () => {
    const test = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject(Math.random() * 100)
                } else {
                    resolve(Math.random() * 100) // 成功
                }
            }, Math.random() * 100);
        });
    }


    const testPromise = new Array(100).fill(0).map(() => test);

    it('promiseScheduler works', () => {
        return promiseScheduler(testPromise).then((res: any) => {
            expect(res.length).toEqual(100)
        });
    });
});