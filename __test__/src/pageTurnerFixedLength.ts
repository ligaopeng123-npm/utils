/** ********************************************************************
 *
 * @模块名称: observeViewport
 *
 * @模块用途: observeViewport
 *
 * @date: 2022/3/8 8:22
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import {pageTurnerFixedLength} from "../../packages/utils";

const pageTurnerFixedLengthTest = () => {
    const render = () => {
        const app = document.createElement('div');
        const rows = new Array(53).fill(0).map((i, index) => index + 1);
        const [[pageData, nextDisabled, previousDisabled], next, previous] = pageTurnerFixedLength(rows, 5);
        const nextButton = document.createElement('button');
        const previousButton = document.createElement('button');
        nextButton.innerText = `下一页`;
        nextButton.disabled = !nextDisabled;
        previousButton.innerText = `上一页`;
        previousButton.disabled = !previousDisabled;
        const pages = document.createElement('div');

        const createPage = (rows: any) => {
            let html = '';
            rows.forEach((i: any) => {
                html += `<div>${i}</div>`
            });
            pages.innerHTML = html;
        }

        createPage(pageData);

        nextButton.onclick = () => {
            const [rows, nextDisabled, previousDisabled] = next();
            createPage(rows);
            nextButton.disabled = !nextDisabled;
            previousButton.disabled = !previousDisabled;
        };
        previousButton.onclick = () => {
            const [rows, nextDisabled, previousDisabled] = previous();
            createPage(rows);
            nextButton.disabled = !nextDisabled;
            previousButton.disabled = !previousDisabled;
        };

        app.append(pages);
        app.append(previousButton);
        app.append(nextButton);

        return app;
    }
    const effect = () => {

    }
    return {
        render,
        effect,
    };
}

export default pageTurnerFixedLengthTest;
