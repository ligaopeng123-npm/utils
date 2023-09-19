# `Throttle And Merge`

> TODO: 节流并且数据合并 第一次和最后一次都会触发，返回值为数组，将每一次节流数据合并到数组中去
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usethrottleandmerge--demo)

## useThrottleAndMerge

`TODO: 单次事件源合并`

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

## useThrottleAndMergeFns

`合并多个事件源`

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { useThrottleAndMergeFns } from "../../packages/useThrottleAndMerge/src";

type TestUseThrottleAndMergeFnsProps = {};
const TestUseThrottleAndMergeFns: React.FC<TestUseThrottleAndMergeFnsProps> = (props) => {
    const ref = useRef({a: 0, b: 0});
    const [events, setEvents] = useState<any>(ref.current);
		// 事件源基于key来区分；
  	// 例如：a函数接受事件a，b函数接受事件b
    const {a: onClick1, b: onClick2} = useThrottleAndMergeFns({a: (res: any)=> {
            ref.current.a = ref.current.a + res.length;
            setEvents(Object.assign({}, ref.current));
            console.log(22)
        }, b: (res: any)=> {
            ref.current.b = ref.current.b + res.length;
            setEvents(Object.assign({}, ref.current));
        }}, 1000);

    useEffect(()=> {
        const bth: any = document.querySelector('#TestUseThrottleAndMerge-test1')
        const bth2: any = document.querySelector('#TestUseThrottleAndMerge-test2')
        const loop = ()=> {
            setTimeout(()=> {
                // @ts-ignore
                bth.click();
                setTimeout(()=> {
                    // @ts-ignore
                    bth2.click();
                }, Math.random() * 10)
                loop();
            }, Math.random() * 100)
        }
        // loop();
    }, []);

    return (
        <>
            useThrottleAndMergeFns <br/>
            <button id={'TestUseThrottleAndMerge-test1'} onClick={onClick1}>点击查看打印a</button><br/>
            <button id={'TestUseThrottleAndMerge-test2'} onClick={onClick2}>点击查看打印b</button>
            <br/>
            <div>clicka总次数：{events.a}</div>
            <div>clickb总次数：{events.b}</div>
        </>
    )
}

export default TestUseThrottleAndMergeFns;
```

