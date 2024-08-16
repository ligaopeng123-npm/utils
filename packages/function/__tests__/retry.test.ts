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
import { retry } from "../src";

// jest.setTimeout(100000); // 默认5秒

describe('retry', () => {
    const test = () => {
        return new Promise((resolve, reject) => {
            const num = Math.random();
            setTimeout(() => {
                if (num > 0.5) {
                    reject('err')
                } else {
                    resolve('success') // 成功
                }
            }, num * 100);
        });
    }

    it('retry works', () => {
        return retry(test, {timeout: 100, max: 5}).then((res: any) => {
            expect(res).toEqual('success')
        }).catch((err)=> {
            expect(err).toEqual('err')
        });
    });
});


