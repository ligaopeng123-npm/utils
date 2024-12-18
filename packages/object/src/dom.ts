/**********************************************************************
 *
 * @模块名称: dom
 *
 * @模块用途: dom
 *
 * @date: 2021/8/18 16:52
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isElement, isFunction, isString, isUndefined } from "@gaopeng123/utils.types";
import { debounce, DebounceOptions } from "@gaopeng123/utils.function";
import { escape } from "@gaopeng123/utils.string";

/**
 * 获取样式
 * @param el
 * @param styleName
 */
export const getStyle = (el: Element, styleName: string): string => {
    if (isElement(el)) {
        // @ts-ignore
        if (el.currentStyle) {
            // @ts-ignore
            return el.currentStyle[styleName];
        } else {
            const computed = getComputedStyle(el, null);
            // @ts-ignore
            return computed[styleName] || (computed.getPropertyValue ? computed.getPropertyValue(styleName) : '');
        }
    }
    return '';
};

/**
 * 递归查找符合预期的dom结构
 * @param dom
 * @param expected
 * @returns {any}
 */
export const parentByExpected = (dom: any, expected: any): any => {
    // 如果找到根节点了 就返回 避免循环死掉
    if (dom.tagName === 'BODY' || isFunction(expected) && expected(dom)) return dom;
    return parentByExpected(dom.parentNode || dom.parentElement, expected);
};

/**
 * 点击文本复制
 * @param value
 */
export const copyText = (value: HTMLElement | string): Promise<{ message: string, status: boolean, value: string }> => {
    return new Promise((resolve, reject) => {
        let text: string;
        if (isString(value)) {
            text = value as string;
        } else if (isElement(value)) {
            // @ts-ignore
            text = value.value || value.innerText;
        } else {
            resolve({
                status: false,
                message: `请检查参数${value}`,
                value: ''
            });
            return;
        }
        if (!isUndefined(text)) {
            const input = document.createElement('textarea');
            document.body.appendChild(input);
            input.innerHTML = escape(text);
            input.setAttribute('code', '1');
            input.select();

            if (document.execCommand('Copy')) {
                console.log('复制成功');
                resolve({
                    status: true,
                    value: text,
                    message: `复制成功`
                });
                document.body.removeChild(input);
            }
            // const list = document.getElementsByTagName('textarea');
            // const inputList = Array.prototype.slice.call(list);
            // inputList.forEach((item: Element) => {
            //     if (item.getAttribute('code')) {
            //         document.body.removeChild(item);
            //     }
            // });
        }
    })
};

/**
 * 判断元素是否在可视范围内
 * @param el  需要判断的元素
 * @param partiallyVisible 是否部分可见
 */
export const isVisibleInViewport = (el: Element, partiallyVisible = true): boolean => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

/**
 *
 * @param observeDomList 监控的对象集合 数组
 * @param observeCallBack    监听函数
 * @param wait          去抖时间
 * @param options       去抖配置
 */
type ObserveViewport = Pick<IntersectionObserver, "disconnect" | "unobserve" | 'takeRecords'> & {
    intersectionObserver: IntersectionObserver
}

export const observeViewport = (observeDomList: any[], observeCallBack: any, wait?: number, options?: DebounceOptions<any>): ObserveViewport => {
    /**
     * 保存当前去抖范围内监听到的元素
     */
    let elList: any = [];
    const list = Array.from(observeDomList);
    /**
     * 定义去抖函数
     */
    const debounceFn = debounce(() => {
        isFunction(observeCallBack) && observeCallBack(elList);
        elList = [];
    }, wait, options);
    /**
     * 定义监听函数
     */
    const IO = new IntersectionObserver((ioList: any) => {
        ioList.forEach((ioEvent: any) => {
            const el = ioEvent.target;
            const intersectionRatio = ioEvent.intersectionRatio;
            if (intersectionRatio > 0 && intersectionRatio <= 1) {
                elList.push(el);
            }
        });
        debounceFn();
    });
    // 监听这些元素
    list.forEach((item) => {
        IO.observe(item)
    });

    return {
        intersectionObserver: IO,
        disconnect: () => IO.disconnect(),
        unobserve: (item: Element) => IO.unobserve(item),
        takeRecords: () => IO.takeRecords()
    }
}

/**
 *获取当前的滚动位置
 * @param el
 */
export const getScrollPosition = (el: Window | Element = window): { x: number, y: number } => {
    return {
        // @ts-ignore
        x: el?.pageXOffset === undefined ? el?.scrollLeft : el.pageXOffset,
        // @ts-ignore
        y: el?.pageYOffset !== undefined ? el.pageYOffset : el?.scrollTop
    }
};

/**
 * 滚动到顶部
 */
export const scrollToTop = (el?: Element): void => {
    const element = el || document.documentElement || document.body;
    const c = element.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(() => scrollToTop(element));
        (element || window).scrollTo(0, c - c / 8);
    }
}


/**
 * 检查浏览器是否支持某个css属性值
 */
export const validatesCssValue = (key: string, value: string) => {
    const prefix = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
    const prefixValue = [];
    for (let i = 0; i < prefix.length; i++) {
        prefixValue.push(prefix[i] + value)
    }
    const element = document.createElement('div');
    const eleStyle: any = element.style;
    for (let j = 0; j < prefixValue.length; j++) {
        eleStyle[key] = prefixValue[j];
    }
    return eleStyle[key];
}

/**
 * 根据正切求角度 来获取鼠标进入的方向
 * @param event
 * @param element
 */
export const getMouseEnterAngle = (event: MouseEvent, element: HTMLElement): number => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    return angle;
}
type Direction = 'top' | 'right' | 'bottom' | 'left';
/**
 * 根据坐标系角度来判断进入的方向
 * @param angle
 */
export const getDirectionByAngle = (angle: number): Direction => {
    if (angle >= -45 && angle < 45) {
        return 'right';
    } else if (angle >= 45 && angle < 135) {
        return 'bottom';
    } else if (angle >= -135 && angle < -45) {
        return 'top';
    } else {
        return 'left';
    }
}
/**
 * 获取鼠标进入的方向
 * @param dom
 * @param listener
 */
export const getMouseEnterDirection = (dom: HTMLElement, listener: (direction: Direction, event: MouseEvent) => void): () => void => {
    const callBack = (event: MouseEvent) => {
        const angle = getMouseEnterAngle(event, dom);
        const direction = getDirectionByAngle(angle);
        listener(direction, event);
    }
    if (dom && isElement(dom)) {
        dom.addEventListener('mouseenter', callBack);
    }

    return () => {
        if (dom && isElement(dom)) {
            dom.removeEventListener('mouseenter', callBack);
        }
    }
}
