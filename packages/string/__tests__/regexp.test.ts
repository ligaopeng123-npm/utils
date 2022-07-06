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
import {
	extractBigParenthesesContent,
	extractEnclosedContent,
	extractMiddleParenthesesContent,
	extractParenthesesContent
} from "../src";

describe('extractEnclosedContent', () => {
	it('works', () => {
		const ans = ['1111', '4444', '3333'];
		expect(extractEnclosedContent("a (1111),b (4444), d(3333)", '(', ')')).toStrictEqual(ans);
		expect(extractParenthesesContent("a (1111),b (4444), d(3333)")).toStrictEqual(ans);
		expect(extractParenthesesContent("a (1111),b (4444)")).toStrictEqual(['1111', '4444']);
		expect(extractParenthesesContent("a (1111),b (2)")).toStrictEqual(['1111', '2']);
		expect(extractMiddleParenthesesContent("a (1111),b [4444], d(3333)")).toStrictEqual(['4444']);
		expect(extractBigParenthesesContent("a {1111},b (4444), d{3333}")).toStrictEqual(['1111', '3333']);
	});
});

