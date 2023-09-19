# useResize

`(props:ResizeProps):WindowSize`

>监听窗口变化，返回窗口尺寸
>
>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useresize--demo)

## 参数

```typescript
type ResizeProps = {
    wait?: number; // 等待时间
}
type WindowSize = {
    availWidth: number;
    availHeight: number;
    width: number;
    height: number;
    screenWidth: number;
    screenHeight: number;
};
```

## Usage

```tsx
import React from 'react';
import {useResize} from "gaopeng123/hooks.use-resize";

type TestUseResizeProps = {};
const TestUseResize: React.FC<TestUseResizeProps> = (props) => {
    const windowSize: any = useResize();
    const list = Object.keys(windowSize);
    return (
        <React.Fragment>
            <h3>windowSize</h3>
            {
                list.map((key, index) => {
                    const laster = list[index - 1];
                    return index % 2 ? <p>{laster}: {windowSize[laster]}, {key} : {windowSize[key]},</p> : null
                })
            }
        </React.Fragment>
    )
};

export default TestUseResize;

```

