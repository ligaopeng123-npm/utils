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
export type levitatingBallConfig = {
    el: any; // 可拖拽的dom
    style?: any; // 样式
    up_down?: boolean; // 是否可以上下移动
    left_right?: boolean; // 是否可以左右移动
}

export const levitatingBall = ({
                                   el,
                                   up_down,
                                   left_right,
                                   style
                               }: levitatingBallConfig, onClick: (e: MouseEvent | TouchEvent) => void) => {
    let startEvt: string;
    let moveEvt: string;
    let endEvt: string;
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
    const dragEl = el
    dragEl.style.position = 'absolute';
    dragEl.style.cursor = 'move';
    dragEl.style.transition = 'all 0.08s';
    dragEl.style.transform = 'translate3d(-50%, -50%, 0)';
    dragEl.style['user-select'] = 'none';
    if (style) {
        for (const styleKey in style) {
            dragEl.style[styleKey] = style[styleKey];
        }
    }
    // 标记是拖曳还是点击
    let isClick = true
    let disX: number, disY: number, left: number, top: number, starX: number, starY: number

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

    function moveFun(event: any) {
        // 兼容IE浏览器
        const e = event || window.event
        // 防止触摸不灵敏，拖动距离大于20像素就认为不是点击，小于20就认为是点击跳转
        if (
            Math.abs(starX - (e.touches ? e.touches[0].clientX : e.clientX)) > 20 ||
            Math.abs(starY - (e.touches ? e.touches[0].clientY : e.clientY)) > 20
        ) {
            isClick = false
        }
        left = (e.touches ? e.touches[0].clientX : e.clientX) - disX
        top = (e.touches ? e.touches[0].clientY : e.clientY) - disY
        // 限制拖拽的X范围，不能拖出屏幕
        if (left < 0) {
            left = 0
        } else if (left > document.documentElement.clientWidth - dragEl.offsetWidth) {
            left = document.documentElement.clientWidth - dragEl.offsetWidth
        }
        // 限制拖拽的Y范围，不能拖出屏幕
        if (top < 0) {
            top = 0
        } else if (top > document.documentElement.clientHeight - dragEl.offsetHeight) {
            top = document.documentElement.clientHeight - dragEl.offsetHeight
        }
        if (up_down !== false) {
            dragEl.style.top = top + 'px'
        }

        if (left_right !== false) {
            dragEl.style.left = left + 'px'
        }
    }

    function endFun(e: any) {
        document.removeEventListener(moveEvt, moveFun)
        document.removeEventListener(endEvt, endFun)
        if (isClick) { // 点击
            onClick(e);
        }
    }
}