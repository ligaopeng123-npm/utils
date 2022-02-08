import {css2obj, obj2css} from '../src';

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
        console.log(obj2css(testData))
        expect(obj2css(testData))
            .toEqual(cssData);
    });
});
describe('css2obj', () => {
    it('works', () => {
        expect(css2obj(cssData)).toStrictEqual(testData);
    });
});

