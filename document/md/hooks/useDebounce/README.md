# `useDebounce`

> TODO: 去抖hooks  [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usedebounce--demo)

`(fn: Fn, wait = 200, options: DebounceOptions = {}, dep: Dep = []) => Fn`

```tsx
export type DebounceOptions = {
    leading: boolean; // 第一时间是否立即执行 后续在去抖
    notDebounce?: (...arg: any) => any; // 在去抖过程中 有一些非去抖处理 可以添加此参数
}
```

## Usage

```tsx
import React, {useState} from 'react';
import {useDebounce} from "@gaopeng123/hooks.use-debounce";

type TestUseDebounceProps = {};
const TestUseDebounce: React.FC<TestUseDebounceProps> = (props) => {
    const [v, setV] = useState('');
    // 
    const onChange = useDebounce((v: any) => {
        setV(v.target.value);
    })
    return (
        <React.Fragment>
            <input onChange={onChange}/>
            <br></br>输入值: {v}
        </React.Fragment>
    )
};

export default TestUseDebounce;
```
