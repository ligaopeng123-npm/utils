# RcLoading

`进度loading`[在线demo](https://ligaopeng123-npm.github.io/web-components-repo/?path=/docs/example-rcloading--props)

## 参数

```tsx
// --loading-main-color  css变量 定义颜色
export interface RcLoadingProps {
    loading?: boolean; // 是否开启
    duration?: number; // 默认 60000ms
}
```

## demo

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RcLoading } from "../src";
import { useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <button onClick={()=> setLoading(!loading)}>loading</button>
            <RcLoading loading={loading} type={1}>
                <div style={{width: 500, height: 700}}>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                </div>
            </RcLoading>
        
        		<RcLoading1 loading={loading} type={1}>
                <div style={{width: 500, height: 700}}>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                </div>
            </RcLoading1>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
```

## RcSuperLoading

`参数`

```typescript
export type SingleLoadingStep = {
    label: string;
    step?: number;
}
export type RcLoadingProps = {
    stepList?: Array<SingleLoadingStep>, // 进度自定义
    title?: string | ReactNode; // 正在查询
    subTitle?: string | ReactNode; // 查询进度
    onStepChange?: (v: SingleLoadingStep)=> void; // 是否开启
    loading?: boolean; // 是否开启
    duration?: number; // 默认 60000ms
    style?: React.CSSProperties;
    className?: string | undefined;
    wrapperClassName?: string;
}
```

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RcSuperLoading } from "../src";
import { useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <button onClick={()=> setLoading(!loading)}>loading</button>
            <RcSuperLoading loading={loading} duration={20000}>
                <div style={{width: 500, height: 700}}>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                    <div>1212</div>
                </div>
            </RcSuperLoading>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
```





