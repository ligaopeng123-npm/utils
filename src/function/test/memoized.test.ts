/**********************************************************************
 *
 * @模块名称: memoized.test
 *
 * @模块用途: memoized.test
 *
 * @date: 2021/8/17 9:23
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {memoized, asyncMemoized} from "../src";


describe('memoized', () => {
	it('memoized works', () => {
		const mi = memoized((a) => a * a);
		
		expect(mi(1)).toContain(1);
		expect(mi(2)).toContain(4);
		expect(mi(3)).toContain(9);
		expect(mi(4)).toContain(16);
	});
	const asyncMi = asyncMemoized(async (a: any) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(a * a);
			}, 1)
		});
	});
	
	it('asyncMemoized works', () => {
		return asyncMi(1 as any).then((res) => {
			expect(res).toContain(1)
		});
	});
	it('asyncMemoized works', () => {
		return asyncMi(2 as any).then((res) => {
			expect(res).toContain(4)
		});
	});
	it('asyncMemoized works', () => {
		return asyncMi(3 as any).then((res) => {
			expect(res).toContain(9)
		});
	});
	it('asyncMemoized works', () => {
		return asyncMi(4 as any).then((res) => {
			expect(res).toContain(16)
		});
	});
});
