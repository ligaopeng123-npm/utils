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
import {formatTimestamp, getWeekCN} from "../../src";

describe('timestampToDate', () => {
	it('works', () => {
		expect(formatTimestamp(Date.now(), 'yyyy-MM-dd')).toEqual('2021-08-13');
		expect(formatTimestamp(new Date(), 'yyyy-MM-dd')).toEqual('2021-08-13');
		expect(formatTimestamp((new Date()).toString(), 'yyyy-MM-dd')).toEqual('2021-08-13');
		expect(getWeekCN(new Date())).toEqual('星期五');
	});
});

