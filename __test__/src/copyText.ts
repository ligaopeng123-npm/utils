/**********************************************************************
 *
 * @模块名称: copyText
 *
 * @模块作用: copyText
 *
 * @创建人: pgli
 *
 * @date: 2024/4/24 6:59 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { copyText } from "../../packages/utils";
const copyTextTest = () => {
    const render = () => {
        const app = document.createElement('div');
        app.innerHTML = `        
                <input id="copyText-input"></input>
                <button id="copyText">copyText</button>
            `
        return app;
    }
    const effect = () => {
        document.querySelector('#copyText').addEventListener('click', () => {
            copyText(document.querySelector('#copyText-input')).then((text) => {
                alert(text.value)
            });
        })
    }

    return {
        render,
        effect,
    };
}

export default copyTextTest
