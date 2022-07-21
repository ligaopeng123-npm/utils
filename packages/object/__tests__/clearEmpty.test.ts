import { clearEmpty } from '../src';

const testData: any = {a: 1, b: 0, c: null, d: undefined, e: ''};

describe('clearEmpty', () => {
	it('works', () => {
		expect(clearEmpty(testData)).toStrictEqual({a: 1, b: 0});
	});
});
