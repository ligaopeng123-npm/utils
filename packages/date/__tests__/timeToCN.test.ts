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
import {timestampToCN} from "../src";

describe('timeToCN', () => {
    it('works', () => {
        expect(timestampToCN(3600)).toEqual("3.6秒");
        expect(timestampToCN(121255*1000, 'H小时m分钟')).toEqual("33小时40分钟");
        expect(timestampToCN(121255*1000, 'H小时')).toEqual("33小时");
        expect(timestampToCN(121255*1000, 'm分钟')).toEqual("2020分钟");
        expect(timestampToCN(121255*1000, 'ss秒')).toEqual("121255秒");
        expect(timestampToCN(3601 * 1000)).toEqual("01小时00分钟01秒");
        expect(timestampToCN(86400 * 1000 + 1000)).toEqual("01天00小时00分钟01秒");
        expect(timestampToCN(86400 * 1000 + 1000, "d天H小时m分钟ss秒")).toEqual("1天0小时0分钟01秒");
        expect(timestampToCN(3601 * 1000000)).toEqual("41天16小时16分钟40秒");
    });
});

