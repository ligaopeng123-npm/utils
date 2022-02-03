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

import {pathJoin} from "../src";

describe('pathJoin', () => {
	it('works', () => {
		expect(pathJoin('http://10.3.3.3', 'api/test')).toEqual('http://10.3.3.3/api/test');
		expect(pathJoin('/api', '/test')).toEqual('/api/test');
		expect(pathJoin()).toEqual('');
	});
});
