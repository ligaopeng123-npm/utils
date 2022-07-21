import { rgb2hex } from "../src";

describe('rgb2hex', () => {
    it('works', () => {
		expect(rgb2hex('RGB(13,188,121)')).toStrictEqual('#0dbc79');
        expect(rgb2hex('#369')).toStrictEqual('#336699');
	})
})
