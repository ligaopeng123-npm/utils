/**********************************************************************
 *
 * @模块名称: findSubtreeByOrder.test
 *
 * @模块用途: findSubtreeByOrder.test
 *
 * @date: 2021/10/21 14:43
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {findSubtreeByOrder} from "../src";
import {treeData} from "./mockData";

describe('findSubtreeByOrder', () => {
	it('works', () => {
		expect(findSubtreeByOrder(treeData, [1, 2])).toStrictEqual({
			id: 6
		});
		
		expect(findSubtreeByOrder(treeData, [0, 2])).toStrictEqual({
			id: 7
		});
	});
});
