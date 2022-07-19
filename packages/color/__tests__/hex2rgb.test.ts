import { hex2rgb } from "../src";

describe('hex2rgb', () => {
    it('works', () => {
		expect(hex2rgb('#0dbc79')).toStrictEqual('RGB(13,188,121)');
        expect(hex2rgb('#369')).toStrictEqual('RGB(51,102,153)');
	})
})
