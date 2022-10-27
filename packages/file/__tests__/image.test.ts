import {
    imageTypeFromUrl,
} from '../src';

describe('imageTypeFromUrl', () => {
    it('works', () => {
        expect(imageTypeFromUrl('https://pic1.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b')).toEqual('jpg');
        expect(imageTypeFromUrl('https://ops.sany.com.cn/testShare/share/data/issues/09bcde0dc9d323e41bfe5e1e4c5abc96.png')).toEqual('png');
    });
});
