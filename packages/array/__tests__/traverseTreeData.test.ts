/** ********************************************************************
 *
 * @模块名称: traverseTreeData.test
 *
 * @模块用途: traverseTreeData.test
 *
 * @date: 2022/3/18 13:41
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import {traverseTreeData} from "../src";
import {treeData1, treeData2} from "./mockData";

describe('traverseTreeData', () => {
    it('works', () => {
        expect(traverseTreeData(treeData1, (item) => {
            return Object.assign({}, item, item.id === 1 ? {name: `${item.id}`} : {});
        })).toStrictEqual(treeData2);
    });
});
