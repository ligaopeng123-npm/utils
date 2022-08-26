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
	extractParenthesesContent,
	RTF2str
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

		expect(RTF2str(`<p><em>生产中公开，光伏公开，光伏公开，光伏公开，</em></p><p>&lt;a&gt;123&lt;/a&gt;</p><p><strong style=\\"color: rgb(230, 0, 0);\\">光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏</strong></p>`))
			.toEqual(`生产中公开，光伏公开，光伏公开，光伏公开，<a<123</a<光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏`);
		expect(RTF2str(`<ol><li><strong><em><s><u>1212</u></s></em></strong></li><li><span style=\\"background-color: rgb(230, 0, 0); color: rgb(161, 0, 0);\\">55555</span></li><li><span style=\\"color: rgb(255, 153, 0);\\">ces</span></li></ol><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p>`))
			.toEqual(`121255555ces你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道`);
	});
});

