import { initRouter } from "./router";
import observeViewportTest from './src/observeViewport';
import pageTurnerFixedLength from "./src/pageTurnerFixedLength";
import copyTextTest from "./src/copyText";
import getMouseEnterDirectionTest from "./src/getMouseEnterDirectionTest";


const router = [{
    path: '/observeViewport',
    component: observeViewportTest,
}, {
    path: '/pageTurnerFixedLength',
    component: pageTurnerFixedLength
}, {
    path: '/copyText',
    component: copyTextTest
}, {
    path: '/getMouseEnterDirection',
    component: getMouseEnterDirectionTest
}]

window.onload = () => {
    initRouter(router);
    const routeDom = document.querySelector('#route');
    router.forEach((route) => {
        const link = document.createElement('a');
        link.href = `#${route.path}`;
        link.innerText = `${route.path}`;
        routeDom.append(link);
    });
}
