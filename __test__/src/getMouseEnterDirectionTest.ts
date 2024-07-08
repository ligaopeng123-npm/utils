/**********************************************************************
 *
 * @模块名称: getMouseEnterDirection
 *
 * @模块作用: getMouseEnterDirection
 *
 * @创建人: pgli
 *
 * @date: 2024/7/8 5:19 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { getMouseEnterDirection } from "../../packages/utils";

const getMouseEnterDirectionTest = () => {
    const render = () => {
        const app = document.createElement('div');
        app.innerHTML = `        
                <div id="box" style="width: 200px;height: 300px;background-color: #f0f0f0;text-align: center;display: flex;align-items: center;justify-content: center;"></div>
            `
        return app;
    }
    const effect = () => {
        getMouseEnterDirection(document.querySelector('#box'), (direction, event) => {
            (document.querySelector('#box') as HTMLElement).innerText = direction;
            console.log(direction, event);
        })
    }
    return {
        render,
        effect,
    };
}

export default getMouseEnterDirectionTest
