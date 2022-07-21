import {
    removeUrlParams,
    queryParamsFromUrl,
    removeEmptyParams,
    makeParamsProper,
    domainNameFromUri,
    routeFromUri
} from '../src';

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

describe('makeParamsProper', () => {
    it('works', () => {
        expect(makeParamsProper({a: null, b: undefined, c: '', d: [], e: 0, f: '   b d  f  ',})).toStrictEqual({
            e: 0,
            f: 'b d  f'
        });
    });
});

describe('domainNameFromUri', () => {
    it('works', () => {
        expect(domainNameFromUri('https://www.baidu.com/getBaseInfo?userId=xxx')).toEqual('https://www.baidu.com');
        expect(domainNameFromUri('www.baidu.com/getBaseInfo?userId=xxx')).toEqual('www.baidu.com');
    });
});

describe('routeFromUri', () => {
    it('works', () => {
        expect(routeFromUri('https://www.baidu.com/getBaseInfo?userId=xxx')).toEqual('/getBaseInfo');
        expect(routeFromUri('www.baidu.com/getBaseInfo?userId=xxx')).toEqual('/getBaseInfo');
        expect(routeFromUri('www.baidu.com/#/getBaseInfo?userId=xxx')).toEqual('/getBaseInfo');
    });
});
