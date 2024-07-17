/** ********************************************************************
 *
 * @模块名称: inject
 *
 * @模块用途: inject
 *
 * @date: 2022/7/21 14:09
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
/**
 * 动态导入script
 * @param src
 */
export const injectScript = (src: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.type = 'text/JavaScript';
        s.async = true;
        s.onload = function () {
            resolve(true);
        };
        s.onerror = function () {
            reject(false);
        };
        s.src = src;
        const t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    });
}

/**
 * 批量加载js文件
 * @param src
 */
export const injectScripts = (src: Array<string>): Promise<boolean[]> => {
    return Promise.all(src.map((itemStr: string) => {
        return injectScript(itemStr);
    }));
}

/**
 * 动态添加css
 * @param id
 * @param cssText
 */
export const injectCSS = (id: string, cssText: string) => {
    let style: any
    let loaded: boolean = false;
    if (document.querySelector(`#${id}`)) {
        style = document.querySelector(`#${id}`);//创建一个style元素
        loaded = true;
    } else {
        style = document.createElement('style');//创建一个style元素
        loaded = false;
    }
    style.id = id; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    const head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
    if (style.styleSheet) { //IE
        const func = function () {
            try { //防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            } catch (e) {

            }
        }
        //如果当前styleSheet还不能用，则放到异步中则行
        if (style.styleSheet.disabled) {
            setTimeout(func, 10);
        } else {
            func();
        }
    } else { //w3c
        //w3c浏览器中只要创建文本节点插入到style元素中就行了
        if (!loaded) {
            const textNode = document.createTextNode(cssText);
            style.appendChild(textNode);
        } else {
            style.innerHTML = cssText;
        }
    }
    if (!loaded) {
        head.appendChild(style); //把创建的style元素插入到head中
    }
}
/**
 * 根据
 * @param animationName
 */
export const findKeyframesRule = (animationName: string): { rule: CSSRule, styleSheetsIndex: number, cssRulesIndex: number } | null => {
    //此处过滤非同源的styleSheet，因为非同源的无法访问cssRules，会报错
    const ss = Array.from(document.styleSheets).filter((styleSheet) => !styleSheet.href || styleSheet.href.startsWith(location.origin))
    for (let i = 0; i < ss.length; ++i) {
        for (let j = 0; j < ss[i].cssRules.length; ++j) {
            // @ts-ignore
            if (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE && ss[i].cssRules[j].name === animationName) {
                return {
                    rule: ss[i].cssRules[j],
                    styleSheetsIndex: i,
                    cssRulesIndex: j
                };
            }
        }
    }
    return null
}

/**
 * 插入Keyframes
 * @param animationName
 */
export const injectKeyframes = (animationName: string, keyframesRule: string): void => {
    try {
        const rule = findKeyframesRule(animationName);
        const newKeyframes = `@keyframes ${animationName} ${keyframesRule}`
        if (rule) {
            document.styleSheets[rule.styleSheetsIndex].deleteRule(rule.cssRulesIndex);
            document.styleSheets[rule.styleSheetsIndex].insertRule(newKeyframes, rule.cssRulesIndex);
        } else {
            document.styleSheets[0].insertRule(newKeyframes, 0);
        }
    } catch (e) {
        console.error(e);
    }
}