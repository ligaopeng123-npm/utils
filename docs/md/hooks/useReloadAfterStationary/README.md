# `useReloadAfterStationary`

> TODO: 长时间未操作 reload当前页面
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usereloadafterstationary--demo)

## Usage

```tsx
import React from 'react';
import { useReloadAfterStationary } from "../../packages/useReloadAfterStationary";

type TestUseReloadAfterStationaryProps = {};
const TestUseReloadAfterStationary: React.FC<TestUseReloadAfterStationaryProps> = (props) => {
    useReloadAfterStationary({wait: 5000, interval: 1000});
    return (
        <React.Fragment>
            {new  Date().toString()}
        </React.Fragment>
    )
}

export default TestUseReloadAfterStationary;
```
