import { uniqueArrByKey } from "../src";

describe('uniqueArrByKey', () => {
    it('works', () => {
        expect(uniqueArrByKey([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
            {testId: 'id2', testName: 'name-2'},
        ], 'testId')).toStrictEqual([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'}]);
    })
})
