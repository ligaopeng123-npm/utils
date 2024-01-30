/**********************************************************************
 *
 * @模块名称: fullscreen
 *
 * @模块用途: fullscreen  全屏处理函数
 *
 * @date: 2021/8/25 10:49
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isFunction, isUndefined} from "@gaopeng123/utils.types";

export enum TypeEnum {
    fullscreen = 'fullscreen',
    noFullscreen = 'noFullscreen',
}

export type FullscreenOptions = {
    navigationUI?: string;
}

/**
 * 判断是否全屏
 */
export const isFullscreen = (): boolean => {
    // @ts-ignore
    return document.fullscreenElement ||
        // @ts-ignore
        document.msFullscreenElement ||
        // @ts-ignore
        document.mozFullScreenElement ||
        // @ts-ignore
        document.webkitFullscreenElement || false;
};
/**
 * 进入全屏
 * @param el
 */
export let fullscreen = (el: any, options: FullscreenOptions): Promise<any> => {
    if (el.requestFullscreen) {
        fullscreen = (el, options) => el.requestFullscreen(options);
    } else if (el.webkitRequestFullScreen) {
        fullscreen = (el, options) => el.webkitRequestFullScreen(options);
    } else if (el.mozRequestFullScreen) {
        fullscreen = (el, options) => el.mozRequestFullScreen(options);
    } else {
        fullscreen = (el, options) => el.msRequestFullscreen(options);
    }
    return fullscreen(el, options);
};
/**
 * 退出全屏
 * @param el
 */
export let exitFullscreen = (): Promise<any> => {
    if (document.exitFullscreen) {
        exitFullscreen = () => document.exitFullscreen();
        // @ts-ignore
    } else if (document.webkitExitFullscreen) {
        // @ts-ignore
        exitFullscreen = () => document.webkitExitFullscreen();
        // @ts-ignore
    } else if (document.mozCancelFullScreen) {
        // @ts-ignore
        exitFullscreen = () => document.mozCancelFullScreen();
    } else {
        // @ts-ignore
        exitFullscreen = () => document.msExitFullscreen();
    }
    return exitFullscreen();
};

export type AutoFullscreenCallBack = {
    type: TypeEnum
}
/**
 * 自使用全屏
 * @param el
 */
export const autoFullscreen = async (el: Element, options: FullscreenOptions, callBack: (args: AutoFullscreenCallBack) => void): Promise<any> => {
    if (isFullscreen()) {
        const state = await exitFullscreen();
        isUndefined(state) && isFunction(callBack) && callBack({type: TypeEnum.noFullscreen});
        return state;
    }
    const state = await fullscreen(el, options);
    isUndefined(state) && isFunction(callBack) && callBack({type: TypeEnum.fullscreen});
    return state;
};
