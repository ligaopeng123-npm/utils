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
import {hump2hyphen, hyphen2hump} from "../src";

describe('hump', () => {
    it('works', () => {
        const width = 'width';
        const backgroundColor = 'backgroundColor';
        const borderBottomStyle = 'borderBottomStyle';

        expect(hump2hyphen(width)).toEqual('width');
        expect(hump2hyphen(backgroundColor)).toEqual('background-color');
        expect(hump2hyphen(borderBottomStyle)).toEqual('border-bottom-style');

        expect(hyphen2hump('width')).toEqual(width);
        expect(hyphen2hump('background-color')).toEqual(backgroundColor);
        expect(hyphen2hump('border-bottom-style')).toEqual(borderBottomStyle);
    });
});
