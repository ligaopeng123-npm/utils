# `use-visibility`

> TODO: 返回页面的隐藏和唤醒状态
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usevisibility--demo)

## Usage

```tsx
import React from 'react';
import { useVisibility } from "@gaopeng123/hooks.useVisibility";

type TestUseVisibilityProps = {};
const TestUseVisibility: React.FC<TestUseVisibilityProps> = (props) => {
    const visibility = useVisibility({
        wait: 500,
        onVisibilitychange: (v) => {
            console.log(visibility, v);
        }
    });
    return (
        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>
            <h3>useVisibility</h3>
            visibility: {
            visibility
        }
        </div>
    )
};

export default TestUseVisibility;
```
