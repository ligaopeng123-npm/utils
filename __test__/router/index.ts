/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @date: 2022/3/7 14:04
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export const initRouter = (router: any[]) => {
    const main = document.querySelector('#main');
    const hashChange = (e: any) => {
        const {hash} = location;
        // 查找匹配的路由
        for (let item of router) {
            if (item.path === hash || `#${item.path}` === hash) {
                const {render, effect} = item.component();
                if (main.childNodes[0]) {
                    main.replaceChild(render(), main.childNodes[0]);
                } else {
                    main.append(render());
                }
                // 执行副作用函数
                effect && effect();
                break;
            }
        }
    }
    // 第一次执行 处理重定向
    hashChange({});
    window.addEventListener('hashchange', hashChange);
}

