import { uniqueArrByKey, unique } from "../src";
import { delItem } from "../dist";

describe('uniqueArrByKey', () => {
    it('works', () => {
        expect(uniqueArrByKey([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
            {testId: 'id2', testName: 'name-2'},
        ], 'testId')).toStrictEqual([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'}]);

        expect(unique([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
            {testId: 'id2', testName: 'name-2'},
        ], 'testId')).toStrictEqual([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'}]);

        expect(delItem([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
            {testId: 'id2', testName: 'name-2'},
        ], (item)=> item.testId === 'id2')).toStrictEqual([
            {testId: 'id1', testName: 'name-1'}]);

        expect(delItem('abc', (item)=> item === 'a')).toEqual('bc');
    })
})
