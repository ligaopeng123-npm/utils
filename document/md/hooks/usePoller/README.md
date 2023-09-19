# usePoller

`(props: PollerProps): [number, () => void, () => void]`

>轮询器,包括同步轮询，异步轮询
>
>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usepoller--demo)

## 参数

```typescript
type PollerMark = {
    states: string | number;
    props?: any; // 上次callBack、asyncCallBack返回的结果
    time: number; // 执行时间
    startStamp: number; // 轮询开始时间
    currentStamp: number; // 当前时刻
    endStamp: number; // 轮询结束时间
}

type PollerProps = {
    delay?: number; // 执行时间
    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行
    callBack?: (args: PollerMark) => void; // 执行回调
    asyncCallBack?: (args: PollerMark) => Promise<any>; // 异步回调器
}
```

> [!WARNING]
> **此处需要注意，调用轮询器stopPoller后需要return，才能停止**

```typescript
// 同步轮询
const [time, startPoller, stopPoller] = usePoller({
    delay: 5000, callBack: (params: PollerMark) => {
        if (params.time > 10000) {
            stopPoller();
            return;// TODO 此处需要return; 否则无法停止
        }
    }
});

```

```typescript
// 异步轮询
const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
    delay: 5000,
    asyncCallBack: async (params) => {
        // 满足条件时 停止计时器 return即可
        if (params.time > 10000) {
            stopAsyncPoller();
            return; // TODO 此处需要return; 否则无法停止
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`我是参数: ${Date.now()}`)
            }, 2000)
        });
    }
});
```

## Usage

```tsx
import React, {useEffect} from 'react';
import {usePoller} from "@gaopeng123/hooks.use-poller";

type TestUsePollerProps = {};
const TestUsePoller: React.FC<TestUsePollerProps> = (props) => {
	const [time, startPoller, stopPoller] = usePoller({delay: 1200});
	const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
		delay: 1200,
		immediate: false,
		asyncCallBack: async (params) => {
			console.log('params', params);
			if (params.time > 10000) {
				stopAsyncPoller();
				return;
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(`我是参数: ${Date.now()}`)
				}, 2000)
			});
		}
	});

	useEffect(() => {
		setTimeout(() => {
			startAsyncPoller();
		}, 2000);

		setTimeout(() => {
			stopPoller();
			setTimeout(() => {
				startPoller();
			}, 2000)
		}, 10009);
	}, []);
	return (
		<React.Fragment>
			<h3>usePoller</h3>
			{
				time
			}
			<h3>异步usePoller</h3>
			{
				asyncTime
			}
		</React.Fragment>
	)
};

export default TestUsePoller;

```

