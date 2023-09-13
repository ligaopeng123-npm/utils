/**********************************************************************
 *
 * @模块名称: path.test
 *
 * @模块用途: path.test
 *
 * @date: 2021/9/1 14:16
 *
 * @版权所有: pgli
 *
 **********************************************************************/

import {pathJoin, replaceDomain} from "../src";

describe('pathJoin', () => {
	it('works', () => {
		expect(pathJoin('http://10.3.3.3', 'api/test')).toEqual('http://10.3.3.3/api/test');
		expect(pathJoin('/api', '/test')).toEqual('/api/test');
		expect(pathJoin()).toEqual('');
		expect(replaceDomain('https://10.1.1.1:4000/api/a/b', 'https://10.1.1.1:6000/appApi')).toEqual('https://10.1.1.1:6000/appApi/api/a/b');
		expect(replaceDomain('https://10.1.1.1:4000/api/a/b', '//10.1.1.1:6000/appApi')).toEqual('//10.1.1.1:6000/appApi/api/a/b');
		expect(replaceDomain('https://10.1.1.1:4000/api/a/b', '/appApi')).toEqual('/appApi/api/a/b');
		expect(replaceDomain('//10.1.1.1:4000/api/a/b', '/appApi')).toEqual('/appApi/api/a/b');
	});
});
