import { groupBy, enum2arr } from "../src";

describe('groupBy', () => {
    it('works', () => {
        expect(groupBy([
            { testId: 'id1', testName: 'name-1' },
            { testId: 'id2', testName: 'name-2' },
        ], 'testId')).toStrictEqual({
            id1: [{ testId: 'id1', testName: 'name-1' }],
            id2: [{ testId: 'id2', testName: 'name-2' }]
        });

        expect(groupBy([
            { testId: 'id1', testName: 'name-1' },
            { testId: 'id2', testName: 'name-2' },
        ], (item) => item.testId)).toStrictEqual({
            id1: [{ testId: 'id1', testName: 'name-1' }],
            id2: [{ testId: 'id2', testName: 'name-2' }]
        });
    })
})