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
import {findTreeOrder} from "../src";
import {treeData} from "./mockData";

describe('findTreeOrder', () => {
	it('works', () => {
		expect(findTreeOrder(treeData, (item) => {
			return item.id === 1;
		})).toStrictEqual([0]);
		
		expect(findTreeOrder(treeData, (item) => {
			return item.id === 7;
		})).toStrictEqual([0, 0, 0]);
		
		expect(findTreeOrder(treeData, (item) => {
			return item.id === 6;
		})).toStrictEqual([1, 2]);
	});
});



