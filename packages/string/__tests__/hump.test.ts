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
import { hump2hyphen, hyphen2hump, lowerCamelCase, upperCamelCase, checkVersion } from "../src";

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

        expect(lowerCamelCase('background-color')).toEqual(backgroundColor);
        expect(upperCamelCase('background-color')).toEqual('BackgroundColor');

        expect(checkVersion('1.1.1', '1.1.2')).toEqual(true);
        expect(checkVersion('1.1.1', '1.1.0')).toEqual(false);
        expect(checkVersion('1.1.1', '1.1.1.0')).toEqual(true);
        expect(checkVersion('1.1.1', '1.1.1')).toEqual(false);
    });
});
