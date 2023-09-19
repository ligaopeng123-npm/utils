# `useThrottle`

> TODO: 节流hooks
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usethrottle--demo)

`(fn: Fn, wait: number = 200, options: ThrottleOptions = {}, dep: any[] = []): Fn`

```tsx
export type ThrottleOptions = {
    type?: 1 | 2; // 1 时间戳记录 2 setTimeout版本
    leading?: boolean; // 第一时间是否立即调用 后续在节流
}
```

## Usage

```
import React, {useState, useEffect} from 'react';
import {useThrottle} from "@gaopeng123/hooks.use-throttle";

type TestUseThrottleProps = {};
const TestUseThrottle: React.FC<TestUseThrottleProps> = (props) => {
    const [v, setV] = useState('');
    const onChange = useThrottle((v: any) => {
        setV(v.target.value);
    }, 500);
    return (
        <React.Fragment>
            <input onChange={onChange}/>
            <br></br>输入值: {v}
        </React.Fragment>
    )
};

export default TestUseThrottle;

```
