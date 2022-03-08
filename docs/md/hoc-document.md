# 高阶函数

## DynamicLoadScript

```tsx
<DynamicLoadScript url={['/js/**.js']} onLoad={()=> {}}/>
```

## RouteWithModuleRoutes

`  动态匹配路由 模块统一放在pages目录下，并且需要配置alias为@pages`

```typescript
export declare type RouteWithModuleRoutesProps = {
    routers: any[];
    onRouteChange?: (route: RouteProps & RrefetchRoute) => void;
    isVite?: boolean; // 是否使用vite模式
}
```

```tsx
<RouteWithModuleRoutes isVite={false} routers={[]} onRouteChange={(router: RouteProps)=> {}} />
```

## RouteWithSubRoutes  

`拼接switch中的路由`

```tsx
<RouteWithModuleRoutes router={[]} />
```
## Prefetch

` 路由预加载 将传入路由文件 预先加载`

```typescript
Prefetch(routers: Array<Router>);
```
