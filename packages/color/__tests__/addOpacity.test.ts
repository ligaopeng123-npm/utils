import { addOpacity } from "../src";

describe('addOpacity', () => {
    it('works', () => {
		expect(addOpacity('#0dbc79', .6)).toStrictEqual('rgba(13,188,121,0.6)');
        expect(addOpacity('#369', .6)).toStrictEqual('rgba(51,102,153,0.6)');
        expect(addOpacity('RGB(13,188,121)', .6)).toStrictEqual('rgba(13,188,121,0.6)');
        expect(addOpacity('RGBA(13,188,121,.5)', .6)).toStrictEqual('rgba(13,188,121,0.3)');
	})
})
