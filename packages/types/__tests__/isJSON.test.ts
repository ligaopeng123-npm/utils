import {isJSON} from "../src";

const test = {a: 1};
const test1 = [1, 1, 2, {test: {}}];

describe('isJSON', () => {
	it('works', () => {
		expect(isJSON(test)).toEqual(true);
		expect(isJSON(test1)).toEqual(true);
		expect(isJSON(JSON.stringify(test))).toEqual(true);
		expect(isJSON(JSON.stringify(test1))).toEqual(true);
		expect(isJSON("[1,1,2,{\"test\":{}}")).toEqual(false);
		expect(isJSON("{1,1,2,{\"test\":{}}]")).toEqual(false);
		expect(isJSON("{1,1,2,{\"test\":{}}")).toEqual(false);
	});
});
