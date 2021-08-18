/**********************************************************************
 *
 * @模块名称: timestamp.test
 *
 * @模块用途: timestamp.test
 *
 * @date: 2021/8/13 16:14
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {toThousands} from "../../src";

describe('toThousands', () => {
	it('works', () => {
		expect(toThousands(9999999)).toEqual('9,999,999');
		expect(toThousands(9999999.000, 3)).toEqual('9,999,999.000');
		expect(toThousands('9999999')).toEqual('9,999,999');
		expect(toThousands('9999999.000', 3)).toEqual('9,999,999.000');
	});
});

