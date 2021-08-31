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
import {addOpacity, hex2Rgb, rgb2hex} from "../../src";

describe('extractEnclosedContent', () => {
	it('works', () => {
		expect(addOpacity('#fff', 0.7)).toEqual('rgba(255,255,255,0.7)');
		expect(addOpacity('rgb(0,0,0)', 0.7)).toEqual('rgba(0,0,0,0.7)');
		expect(addOpacity('rgba(0,0,0,0)', 0.7)).toEqual('rgba(0,0,0,0.7)');
		
		expect(hex2Rgb('#000')).toEqual('rgb(0,0,0)');
		expect(rgb2hex('rgb(0,0,0)')).toEqual('#000000');
		// console.log(rgba2hex('rgba(255,255,255,0)'))
		// expect(rgba2hex('rgba(0,0,0,0)')).toEqual('#000000');
		// rgba2rgb('rgb(1,1,1)')
		// expect(rgba2rgb('rgba(0,0,0,0)')).toEqual('rgb(1,1,1)');
	
	});
});
