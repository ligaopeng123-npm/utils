/**********************************************************************
 *
 * @模块名称: format.test
 *
 * @模块用途: format.test
 *
 * @date: 2022年9月15日14:14:39
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {
    toCase
} from "../src";

describe('maskMobile', () => {
    it('works', () => {
        expect(toCase('name')).toEqual('Name');
        expect(toCase('name', 1)).toEqual('NAME');
        expect(toCase('name', 2)).toEqual('name');
    });
});

