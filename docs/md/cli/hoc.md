# 高阶函数

> react-router-dom v6版本

## 预览

```iframe
    height="300"
    width="100%"
    scrolling="no"
    title="hooks"
    src="https://ligaopeng123-npm.github.io/hoc/#/"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
    textContent="See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>."
```

## DynamicLoadScript

```tsx
<DynamicLoadScript url={['/js/**.js']} onLoad={()=> {}}/>
```

## RouteWithModuleRoutes

`  动态匹配路由 模块统一放在pages目录下，并且需要配置alias为@pages`

```typescript
export type RrefetchRoute = {
   prefetchComponent?: any; // 预加载资源
    isVite?: boolean; // 是否使用vite加载
    loading?: boolean | ReactNode; // 是否使用加载状态
    loadingColor?: string; // 加载动画颜色
    component?: any; // pc端加载组件
    mComponent?: any; // 移动端加载组件
    hideInMenu?: boolean; // 是否隐藏改菜单
}

export declare type RouteWithModuleRoutesProps = {
    routers: any[];
    onRouteChange?: (route: RouteProps & RrefetchRoute) => void;
    isVite?: boolean; // 是否使用vite模式
    loading?: boolean | ReactNode; // 是否使用loading效果  false不使用 true使用默认的 也可传递组件
    loadingColor?: string; // 加载动画颜色
    /**
     * auto 默认缓存非hideInMenu菜单级别的路由
     * force 强制缓存所有页面
     * not 不缓存页面 默认为not
     */
    keepAlive?: keepAliveType;
    // 卸载缓存的的路由  传递过来的是路由地址
    uninstallKeepAliveKeys?: Array<string>;
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

## ErrorComponents

`404错误`

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DynamicLoadScript, LoadingComponents, ErrorComponents } from '../src/.';
import { useState } from "react";

const App = () => {
    const onLoad = () => {
        console.log(111)
    }
    const [example, setExample] = useState('DynamicLoadScript');
    const examples = ['DynamicLoadScript', 'loading-component', 'error-404'];
    return (
        <div style={{display: 'flex', flexDrection: 'row'}}>
            <div style={{flex: 1,}}>
                {
                    examples.map((item) => {
                        return <div
                            style={{
                                cursor: 'pointer',
                                padding: 16,
                                color: '#0000ffc9'
                            }}
                            key={item}
                            onClick={() => {
                                setExample(item)
                            }}>{item}</div>
                    })
                }
            </div>
            <div style={{flex: 5,}}>
                {
                    (() => {
                        switch (example) {
                            case 'DynamicLoadScript':
                                return <DynamicLoadScript url={['./abc.js']} onLoad={onLoad}/>;
                            case 'loading-component':
                                return <loading-component></loading-component>;
                            case 'error-404':
                                return <error-404></error-404>;
                            default:
                                return null;
                        }
                    })()
                }
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

```

## LoadingComponents

`加载动画`

```css
:root {
  // 3条动画的颜色
  --loader-color-1: red; 
  --loader-color-2: red;
  --loader-color-3: red;
}
```

![](data:image/png;base64,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BW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAgECig4ANDNRIBAgQIEFDwdoAAAQIECAQKKPjAUI1EgAABAgQUvB0gQIAAAQKBAgo+MFQjESBAgAABBW8HCBAgQIBAoICCDwzVSAQIECBAQMHbAQIECBAg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)
