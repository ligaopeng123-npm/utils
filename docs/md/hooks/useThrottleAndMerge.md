# `useThrottleAndMerge`

> TODO: 节流并且数据合并 第一次和最后一次都会触发，返回值为数组，将每一次节流数据合并到数组中去

## Usage

```tsx
import React, { useState } from 'react';
import { useThrottleAndMerge } from "../../packages/useThrottleAndMerge";

type TestUseThrottleAndMergeProps = {};
const TestUseThrottleAndMerge: React.FC<TestUseThrottleAndMergeProps> = (props) => {
    const [event, setEvent] = useState([]);
    const onClick = useThrottleAndMerge((res)=> {
        console.log(res);
        setEvent(res);
    }, 1000);
    return (
        <React.Fragment>
            <button onClick={onClick}>点击查看打印</button>
            <div>click事件长度：{event.length}</div>
        </React.Fragment>
    )
}

export default TestUseThrottleAndMerge;
```

