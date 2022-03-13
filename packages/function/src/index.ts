export {compose as compose} from './compose';
export {composePromises as composePromises} from './compose';
export {pipe as pipe} from './compose';
// 柯理化函数
export {default as curry} from './curry';
export {default as partial} from './partial';
// 函数缓存
export {memoized} from './memoized';
export type {MemoizedFn} from './memoized';

export {asyncMemoized} from './memoized';
export type {AsyncMemoizedFn} from "./memoized";
/**
 * monad函数
 */
export {default as ResponseMonad} from './monad/ResponseMonad';
export {default as monad} from './monad/monad';
/**
 * fullscreen函数
 */
export {default as autoFullscreen, isFullscreen, fullscreen, exitFullscreen} from './fullscreen';
/**
 * 窗口尺寸
 */
export {default as windowSize, WindowSize} from './windowSize';

/**
 * 去抖
 */
export {default as debounce} from "./debounce";
export type {DebounceOptions} from "./debounce";
export {default as throttle} from "./throttle";
export type {ThrottleOptions} from "./throttle";

/**
 * 使函数延迟执行
 */
export {delay, asyncDelay} from "./delay";