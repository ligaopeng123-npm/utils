export {compose as compose} from './compose';
export {composePromises as composePromises} from './compose';
export {pipe as pipe} from './compose';
// 柯理化函数
export {default as curry} from './curry';
export {default as partial} from './partial';

export {memoized as memoized} from './memoized';
export {MemoizedFn as MemoizedFn} from './memoized';

export {asyncMemoized as asyncMemoized} from './memoized';
export {AsyncMemoizedFn as AsyncMemoizedFn} from './memoized';

/**
 * monad函数
 */
export {ResponseMonad as ResponseMonad} from './monad';

/**
 * fullscreen函数
 */
export {isFullscreen as isFullscreen} from './fullscreen';
export {fullscreen as fullscreen} from './fullscreen';
export {exitFullscreen as exitFullscreen} from './fullscreen';
export {default as autoFullscreen} from './fullscreen';
