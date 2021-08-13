import {removeUrlParames} from '../../src';

describe('removeUrlParames', () => {
	it('works', () => {
		expect(removeUrlParames('https:/www.baidu.com/getBaseInfo?userId=xxx')).toEqual('https:/www.baidu.com/getBaseInfo');
	});
});
