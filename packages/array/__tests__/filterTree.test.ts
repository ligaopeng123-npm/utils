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
import { filterTree } from "../src";
import { filterTreeData, filterTreeValue1, filterTreeValue2 } from "./mockData";

describe('filterTree', () => {
    it('works', () => {
        expect(filterTree(filterTreeData, (item) => {
            return item.id === 7;
        })).toStrictEqual(filterTreeValue1);

        expect(filterTree(filterTreeData, (item) => {
            return item.id === 7;
        }, {deep: true})).toStrictEqual(filterTreeValue2);
    });
});



