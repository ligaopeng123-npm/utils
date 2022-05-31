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
    loading?: boolean | ReactNode; // 是否使用loading效果  false不使用 true使用默认的 也可传递组件
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

## HistoryRouter

`包裹路由，传递history，处理react-route v6路由外跳转`

```tsx
<HistoryRouter history={BrowserHistory}>
    <Routes>
        {/*登录页*/}
        <Route path="/login" element={<UserLayout/>}/>
        {/*404*/}
        <Route path="/404" element={<div>404</div>}/>
        {/*业务业务*/}
        <Route path="*" element={<BasicLayout/>}/>
    </Routes>
</HistoryRouter>
```

## changeRouteTitle

`根据路由配置 更改document title`

```tsx
changeRouteTitle([{name: '登录', path: '/login'}, {name: '404', path: '/404'}], '某某管理系统');
```


