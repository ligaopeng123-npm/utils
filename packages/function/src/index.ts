export {compose as compose} from './compose';
export {composePromises as composePromises} from './compose';
export {pipe as pipe} from './compose';
// 柯理化函数
export {default as curry} from './curry';
export {default as partial} from './partial';
// 函数缓存
export {memoized, MemoizedFn} from './memoized';

export {asyncMemoized, AsyncMemoizedFn} from './memoized';
/**
 * monad函数
 */
export {ResponseMonad as ResponseMonad} from './monad';
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
export {default as debounce, DebounceOptions} from "./debounce";
export {default as throttle, ThrottleOptions} from "./throttle";
