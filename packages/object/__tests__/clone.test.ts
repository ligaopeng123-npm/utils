import {clone, cloneAllItems} from '../src';


const test = {a: 1};
const test1 = [1, 1, 2, {test}];

describe('clone', () => {
	it('works', () => {
		expect(clone(test)).toStrictEqual(test);
		expect(clone(test1)).toStrictEqual(test1);
		expect(cloneAllItems(test)).toStrictEqual(test);
		expect(cloneAllItems(test1)).toStrictEqual(test1);
	});
});
