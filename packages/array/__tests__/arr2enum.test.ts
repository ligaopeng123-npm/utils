import { arr2enum } from "../src";

describe('arr2enum', () => {
    it('works', () => {
		expect(arr2enum([
            {testId: 'id1', testName: 'name-1'},
            {testId: 'id2', testName: 'name-2'},
        ], 'testId', 'testName')).toStrictEqual({
            id1: 'name-1',
            id2: 'name-2'
        });
	})
})
