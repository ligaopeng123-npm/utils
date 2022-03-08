# useScale

`(props?: ScaleProps):{x: number,y:number}`

`监听窗口变化，动态缩放当前dom`

## 参数

```typescript
type ScaleProps = {
    scaleDom?: any; // 缩放的dom 如果不传 默认为body
    width?: number; // 理想宽
    height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放
};
const scale = useScale({width: 1920, height: 1080});
```

## Usage

```tsx
import React, {useEffect} from 'react';
import {useScale} from "@gaopeng123/hooks.use-scale";

type TestUseScaleProps = {};
const TestUseScale: React.FC<TestUseScaleProps> = (props) => {
    const scale = useScale({width: 1920, height: 1080});
    useEffect(() => {
        return () => {
            // @ts-ignore
            const body = document.querySelector('body');
            if (body) {
                body.style.transform = `scale(${1}, ${1})`;
            }
        }
    }, []);
    return (
        <React.Fragment>
            <h3>useScale</h3>
            scale: {
            JSON.stringify(scale, null, 2)
        }
        </React.Fragment>
    )
};

export default TestUseScale;
```

