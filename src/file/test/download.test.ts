import {removeUrlParams, queryParamsFromUrl, removeEmptyParams} from '../src';

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
describe('removeEmptyParams', () => {
	it('works', () => {
		expect(removeEmptyParams({a: null, b: undefined, c: '', d: [], e: 0})).toStrictEqual({e: 0});
	});
});
