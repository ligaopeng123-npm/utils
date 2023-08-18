/**********************************************************************
 *
 * @模块名称: event
 *
 * @模块作用: event
 *
 * @创建人: pgli
 *
 * @date: 2023/8/18 11:54 上午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 事件监听
 * @param dom
 * @param args
 */
export const on = <T extends Window | Document | HTMLElement | EventTarget>(
    dom: T | null,
    ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any[]]
): void => {
    if (dom && dom.addEventListener) {
        dom.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
}
/**
 * 事件销毁
 * @param dom
 * @param args
 */
export const off = <T extends Window | Document | HTMLElement | EventTarget>(
    dom: T | null,
    ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any[]]
): void => {
    if (dom && dom.removeEventListener) {
        dom.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
}