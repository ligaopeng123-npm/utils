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
import {toThousands, unitUpgrade, bitUpgrade, bitRateUpgrade} from "../src";

describe('toThousands-unitUpgrade', () => {
	it('works', () => {
		expect(toThousands(9999999)).toEqual('9,999,999');
		expect(toThousands(9999999.000, 3)).toEqual('9,999,999.000');
		expect(toThousands('9999999')).toEqual('9,999,999');
		expect(toThousands('9999999.000', 3)).toEqual('9,999,999.000');
		expect(toThousands('9999999.000', 3)).toEqual('9,999,999.000');
		// 单位测试
		expect(unitUpgrade(1000)).toStrictEqual(['1.00', 'KB']);
		expect(bitUpgrade(1000)).toEqual('1.00KB');
		expect(bitUpgrade(999)).toEqual('999B');
		
		expect(bitRateUpgrade(1000)).toEqual('1000bps');
		expect(bitRateUpgrade(1025, {delimiter: ' '})).toEqual('1.00 Kbps');
	});
});

