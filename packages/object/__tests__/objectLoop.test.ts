import { filterObject, forEachObject, getObjectAttr, mapObject, setObjectAttr } from '../src';

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


describe('objectLoop', () => {
    it('works', () => {
        expect(filterObject(Object.assign({}, object1), (item) => {
            return typeof item === 'string'
        })).toStrictEqual({
            a: `a`,
            b: `b`,
        });
        expect(mapObject(Object.assign({}, object1), () => {
            return 0;
        })).toStrictEqual({
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0
        });

        expect(forEachObject(Object.assign({}, object1), (item) => {
            return typeof item === 'string' ? 0 : 1;
        })).toStrictEqual({
            a: 0,
            b: 0,
            c: 1,
            d: 1,
            e: 1
        });


        expect(getObjectAttr(object1, 'c.b')).toStrictEqual(123);
        expect(getObjectAttr(object1, 'd')).toStrictEqual([1, 2, 3]);
        expect(getObjectAttr(object1, 'f')).toBeUndefined();


        expect(setObjectAttr(object1, 'c.b', { b1: 123 })).toStrictEqual(Object.assign({}, object1, {
            c: {
                a: true,
                b: { b1: 123 },
                c: `hello!`,
            }
        }));


        expect(setObjectAttr(object1, 'f', { b1: 123 })).toStrictEqual(Object.assign({}, object1, {
            f: { b1: 123 }
        }));

        expect(setObjectAttr(object1, 'c.b.d', { b1: 123 })).toStrictEqual(object1);
    });
});
