/**********************************************************************
 *
 * @模块名称: regexp.test
 *
 * @模块用途: regexp.test
 *
 * @date: 2022年9月15日14:14:54
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {
    maskMobile
} from "../src";

describe('maskMobile', () => {
    it('works', () => {
        expect(maskMobile('18511110000')).toEqual('185****0000');
    });
});

