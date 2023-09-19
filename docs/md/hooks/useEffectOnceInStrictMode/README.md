# useEffectOnceInStrictMode

>处理react18某些场景下，需要屏蔽掉StrictMode模式下执行俩次的场景，保证开发环境和生产环境只执行一次，并兼容react17
>
>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useeffectonceinstrictmode--demo)

## Usage

```tsx
useEffectOnceInStrictMode(()=> {}, []);
```



