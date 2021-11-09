<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [工具函数](#%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0)
  - [types](#types)
      - [date](#date)
      - [browser](#browser)
      - [browser version](#browser-version)
  - [object](#object)
    - [clone](#clone)
      - [clone: <T>(val: T): T](#clone-tval-t-t)
      - [cloneAllObject: <T>(val: T): T](#cloneallobject-tval-t-t)
      - [cloneAllArray: <T>(val: T): T](#cloneallarray-tval-t-t)
      - [cloneAllItem: <T>(val: T): T](#cloneallitem-tval-t-t)
    - [assign](#assign)
      - [assignIf:(target: any, source: any): any](#assigniftarget-any-source-any-any)
      - [assignDeep:(target: any, source: any): any](#assigndeeptarget-any-source-any-any)
      - [assignDeepMergeArray:(target: any, source: any): any](#assigndeepmergearraytarget-any-source-any-any)
      - [assignDeepNotIncludedArray:(target: any, source: any): any](#assigndeepnotincludedarraytarget-any-source-any-any)
    - [other](#other)
      - [length:(val: any): number](#lengthval-any-number)
      - [mousePosition:(event: any): {x:number,y:number}](#mousepositionevent-any-xnumberynumber)
      - [getStyle: (el, styleName)](#getstyle-el-stylename)
      - [parentByExpected: (dom, expected): parent](#parentbyexpected-dom-expected-parent)
      - [copyText: (dom)](#copytext-dom)
  - [function](#function)
    - [缓存函数](#%E7%BC%93%E5%AD%98%E5%87%BD%E6%95%B0)
      - [memoized: (...arg: any): Array<any>](#memoized-arg-any-arrayany)
      - [asyncMemoized:  (arg: string): Promise<Array<any>>](#asyncmemoized--arg-string-promisearrayany)
    - [monad](#monad)
      - [ResponseMonad](#responsemonad)
    - [curry](#curry)
      - [curry:(fn: Curry)](#curryfn-curry)
      - [partial](#partial)
    - [compose](#compose)
      - [compose](#compose-1)
      - [pipe](#pipe)
      - [composePromises：(promises: Promises, initialValue?: any): Promise<void>](#composepromisespromises-promises-initialvalue-any-promisevoid)
    - [fullscreen](#fullscreen)
      - [fullscreen: (el: Element,options: FullscreenOptions): Promise<any>](#fullscreen-el-elementoptions-fullscreenoptions-promiseany)
      - [exitFullscreen: ():Promise<any>](#exitfullscreen-promiseany)
      - [autoFullscreen:(el: Element, options: FullscreenOptions, callBack: (args: AutoFullscreenCallBack) => void):Promise<any>](#autofullscreenel-element-options-fullscreenoptions-callback-args-autofullscreencallback--voidpromiseany)
      - [isFullscreen: ():boolean](#isfullscreen-boolean)
      - [windowSize(): WindowSize](#windowsize-windowsize)
    - [debounce/throttle](#debouncethrottle)
      - [debounce](#debounce)
      - [throttle](#throttle)
  - [file](#file)
      - [urlJoinParmas: (parmas?: urlJoinParmasPatams): string](#urljoinparmas-parmas-urljoinparmaspatams-string)
      - [removeUrlParams:(url: string): string](#removeurlparamsurl-string-string)
      - [routeFromUri:(url: string): string;](#routefromuriurl-string-string)
      - [removeEmptyParams](#removeemptyparams)
      - [makeParamsProper:(params): any;](#makeparamsproperparams-any)
      - [queryParamsFromUrl:(url: string): object](#queryparamsfromurlurl-string-object)
      - [download: ({url, fileName, blob, parmas}: downloadParams): void \| Error](#download-url-filename-blob-parmas-downloadparams-void-%5C-error)
      - [downloadStream:({url, options, fileName}: downloadStreamParams): void](#downloadstreamurl-options-filename-downloadstreamparams-void)
      - [dowmloadScreenshotPicture: (dom, options)](#dowmloadscreenshotpicture-dom-options)
      - [imageFromFile:(file: File): string](#imagefromfilefile-file-string)
      - [imageToBase64: (opt: ImageToBase64Props): string](#imagetobase64-opt-imagetobase64props-string)
      - [mapObject: (obj, callBack: ObjectCallBack) => any;](#mapobject-obj-callback-objectcallback--any)
      - [filterObject: (obj, callBack: FilterObjectCallBack) => any;](#filterobject-obj-callback-filterobjectcallback--any)
      - [forEachObject: (obj, callBack: ObjectCallBack) => any;](#foreachobject-obj-callback-objectcallback--any)
  - [String](#string)
      - [uuid:(len?: number, radix?: number) => string;](#uuidlen-number-radix-number--string)
      - [formatStr:(...args: any) => string](#formatstrargs-any--string)
      - [ellipsps: (text: string, width: number = 100, size: number = 12, font: string = 'Arial'): string;](#ellipsps-text-string-width-number--100-size-number--12-font-string--arial-string)
      - [strWidth:(ctx: any, text: string, fontSize: number = 12, fontFamily: string = 'Arial')](#strwidthctx-any-text-string-fontsize-number--12-fontfamily-string--arial)
    - [path](#path)
      - [pathJoin:(...args): string](#pathjoinargs-string)
    - [extractEnclosedContent](#extractenclosedcontent)
      - [extractEnclosedContent: (str: string, startStr: string, endStr: string): Array<string>](#extractenclosedcontent-str-string-startstr-string-endstr-string-arraystring)
      - [extractParenthesesContent:(str:string):Array<string>](#extractparenthesescontentstrstringarraystring)
      - [extractMiddleParenthesesContent(str:string):Array<string>](#extractmiddleparenthesescontentstrstringarraystring)
      - [extractBigParenthesesContent(str:string):Array<string>](#extractbigparenthesescontentstrstringarraystring)
    - [regexp](#regexp)
      - [IPV4](#ipv4)
      - [PHONE_NUMBER](#phone_number)
    - [color](#color)
      - [addOpacity](#addopacity)
      - [hex2Rgb](#hex2rgb)
      - [rgb2hex](#rgb2hex)
      - [rgba2hex](#rgba2hex)
      - [rgba2rgb](#rgba2rgb)
  - [number](#number)
      - [randomInt: (min?: number, max?: number): number](#randomint-min-number-max-number-number)
      - [toThousands:(val: string | number, digit: number = 0): string](#tothousandsval-string--number-digit-number--0-string)
      - [bitUpgrade: (n:number, opt: UpgradeOptions): string](#bitupgrade-nnumber-opt-upgradeoptions-string)
      - [bitRateUpgrade](#bitrateupgrade)
      - [unitUpgrade:(num: number, options?: UnitUpgradeProps): [number, string]](#unitupgradenum-number-options-unitupgradeprops-number-string)
      - [max: (...args: number[]): number;](#max-args-number-number)
      - [min: (...args: number[]): number;](#min-args-number-number)
  - [array](#array)
      - [convertToTwodimensional](#converttotwodimensional)
      - [findTreeOrder](#findtreeorder)
      - [findSubtreeByOrder](#findsubtreebyorder)
  - [date](#date-1)
      - [formatTimestamp](#formattimestamp)
      - [getWeekCN `(date: Date): string`](#getweekcn-date-date-string)
      - [timeRange: (days: number): TimeRange](#timerange-days-number-timerange)
      - [timeRangeCurrent:(type: TimeRangeType): TimeRange](#timerangecurrenttype-timerangetype-timerange)
      - [timeRangePrevious:(type: TimeRangeType): TimeRange](#timerangeprevioustype-timerangetype-timerange)
      - [currentQuarterFirstMonth](#currentquarterfirstmonth)
      - [currentQuarterLastMonth](#currentquarterlastmonth)
      - [currentQuarterDays](#currentquarterdays)
      - [currentDayEarliest](#currentdayearliest)
      - [currentDayLatest](#currentdaylatest)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 工具函数

`如果仅使用type类型 可下载 nmp i @gaopeng123/utils.types` 

### types

##### date

| 函数名        | 作用                                       |
| ------------- | ------------------------------------------ |
| isObject      | 判断对象                                   |
| isArray       | 判断数组                                   |
| isPromise     | 判断Promise                                |
| isFunction    | 判断函数                                   |
| isNumber      | 判断数字                                   |
| isBoolean     | 判断boolean                                |
| isUndefined   | 判断undefined                              |
| isString      | 判断string                                 |
| isElement     | 判断element                                |
| isDate        | 判断是否是Date类型                         |
| isEqualByObj  | 判断对象是否相等（包括各个属性）           |
| isEmptyObject | 判断是否是空对象                           |
| isEmpty       | 判断是否是空 null undefined '' [] 都为true |
| isJSON        | 判断是否为合法的可格式化的json字符串       |

##### browser

| 函数名    | 作用              |
| --------- | ----------------- |
| isChrome  | chrome浏览器      |
| isFirefox | 火狐浏览器        |
| isWebKit  | WebKit内核        |
| isSafari  | Safari            |
| isOpera   | Opera             |
| isGecko   | Gecko             |
| isWindows | 是否是Windows系统 |
| isMac     | Mac系统           |
| isLinux   | Linux系统         |
| isStrict  | 是否是严格模式    |
| isSecure  | 是否是https访问   |

##### browser version

| 函数名         | 作用           |
| -------------- | -------------- |
| chromeVersion  | 返回值为number |
| firefoxVersion | 返回值为number |
| ieVersion      | 返回值为number |
| operaVersion   | 返回值为number |
| safariVersion  | 返回值为number |
| webKitVersion  | 返回值为number |



------

### object

#### clone

##### clone: <T>(val: T): T

`将对象或者数组clone一份，解除引用`

```typescript
clone({});
```

##### cloneAllObject: <T>(val: T): T

`clone所有对象的属性`

```typescript
cloneAllObject({});
```

##### cloneAllArray: <T>(val: T): T

`clone所有的数组属性`

```typescript
cloneAllArray([]);
```

##### cloneAllItem: <T>(val: T): T

`clone所有`

```typescript
cloneAllItem({});
```

#### assign

##### assignIf:(target: any, source: any): any

`对象属性的浅赋值，如果目标对象的属性非undefined,则不赋值`

```typescript
assignIf({a: 1}, {a:2, b: 1}); // {a:1,b:1}
```
##### assignDeep:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组默认为直接被source属性覆盖。`

```typescript
assignDeep({a: 1}, {a: [1], b: 2}); // {a: [1], b: 2}   
```

##### assignDeepMergeArray:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组通过concat拼接。`

```ty
assignDeepMergeArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1});
// {a: [1, 2, 3, 4, 5, 6], b: 1}    
```

##### assignDeepNotIncludedArray:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组通过concat拼接。`

```TY
assignDeepNotIncludedArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1}); 
// {a: [1, 2, 3], b: 1}  
```

#### other

##### length:(val: any): number

`获取对象的length`

```typescript
length({a:1}); // 1
```

##### mousePosition:(event: any): {x:number,y:number}

`根据event 获取鼠标位置`

```typescript
mousePosition(event)
```

##### getStyle: (el, styleName)

`获取el的某个样式属性`

```typescript
getStyle(div, 'color');
```

##### parentByExpected: (dom, expected): parent

`获取复合逾期的父级dom`

```typescript
parentByExpected(dom, (currntDom)=> {
    if(currntDom.classList.contains('loading')) return true;
})
```

##### copyText: (dom)

`点击后复制文本`

```typescript
<div onClick="copyText"></div>
```



------

### function

#### 缓存函数

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

#### monad

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

#### curry

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



#### compose

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

#### fullscreen

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

#### debounce/throttle

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



### file

##### urlJoinParmas: (parmas?: urlJoinParmasPatams): string

`将对象参数拼接到url中`

```typescript
urlJoinParmas({name:'zhangsan'})
```

##### removeUrlParams:(url: string): string

`去掉url中的参数，只保留url地址`

```typescript
removeUrlParams('https:/www.baidu.com/getBaseInfo?userId=xxx'); 
// https:/www.baidu.com/getBaseInfo
```

##### routeFromUri:(url: string): string;

`根据uri获取路由路径`

```typescript
removeUrlParams('https://www.baidu.com/route/app/test'); // /route/app/test
routeFromUri(removeUrlParams('https://www.baidu.com/route/app/test?data=3')); // /route/app/test
```

##### removeEmptyParams

`去掉下发参数中的undefined  null '' []`

```typescript
removeEmptyParams({a: null, b:undefined, c:'',d: [], e: 0}); // {e:0}
```

##### makeParamsProper:(params): any;

`处理不合规参数，让参数更符合要求，参数中的 ''、[]、null、undefined会被去掉，字符串前后的空格会被去掉 `

```typescript
makeParamsProper({a: null, b: undefined, c: '', d: [], e: 0, f: '   b d  f  ',})
{
	e: 0,
    f: 'b d  f'
}
```

##### queryParamsFromUrl:(url: string): object

`解析url中包含的参数`

```typescript
queryParamsFromUrl('https:/www.baidu.com/getBaseInfo?userId=xxx'); // {userId:'xxx'}
```

##### download: ({url, fileName, blob, parmas}: downloadParams): void \| Error

`文件下载函数`

```typescript
download({url: '',fileName: '',parmas: {}});
download({
     url: 'http://xxx.xxx.xxx.xxx/dl/player/xxx_V2.1.exe',
     fileName: 'xxx_V2.1'
})
```

##### downloadStream:({url, options, fileName}: downloadStreamParams): void

`stream文件下载`

```typescript
downloadStream({url:'', options: {body: ''},fileName: ''})
```

##### dowmloadScreenshotPicture: (dom, options) 

`下载视频和canvas截图 `

```typescript
dom: HTMLCanvasElement | HTMLVideoElement | string,
options: {
	fileName?: string,
	type?: ImageType,
	encoderOptions?: number
}
```

##### imageFromFile:(file: File): string

`将图片的file文件，转化成blob图片路径，可直接在src中体现`

```typescript
imageFromFile(file);
```

##### imageToBase64: (opt: ImageToBase64Props): string

`将image转为base64编码`

```typescript
type ImageToBase64Props = {
	image: HTMLImageElement,
	width?: number; // 宽度 默认图片宽度
	height?: number; // 高度 默认图片高度
	type?: ImageType; // 图片类型 默认'image/png'
	opacity?: number; // 透明度 默认1
}
imageToBase64({image:imgae})
```

##### mapObject: (obj, callBack: ObjectCallBack) => any;

`模拟数组的map操作`

```typescript
type ObjectCallBack = (currentVal?: any, index?: number, obj?: any) => any;
const object1 = {
    a: `a`,
    b: `b`,
    c: {
        a: true,
        b: 123,
        c: `hello!`,
    },
    d: [1, 2, 3],
    e: [4, 5, 6],
};
mapObject(mapObject.assign({}, object1), (item)=> {
   return 0;
}));
// 返回值
{
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0
}
```

##### filterObject: (obj, callBack: FilterObjectCallBack) => any;

`模拟数组的filter操作`

```typescript
type FilterObjectCallBack = (currentVal?: any, index?: number, obj?: any) => boolean;
filterObject(Object.assign({}, object1), (item)=> {
    return typeof item === 'string'
}));
// 返回值
{
   a: `a`,
   b: `b`,
}
```

##### forEachObject: (obj, callBack: ObjectCallBack) => any;

`模拟数组的forEach操作`

```typescript
forEachObject(Object.assign({}, object1), (item)=> {
    return typeof item === 'string' ? 0 : 1;
});
// 返回值
{
  a: 0,
  b: 0,
  c: 1,
  d: 1,
  e: 1
}
```



------

### String

##### uuid:(len?: number, radix?: number) => string;

`获取uuid 默认获取64位长度 数据基数为62`

```typescript
uuid()
```

##### formatStr:(...args: any) => string

`格式化字符串，将一个'hello {o}, I like {1}'中的 {0}{1} 替换成对应字符`

```typescript
formatStr('hello {o}, I like {1}')('china', 'you');
```

##### ellipsps: (text: string, width: number = 100, size: number = 12, font: string = 'Arial'): string;

`截取超长字符串...显示`

```typescript
ellipsps('wwwwwwwwwwwwwwwwwwwwwwwww', 50, 14);
```

##### strWidth:(ctx: any, text: string, fontSize: number = 12, fontFamily: string = 'Arial')

`获取字符串的长度，ctx: canvas的context对象，可传null`

```typescript
strWidth(null, 'WWWWWWW');
```

#### path

##### pathJoin:(...args): string

`拼接url路径`

```typescript
pathJoin('http://10.3.3.3', 'api/test'); // http://10.3.3.3/api/test
pathJoin('/api', '/test'); // '/api/test'
pathJoin(); // ''
```

#### extractEnclosedContent

##### extractEnclosedContent: (str: string, startStr: string, endStr: string): Array<string>

`提取被符号包裹住的字符串`

```typescript
extractEnclosedContent("a (1111),b (4444), d(3333)", '(', ')'); 
// ['1111', '4444', '3333']
```

##### extractParenthesesContent:(str:string):Array<string>

`提取小括号里面的内容`

```typescript
extractParenthesesContent("a (1111),b (4444), d(3333)"); 
//  ['1111', '4444', '3333']
```

##### extractMiddleParenthesesContent(str:string):Array<string>

`提取中括号里面的内容`

```typescript
extractMiddleParenthesesContent("a (1111),b [4444], d(3333)");
//  ['4444']
```

##### extractBigParenthesesContent(str:string):Array<string>

`提取大括号里面的内容`

```typescript
extractBigParenthesesContent("a (1111),b [4444], d{3333}"); //  ['3333']
```

#### regexp

##### IPV4

`IPV4正则校验`

```typescript
/^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/
```

##### PHONE_NUMBER

`手机号正则校验`

```typescript
/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
```

#### color

##### addOpacity

`给颜色添加透明度`

```typescript
addOpacity('#fff', 0.7); // rgba(255,255,255,0.7)
addOpacity('rgb(0,0,0)', 0.7); // rgba(0,0,0,0.7)
addOpacity('rgba(0,0,0)', 0.7); // rgba(0,0,0,0.7)
```

##### hex2Rgb

`将16进制颜色转换为rgb颜色`

```typescript
hex2Rgb('#000'); // 'rgb(0,0,0)'
```

##### rgb2hex

`将rgb颜色转换为16进制颜色`

```typescript
color2Rgb('rgb(0,0,0)'); // '#000'
```

##### rgba2hex

`将rgba颜色转换为16进制颜色`

##### rgba2rgb

`将rgba颜色转换为rgb颜色`

------

### number

##### randomInt: (min?: number, max?: number): number

`获取限定大小的随机整数`

```typescript
randomInt(5, 100); // 默认min = 0; max = 10;
```

##### toThousands:(val: string | number, digit: number = 0): string

`将数字转换为千位制转换，digit小数点精确到几位 `

```typescript
toThousands(9999999); // '9,999,999'
toThousands(9999999.000, 3); // '9,999,999.000'
```

##### bitUpgrade: (n:number, opt: UpgradeOptions): string

`比特转换`

```typescript
type UpgradeOptions = {
	decimal?: number, // 保留几位小数 默认俩位
	delimiter?: string, // 数字和单位之间的分隔符 默认为 无
}
bitUpgrade(1000); // '1.00KB'
bitUpgrade(1025, {delimiter: ' '}); // '1.00 KB'
bitUpgrade(999); // '999B'
```

##### bitRateUpgrade

`比特率转换`

```typescript
bitRateUpgrade(1000);//'1000bps'
bitRateUpgrade(1025, {delimiter: ' '}); // '1.00 Kbps'
```

##### unitUpgrade:(num: number, options?: UnitUpgradeProps): [number, string]

`单位进阶`

```typescript
UnitUpgradeProps = {
	type?: 'bit' | 'bitRate',
	decimal?: number, // 保留几位小数 默认俩位
}
unitUpgrade(1000); //(['1.00', 'KB']
```

##### max: (...args: number[]): number;

`求最大值`

```typescript
max(3,4,9); // 9
```

##### min: (...args: number[]): number;

`求最小值`

```typescript
min(3,4,9); // 3
```



------

### array

##### convertToTwodimensional 

``(arr: Array<any>, len: number): Array<Array<any>>``

`将一维数组，转为指定长度的二维数组`

```typescript
convertToTwodimensional([], 1);
```

##### findTreeOrder

`(tree: Array<any>, rely: RelyFn, options?: TreeOptions): Array<number>`

`根据rely返回的条件，查找树的位置`

```typescript
type TreeOptions = {
	childrenKey: string;
}
const treeData = [{
	id: 1,
	children: [{
		id: 11,
		children: [{
			id: 7,
		}]
	}, {
		id: 11
	}, {
		id: 7
	}]
}, {
	id: 2,
	children: [{
		id: 11,
	}, {
		id: 11
	}, {
		id: 6
	}]
}, {
	id: 3,
}, {
	id: 4,
}, {
	id: 5,
	children: [{
		id: 6,
		children: [{
			id: 7,
		}, {
			id: 8,
		}]
	}]
}];

findTreeOrder(treeData, (item) => {
			return item.id === 7;
		});  // [0, 0, 0]
```

##### findSubtreeByOrder

`(tree: any, order: Array<number>, options?: TreeOptions): TreeNode`

`根据order顺序 查找treeNode`

```typescript
findSubtreeByOrder(treeData, [1, 2]); // {id: 6}
```



------

### date

##### formatTimestamp 

`(timestamp: Date | number | string, type: TimestampType = 'yyyy-MM-dd HH:mm:ss'): string`

`时间戳转换成格式化后的日期格式`

```typescript
type TimestampType = 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd' | 'HH:mm:ss'
	| 'MM-dd' | 'MM-dd HH:mm:ss' | 'dd HH:mm:ss'
	| 'yyyy' | 'MM' | 'dd' | 'HH' | 'mm' | 'ss'
timestampToDate(Date.now(), 'yyyy-MM-dd')
timestampToDate(new Date(), 'yyyy-MM-dd')
timestampToDate((new Date()).toString(), 'yyyy-MM-dd')
```

##### getWeekCN `(date: Date): string`

`获取中文星期几`

```typescript
getWeekCN(new Date());// '星期五'
```

##### timeRange: (days: number): TimeRange

`获取{n}天的时间戳range`

```typescript
type TimeRange = {
	startTime: number;
	endTime: number;
};
timeRange(1);
```

##### timeRangeCurrent:(type: TimeRangeType): TimeRange

`获取当前自然天、周、月、季度、年时间戳范围`

```typescript
type TimeRangeType = 'day' | 'threeDays' | 'week' | 'month' | 'quarter' | 'year';
timeRangeCurrent('week');
```

##### timeRangePrevious:(type: TimeRangeType): TimeRange

`获取过去一天、一周、一月、一季度、一年的时间戳范围`

```typescript
timeRangePrevious('threeDays');
```

##### currentQuarterFirstMonth

`本季度的第一个月份`

```typescript
currentQuarterFirstMonth(); // number
```

##### currentQuarterLastMonth

`本季度的最后一个月份`

```typescript
currentQuarterLastMonth(); // number
```

##### currentQuarterDays

`本季度有多少天`

```typescript
currentQuarterDays(); // number
```

##### currentDayEarliest

`当天0点时间戳`

```typescript
currentDayEarliest(); // number
```

##### currentDayLatest

`当天24点时间戳`

```typescript
currentDayLatest(); // number
```

