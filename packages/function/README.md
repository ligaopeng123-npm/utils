# function

## 缓存函数

#### memoized: (...arg: any): Array<any>  

`缓存函数返回值，fn可为多参函数，但第一个参数会作为缓存对象的key`

```typescript
const fn= (x,y)=> x * y;
const cacheFn = memoized(fn);
cacheFn(4,2); // [4, {4: 8}]
```

#### asyncMemoized:  (arg: string): Promise<Array<any>>

`缓存异步函数的返回值，fn可为多参async函数，但第一个参数会作为缓存对象的key`

```typescript
/**
 * 获取本地json数据
 * @param path
 */
export const loadLocalJson = asyncMemoized(async (path: string) => {
	const res = await fetch(path);
	const json = await res.clone().json();
	return json;
});

export const menuData = loadLocalJson('/json/menus.json');
```

## monad

#### ResponseMonad

`Response响应值处理`

```typescript
ResponseMonad.of({
	states: 200,
	data: {
		code: '',
		data: null, message: ''
	},
	message: ''
}).effect((data) => {// 返回 true获false 结果为正确是返回
	return data.states === 200;
})
    .map((v) => v.data)
    .map((v) => v.data)
    .map((v) => v.data)
    .map((v) => v.data)
    .chain((d) => {
	console.log('d', d);
})
 // 捕获异常错误type为0时为 effect结果不满足报错  type为1是为map解构出错
    .catch((type, msg) => {
	console.log('e', e, msg);
})
```

## curry

#### curry:(fn: Curry)

`将函数转为柯理化函数`

```typescript
type Curry = (...args: Array<any>) => any;
curry((args1)=> {return (args2)=> args1 + args2);
// demo
const add = (a: number, b: number) => {
  return a + b;
}

expect(curry(add)(1)(2)).toEqual(3);
```

#### currySuper <span class="new">New 1.1.6+</span>

`将函数转为柯理化函数,参数的个数无需关注，支持任意个数`

```typescript
expect(currySuper(add, 0)(1)(3, 2, 15, 3).value).toEqual(24);
```

#### partial

`将函数转换为偏应用函数`

```typescript
const afterTenSeconds = partial(setTimeout, undefined, 10);

afterTenSeconds(() => {
	console.log(`10秒后打印`)
});
```



## compose

#### compose

`合并函数`

```typescript
compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // a(b(c()));
```

#### pipe

`合并函数`

```typescript
compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // c(b(a()));
```

#### composePromises：(promises: Promises, initialValue?: any): Promise<void>

`合并promise，将上一次的结果，作为下一个promise的参数`

```typescript
const p1 = async (t) => {
	console.log(t); // 8
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(t + 1);
		}, 1000)
	});
};


const p2 = async (t) => {
	console.log(t); // 9
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(t + 1);
		}, 1000)
	});
};


composePromises([p1, p2], 8).then((res) => {
	console.log('res', res); // res 10
})
```

## fullscreen

#### fullscreen: (el: Element,options: FullscreenOptions): Promise<any>

`进入全屏`

```typescript
fullscreen(document.getElementById(''))
```

#### exitFullscreen: ():Promise<any>

`退出全屏`

```typescript
exitFullscreen()
```

#### autoFullscreen:(el: Element, options: FullscreenOptions, callBack: (args: AutoFullscreenCallBack) => void):Promise<any>

`如果非全屏模式，则进入全屏，如果是全屏状态，则退出全屏`

```typescript
autoFullscreen(document.getElementById(''), null, ({type})=> {
    //fullscreen 进入全屏
	//noFullscreen 退出全屏
})
```

#### isFullscreen: ():boolean

`判断是否是全屏状态`

```typescript
isFullscreen(); // true or false
```

#### windowSize(): WindowSize

`窗口尺寸`

```typescript
type WindowSize = {
	availWidth: number; // 可视化宽度
	availHeight: number; // 可视化高度
	width: number; // 浏览器宽度
	height: number; // 浏览器宽度
	screenWidth: number; // 分辨率宽度
	screenHeight: number; // 分辨率高度
}
windowSize(); //
```

## debounce/throttle

#### debounce

`函数防抖`

```typescript
type DebounceOptions = {
     // 第一时间是否立即执行 后续在去抖  默认为false
	leading: boolean;
    // 在去抖过程中 有一些非去抖处理 可以添加此参数
	notDebounce?: (...arg: any) => any; 
}

debounce(()=> {
    // 200ms的防抖
}, 200, {notDebounce:()=> {
	// 无防抖
}});
```

#### throttle

`函数节流`

```typescript
export type ThrottleOptions = {
    /**
     * 1 时间戳记录 2 setTimeout版本
     * 时间戳版本第一次会执行 leading为true  setTimeout 尾部会执行一次 trailing为true
     */
    type?: 1 | 2;
    leading?: boolean; // 第一时间是否立即调用 后续在节流  type为1
    trailing?: boolean; // 为true时 表示停止后会触发一次回调，传递最后一次的参数  type为 2
    notThrottle?: (...arg: any) => any; // 在去抖过程中 有一些非去抖处理 可以添加此参数
    clearTimeout?: (val: any) => any; // 清理时间参数 为hooks预留接口
}
throttle(()=> {}, 200, {type: 1});
```
## delay

#### delay

`函数延迟执行`

```typescript
// 第一次参数是个函数，第二个参数是延迟时间 第三个参数是传给函数的参数
delay((...args)=> {}, 200, [1,2,3]);
```

#### asyncDelay

`延迟异步函数执行`

```typescript
// 第一个参数是个promise
// 第二个参数是延迟时间
// 第三个参数是传递给promise的参数
asyncDelay(async (...args)=> {}, 200, [1,2,3])
```

#### sleep <span class="new">New 1.1.6+</span>

`休眠执行`

```typescript
async function() {
  console.log(Date.now());
  await sleep(2000);
  console.log(Date.now());
}
```

## operate

#### hasOperate

`监听是否长时间未操作dom`

```typescript
type OperateConfig = {
    wait?: number,  // 多长时间未操作，到期触发callBack 默认一个小时  单位 毫秒
    interval?: number // 每隔多长时间检测一次 默认1分钟 单位 毫秒
}
hasOperate(()=> {}, {wait: 5000, interval: 1000});
```

## retry

#### retry

`promise 重试`

```typescript
export type RetryConfig = {
    max?: number; // 重试次数默认 3
    timeout?: number; // 延时时间 默认 0
}
type Retry = (fn: any, config?: RetryConfig) => Promise<unknown>;
```

```typescript
const testFn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('res');
        }, 1000);
    })
}

retry(testFn, { timeout: 3000, max: 3 }).then((res) => {
    console.log(3, res);
}).catch((err) => {
    console.log(2, err);
});
```

## task

#### promiseScheduler <span class="new">New 1.1.7+</span>

`promise 调度器，管理并发`

```
/**
 * 并行执行promise 根据配置设置最大并行数，并将结果组装返回
 * @param promises
 * @param opts:{
 *   concurrency: number,  // 最大并行数
 *   callback?: (result: unknown, index: number) => unknown // 回调函数
 * }
 */
 promiseScheduler(promises: Array<() => Promise<unknown>>, opts?: { concurrency: number, callback?: (result: unknown, index: number) => unknown });
```

#### PromiseTasks<span class="new"> New 1.1.17+</span> 

```typescript
const test = () => {
  if (i % 3 === 0) {
    return 'fn +' + i;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success:' + Math.random() * 1000);
    }, Math.random() * 100 * (i + 1));
  });
};

const task = new promiseTasks(5);
for (let i = 0; i < 10; i++) {
  task.addTask(test).then(res => {
  });
}
task.on('end', (res: Array<unknown>)=> {
  expect(res.length).toEqual(10)
});

// 或者
const task = new promiseTasks(5);
task.on('end', (res: Array<unknown>)=> {
  expect(res.length).toEqual(100)
})
task.all(new Array(100).fill(0).map(_=>test));

```

#### FreeTasks<span class="new"> New 1.1.17+</span>

`空闲时间执行, 避免阻塞`

```typescript
const task = new freeTasks()

for (let index = 0; index < 100000; index++) {
  const i = index;
  task.addTask(() => createDom(index));
}
```

#### AsyncToSync<span class="new"> New 1.1.17+</span>

`消除异步传染性，异步代码同步写法`

```typescript
const asyncToSync = new AsyncToSync();

const fetchData = (n: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n)
    }, n * 100);
  })
}

const test = () => {
  const data = asyncToSync.use(fetchData(3));
  const data2 = asyncToSync.use(fetchData(1));
  const data3 = asyncToSync.use(fetchData(2));
  expect(data).toEqual(3);
  expect(data2).toEqual(1);
  expect(data3).toEqual(2);
}

asyncToSync.run(test);
```



## easing

#### easingFuncs

`常用的缓动函数`

```typescript
type EasingType = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut'
    | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut'
    | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut'
    | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut'
    | 'circularIn' | 'circularOut' | 'circularInOut' | 'elasticIn' | 'elasticOut'
    | 'elasticInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut'
    | 'bounceInOut';

easingFuncs.linear(x); // number
```

#### animate

`创建一个js动画`

```typescript
/**
 * 添加动画能力
 **/
type AnimateConfig = {
    duration?: number; // 执行时长 默认1000ms
    easing?: EasingType | any; // 动画类型
    afterAnimate: ()=> void; // 动画执行完成后回调
}

type AnimateFnReturn = {
    clear: ()=> void;
}
// v为从0到1的值
animate(callBack: (v: number)=> void, config: AnimateConfig): AnimateFnReturn;
```

## overload

#### addMethod

`jQuery中重栽函数的实现`

```
const testObj: any = {};

addMethod(testObj, 'fn', ()=> {
    console.log('没有参数')
})

addMethod(testObj, 'fn', (str: number)=> {
    console.log('一个参数')
})

addMethod(testObj, 'fn', (str1: number, str2: number)=> {
    console.log('2个参数')
})

testObj.fn()
testObj.fn(1)
testObj.fn(1, 2)
```

#### createOverload

`创建重栽函数`

```typescript
const overload = createOverload();


overload.addMethod(null, ()=> {
    console.log('没有参数')
})

overload.addMethod('string', (str: string)=> {
    console.log('string')
})

overload.addMethod('number', 'number', (num: number)=> {
    console.log('number')
})

overload()
overload('12')
overload(1, 2)
```

## event

#### on

`添加事件`

```typescript
const onClick = ()=> {};
on(dom, 'click', onClick);
```

#### off

```typescript
off(dom, 'click', onClick);
```

