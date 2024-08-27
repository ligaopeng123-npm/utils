/**********************************************************************
 *
 * @模块名称: levitatingBall
 *
 * @模块作用: levitatingBall 悬浮球
 *
 * @创建人: pgli
 *
 * @date: 2023/1/11 1:37 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isJSON, isString } from "@gaopeng123/utils.types";
import { debounce } from "@gaopeng123/utils.function";

export type levitatingBallConfig = {
    el: any; // 可拖拽的dom 或者 selectors
    style?: any; // 样式
    up_down?: boolean; // 是否可以上下移动
    left_right?: boolean; // 是否可以左右移动
    minTop?: number; // 上边距
    minBottom?: number; // 下边距
    minLeft?: number; // 左边距
    minRight?: number; // 右边距
    persistenceKey?: string; // 行为定制
    persistenceType?: 'sessionStorage' | 'localStorage'; // 存储类型
}

export const levitatingBall = (config: levitatingBallConfig, onClick?: (e: MouseEvent | TouchEvent) => void) => {
    const {
        el,
        up_down,
        left_right,
        style,
        minTop,
        minBottom,
        minLeft,
        minRight,
        persistenceKey,
        persistenceType,
    } = Object.assign({minTop: 0, minBottom: 0, minLeft: 0, minRight: 0}, config);
    if (el) {
        let startEvt: string;
        let moveEvt: string;
        let endEvt: string;
        const _persistenceType = persistenceType || 'sessionStorage';
        // 判断是否支持触摸事件
        if ('ontouchstart' in window) {
            startEvt = 'touchstart'
            moveEvt = 'touchmove'
            endEvt = 'touchend'
        } else {
            startEvt = 'mousedown'
            moveEvt = 'mousemove'
            endEvt = 'mouseup'
        }
        // 获取元素
        const dragEl = isString(el) ? document.querySelector(el) : el;
        dragEl.style.position = 'fixed';
        dragEl.style.cursor = 'move';
        dragEl.style.transition = 'all 0.08s';
        dragEl.style['user-select'] = 'none';
        if (style) {
            for (const styleKey in style) {
                dragEl.style[styleKey] = style[styleKey];
            }
        }
        /**
         * 定制数据获取
         */
        if (persistenceKey) {
            const cacheConfig = window[_persistenceType].getItem(persistenceKey);
            if (cacheConfig && isJSON(cacheConfig)) {
                const {left, top} = JSON.parse(cacheConfig);
                dragEl.style.top = `${top}px`;
                dragEl.style.left = `${left}px`;
            }
        }
        // 标记是拖曳还是点击
        let isClick = true
        let disX: number, disY: number, left: number, top: number, starX: number, starY: number;

        const moving = (event: any) => {
            // 兼容IE浏览器
            const e = event || window.event
            // 防止触摸不灵敏，拖动距离大于20像素就认为不是点击，小于20就认为是click
            if (
                Math.abs(starX - (e.touches ? e.touches[0].clientX : e.clientX)) > 20 ||
                Math.abs(starY - (e.touches ? e.touches[0].clientY : e.clientY)) > 20
            ) {
                isClick = false
            }
            left = (e.touches ? e.touches[0].clientX : e.clientX) - disX
            top = (e.touches ? e.touches[0].clientY : e.clientY) - disY
            // 限制拖拽的X范围，不能拖出屏幕
            if (left < minLeft) {
                left = minLeft;
            } else if (left > document.documentElement.clientWidth - dragEl.offsetWidth - minRight) {
                left = document.documentElement.clientWidth - dragEl.offsetWidth - minRight;
            }

            // 限制拖拽的Y范围，不能拖出屏幕
            if (top < minTop) {
                top = minTop;
            } else if (top > document.documentElement.clientHeight - dragEl.offsetHeight - minBottom) {
                top = document.documentElement.clientHeight - dragEl.offsetHeight - minBottom;
            }

            if (up_down !== false) {
                dragEl.style.top = top + 'px'
            }

            if (left_right !== false) {
                dragEl.style.left = left + 'px'
            }
        }

        const moveFun = debounce((event: Event) => {
            /**
             * 定制数据存储
             */
            if (persistenceKey) {
                window[_persistenceType].setItem(persistenceKey, JSON.stringify({left, top}));
            }
        }, 200, {notDebounce: moving})

        dragEl.addEventListener(startEvt, function (event: any) {
            // 阻止页面的滚动，缩放
            event.preventDefault();
            // 兼容IE浏览器
            const e = event || window.event
            isClick = true
            // 手指按下时的坐标
            starX = e.touches ? e.touches[0].clientX : e.clientX
            starY = e.touches ? e.touches[0].clientY : e.clientY
            // 手指相对于拖动元素左上角的位置
            disX = starX - dragEl.offsetLeft
            disY = starY - dragEl.offsetTop
            // 按下之后才监听后续事件
            document.addEventListener(moveEvt, moveFun)
            document.addEventListener(endEvt, endFun)
        })
        /**
         * 结束事件 清理事件 如果当前状态是点击 则触发点击事件
         * @param e
         */
        const endFun = (e: any) => {
            document.removeEventListener(moveEvt, moveFun)
            document.removeEventListener(endEvt, endFun)
            if (isClick) { // 点击
                onClick?.(e);
            }
        }
        return {
            /**
             * 清理订阅事件
             */
            removeEventListener: () => {
                document.removeEventListener(moveEvt, moveFun);
                document.removeEventListener(endEvt, endFun);
            }
        }
    }
    return {
        /**
         * 清理订阅事件 避免el不存在返回空执行报错
         */
        removeEventListener: () => {
        }
    }
}