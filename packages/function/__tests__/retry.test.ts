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
import { AsyncToSync, promiseScheduler, PromiseTasks } from "../src";

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

    it('promiseTasks works', () => {
        const task = new PromiseTasks(5);
        for (let i = 0; i < 10; i++) {
            task.addTask(() => {
                if (i % 3 === 0) {
                    return 'fn +' + i;
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('success:' + Math.random() * 1000);
                    }, Math.random() * 100 * (i + 1));
                });
            }).then(res => {
            });
        }
        task.on('end', (res: Array<unknown>)=> {
            expect(res.length).toEqual(10)
        })
    });

    it('promiseScheduler works', () => {
        const task = new PromiseTasks(5);
        task.on('end', (res: Array<unknown>)=> {
            expect(res.length).toEqual(100)
        })
        task.all(testPromise);
    });

    it('AsyncToSync works', ()=> {
        const asyncToSync = new AsyncToSync();

        const fetchData = (n: number) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(n)
                }, n * 100);
            })
        }

        const test = () => {
            const data = asyncToSync.use(fetchData(3));
            const data2 = asyncToSync.use(fetchData(1));
            const data3 = asyncToSync.use(fetchData(2));
            expect(data).toEqual(3);
            expect(data2).toEqual(1);
            expect(data3).toEqual(2);
        }

        asyncToSync.run(test);
    });
});


