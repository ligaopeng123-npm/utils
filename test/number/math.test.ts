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
import {min, max} from "../../src";

describe('math', () => {
	it('works', () => {
		expect(min(3, 4, 9)).toEqual(3);
		expect(max(3, 4, 9)).toEqual(9);
	});
});
