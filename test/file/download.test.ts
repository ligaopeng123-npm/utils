import {removeUrlParams, queryParamsFromUrl} from '../../src';

describe('removeUrlParams', () => {
	it('works', () => {
		expect(removeUrlParams('https:/www.baidu.com/getBaseInfo?userId=xxx')).toEqual('https:/www.baidu.com/getBaseInfo');
	});
});
describe('queryParamsFromUrl', () => {
	it('works', () => {
		expect(queryParamsFromUrl('https:/www.baidu.com/getBaseInfo?userId=xxx')).toStrictEqual({userId: 'xxx'});
	});
});
