import {list2tree} from "../src";
import { listData, listTreeData } from "./mockData";

describe('list2tree', () => {
	it('works', () => {
		expect(list2tree({
            list: listData, 
            options: {idKey: 'id', pidKey: 'pid', childrenKey: 'children'
        }})).toStrictEqual(listTreeData);
	});
});