import { arr2enum, enum2arr } from "../src";

describe('arr2enum', () => {
    it('works', () => {
        expect(arr2enum([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
        ], 'testId', 'testName')).toStrictEqual({
            id1: 'name-1',
            id2: 'name-2'
        });

        expect(enum2arr({
            id1: 'name-1',
            id2: 'name-2'
        })).toStrictEqual([
            {label: 'name-1', value: 'id1'},
            {label: 'name-2', value: 'id2'},
        ]);
    })
})
