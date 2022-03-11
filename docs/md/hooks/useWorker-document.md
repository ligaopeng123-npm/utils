

# useWorker

> 在react中使用web worker；需要 webpack5 或者 react-script5环境

## 参数

```typescript
export type UseWorkerProps = {
    worker: Worker; // Worker对象
    params?: any; // 传递的参数
};
```

## test.worker.ts

```typescript
// test.worker.ts
/* eslint-disable no-restricted-globals */
self.onmessage = (props) => {
    // @ts-ignore
    self.postMessage(`worker: ${props.data}`)
}

export {}
```

## Usage

```typescript
import React from 'react';
import {useWorker} from "@gaopeng123/hooks.useWorker";

const worker = new Worker(new URL('./test.worker.ts', import.meta.url));
type TestUseWorkerProps = {};
const TestUseWorker: React.FC<TestUseWorkerProps> = (props) => {
    const workerData: any = useWorker({worker, params: '1'});
    return (
        <React.Fragment>
            {
                workerData?.data
            }
        </React.Fragment>
    )
};

export default TestUseWorker;
```





