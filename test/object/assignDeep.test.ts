import {assignDeep, assignDeepMergeArray, assignDeepNotIncludedArray} from '../../src';

const object1 = {
    a: `a`,
    b: `b`,
    c: {
        a: true,
        b: 123,
        c: `hello!`,
    },
    d: [1, 2, 3],
    e: [4, 5, 6],
};

const object2 = {
    b: `c`,
    f: `d`,
    c: {
        a: false,
    },
    d: null,
};

const object3 = {
    g: `g`,
    f: `f`,
    c: {
        b: 999,
    },
    e: [100, 101, 102],
};

describe('assignDeep', () => {
    it('works', () => {
        expect(assignDeep({a: 1}, {a: [1], b: 2})).toStrictEqual({
            a: [1],
            b: 2
        });
        expect(assignDeep(object1, object2, object3)).toStrictEqual({
            a: 'a',
            b: 'c',
            c: {a: false, b: 999, c: 'hello!'},
            d: null,
            e: [100, 101, 102],
            f: 'f',
            g: 'g'
        });

        // expect(assignDeepNotIncludedArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1})).toStrictEqual({
        //     a: [1, 2, 3, 4, 5, 6],
        //     b: 1
        // });

        expect(assignDeepMergeArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1})).toStrictEqual({
            a: [1, 2, 3, 4, 5, 6],
            b: 1
        });

        expect(assignDeepNotIncludedArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1})).toStrictEqual({
            a: [1, 2, 3],
            b: 1
        });
    });
});
