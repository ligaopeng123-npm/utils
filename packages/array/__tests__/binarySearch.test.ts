import { binarySearch } from "../src";

const arr1: number[] = []
for (let i = 0; i < 10000; i++) {
    arr1.push(i + 1)
}

const arr2: number[][] = []
for (let i = 0; i < 10000; i++) {
    arr2.push([i + 1, Math.random()])
}

describe('binarySearch', () => {
    it('works', () => {
		expect(binarySearch(arr1, e => e - 3333)).toStrictEqual(3332);
        expect(binarySearch(arr1, e => e - (0))).toStrictEqual(-1);
        expect(binarySearch(arr1, e => e - (10001))).toStrictEqual(-1);
        expect(binarySearch(arr2, e => e[0] - 3333)).toStrictEqual(3332);
	})
})
