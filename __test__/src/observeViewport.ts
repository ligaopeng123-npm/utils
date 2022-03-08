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
import {observeViewport} from "../../packages/utils";
// @ts-ignore
import testImg from '../public/test.jpg';

const observeViewportTest = () => {
    const render = () => {
        const app = document.createElement('div');
        for (let i = 0; i < 100; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.height = '180px';
            item.id = `item-${i}`;
            app.append(item);
        }
        return app;
    }
    const effect = () => {
        const list: any = document.querySelectorAll('.item');
        observeViewport(list, (els: any) => {
            els.forEach((el: any) => {
                if (!el.querySelector('img')) {
                    const img = document.createElement('img');
                    img.src = testImg;
                    el.append(img);
                }
            })
        }, 200, {leading: true});
    }
    return {
        render,
        effect,
    };
}

export default observeViewportTest;
