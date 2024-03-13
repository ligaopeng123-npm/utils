import {
    isJSON,
    isUTC,
} from "../src";

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

describe('isUTC', () => {
    it('works', () => {
        expect(isUTC('2023-06-11T14:18:22.000+00:00')).toEqual(true);
        expect(isUTC('2023-06-11T14:18:22.100+00:00')).toEqual(true);
        expect(isUTC('2023-06-1114:18:22.100+00:00')).toEqual(false);
    });
});
