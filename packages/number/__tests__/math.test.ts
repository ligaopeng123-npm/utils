/**********************************************************************
 *
 * @模块名称: math.test
 *
 * @模块用途: math.test
 *
 * @date: 2021/9/1 14:47
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {min, max, toFixed} from "../src";

describe('math', () => {
	it('works', () => {
		expect(min(3, 4, 9)).toEqual(3);
		expect(max(3, 4, 9)).toEqual(9);

		expect(toFixed(3, 2)).toEqual(3.00);
		expect(toFixed('3.22' as any, 1)).toEqual(3.2);
		expect(toFixed(null as any, 1)).toEqual(null);
	});
});
