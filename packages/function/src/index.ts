export { compose as compose } from './compose';
export { composePromises as composePromises } from './compose';
export { pipe as pipe } from './compose';
// 柯理化函数
export { curry } from './curry';
export { partial } from './partial';
// 函数缓存
export { memoized } from './memoized';
export type { MemoizedFn } from './memoized';

export { asyncMemoized } from './memoized';
export type { AsyncMemoizedFn } from "./memoized";
/**
 * monad函数
 */
export { ResponseMonad } from './monad/ResponseMonad';
export { Monad as monad, Monad } from './monad/monad';
/**
 * fullscreen函数
 */
export { autoFullscreen, isFullscreen, fullscreen, exitFullscreen } from './fullscreen';
/**
 * 窗口尺寸
 */
export { windowSize, pcZoom } from './windowSize';
export type { WindowSize } from './windowSize';

/**
 * 去抖   createDebounce 创建去抖动函数 主要用于创建hooks
 */
export { debounce, createDebounce, debounceOptions } from "./debounce";
export type { DebounceOptions } from "./debounce";
export { throttle, createThrottle, throttleOptions } from "./throttle";
export type { ThrottleOptions } from "./throttle";

/**
 * 使函数延迟执行
 */
export { delay, asyncDelay } from "./delay";

/**
 * 操作检查
 */
export { hasOperate } from "./hasOperate";
export type { OperateConfig } from "./hasOperate";

/**
 * 缓动函数
 */
export { easingFuncs, animate } from "./easing";
export type { EasingType } from "./easing";

/**
 * 事件注册
 */
export { on, off } from "./event";