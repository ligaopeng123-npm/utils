import { css2obj, obj2css, makeCssText, classnames } from '../src';
import { stylesComponents } from "../src";

const testData = {
    backgroundColor: "red",
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    color: "#ffffff",
    fontSize: "16px",
    height: "100px",
    marginBottom: "10px",
    paddingTop: "10px",
    width: "100px",
}

const cssData = "background-color: red;" +
    "border-bottom-color: #000000;" +
    "border-bottom-style: solid;" +
    "border-bottom-width: 1px;" +
    "color: #ffffff;" +
    "font-size: 16px;" +
    "height: 100px;" +
    "margin-bottom: 10px;" +
    "padding-top: 10px;" +
    "width: 100px;" +
    ""
describe('obj2css', () => {
    it('works', () => {
        expect(obj2css(testData))
            .toEqual(cssData);
    });
});
describe('css2obj', () => {
    it('works', () => {
        expect(css2obj(cssData)).toStrictEqual(testData);
    });
});

describe('makeCssText', () => {
    it('works', () => {
        expect(makeCssText({ 'my-class-name': testData })).toStrictEqual(`.my-class-name { ${cssData} } `);
    });
});


describe('classnames', () => {
    it('works', () => {
        expect(classnames({ 'my-class-name': true })).toEqual(`my-class-name`);
        expect(classnames({ abc: true, 'my-class-name': false })).toEqual(`abc`);
        expect(classnames(['abc', { 'my-class-name': true }])).toEqual(`abc my-class-name`);
    });
});

describe('createStyles', () => {
    it('works', () => {
        const div: any = {
            style: { cssText: '' }, classList: {
                add: function () {

                }
            }, setAttribute: function () {}
        };

        const { styled } = stylesComponents();

        styled(div)`
            color: red;
            width: 100px;
            backgroundColor: blue;
        `.attrs(div)`
            data-test: abc;
        `;
        expect(div.style.cssText).toEqual(`color: red;width: 100px;background-color: blue;`);
    });
});
