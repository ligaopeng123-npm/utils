# function

## 缓存函数

##### memoized: (...arg: any): Array<any>  

`缓存函数返回值，fn可为多参函数，但第一个参数会作为缓存对象的key`

```typescript
const fn= (x,y)=> x * y;
const cacheFn = memoized(fn);
cacheFn(4,2); // [4, {4: 8}]
```

##### asyncMemoized:  (arg: string): Promise<Array<any>>

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

##### ResponseMonad

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

##### curry:(fn: Curry)

`将函数转为柯理化函数`

```typescript
type Curry = (...args: Array<any>) => any;
curry((args1)=> {return (args2)=> args1 + args2);
```

##### partial

`将函数转换为偏应用函数`

```typescript
const afterTenSeconds = partial(setTimeout, undefined, 10);

afterTenSeconds(() => {
	console.log(`10秒后打印`)
});
```



## compose

##### compose

`合并函数`

```typescript
compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // a(b(c()));
```

##### pipe

`合并函数`

```typescript
compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // c(b(a()));
```

##### composePromises：(promises: Promises, initialValue?: any): Promise<void>

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

##### fullscreen: (el: Element,options: FullscreenOptions): Promise<any>

`进入全屏`

```typescript
fullscreen(document.getElementById(''))
```

##### exitFullscreen: ():Promise<any>

`退出全屏`

```typescript
exitFullscreen()
```

##### autoFullscreen:(el: Element, options: FullscreenOptions, callBack: (args: AutoFullscreenCallBack) => void):Promise<any>

`如果非全屏模式，则进入全屏，如果是全屏状态，则退出全屏`

```typescript
autoFullscreen(document.getElementById(''), null, ({type})=> {
    //fullscreen 进入全屏
	//noFullscreen 退出全屏
})
```

##### isFullscreen: ():boolean

`判断是否是全屏状态`

```typescript
isFullscreen(); // true or false
```

##### windowSize(): WindowSize

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

##### debounce

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

##### throttle

`函数节流`

```typescript
type ThrottleOptions = {
	type: 1 | 2; // 1 时间戳记录 2 setTimeout版本 默认为1

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

