# file

## URI参数处理

##### urlJoinParams: (parmas?: urlJoinParamsProps): string

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

##### removeEmptyParams: (params): any;

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
queryParamsFromUrl('https://www.baidu.com/getBaseInfo?userId=xxx'); // {userId:'xxx'}
```

##### domainNameFromUri

`重uri中获取域名`

```typescript
domainNameFromUri('https://www.baidu.com/getBaseInfo?userId=xxx'); // https://www.baidu.com
domainNameFromUri('www.baidu.com/getBaseInfo?userId=xxx'); // www.baidu.com
```

##### routeFromUri

`重uri中获取路由地址`

```typescript
routeFromUri('https://www.baidu.com/getBaseInfo?userId=xxx'); // /getBaseInfo
routeFromUri('https://www.baidu.com/#/getBaseInfo?userId=xxx'); // /getBaseInfo
```

##### checkOrigin(url:string)

`检查url是否同源`

## download

##### download: ({url, fileName, blob, parmas,origin}: downloadParams): void \| Error

`文件下载函数`

`origin: 服务端是否处理过跨域，如果为true，非同源场景下走xhr请求`

```typescript
download({url: '',fileName: '',parmas: {}});
download({
     url: 'http://xxx.xxx.xxx.xxx/dl/player/xxx_V2.1.exe',
     fileName: 'xxx_V2.1'
})
```

##### downloadClickA({href, fileName, blob})

`a标签下载文件`

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

##### getFileNameFromUrl(url:string)

`从url上获取fileName名称`

## image

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

##### openToPreviewBase64:(url: string):viod

`chrome浏览器，预览base64图片，图片安全限制`

```typescript
openToPreviewBase64('base64...');
```

##### imageUrlToBase64

`图片地址转为base64图片`

```typescript
/**
 * @param url
 * @param isProxy 是否需要前端处理代理 默认为true 如果服务端配置好允许跨域 则可设置为false
 */
type ImageUrlToBase64 = (url: string, isProxy: boolean) => Promise<string>;
imageUrlToBase64("https://xxx/xxx.jpg", false).then((base64)=> {
    
});
```

##### imageUrlToBlob

`图片地址转为blob图片`

```typescript
/**
 * @param url
 * @param isProxy 是否需要前端处理代理 默认为true 如果服务端配置好允许跨域 则可设置为false
 */
type ImageUrlToBlob = (url: string, isProxy: boolean) => Promise<Blob>;
imageUrlToBlob("https://xxx/xxx.jpg").then((blob)=> {
    
});
```

##### imageTypeFromUrl

`根据图片url获取图片类型`

```typescript
imageTypeFromUrl("https://xxx/xxx.jpg?aaa=bbb"); // jgp
imageTypeFromUrl("https://xxx/xxx.jpg"); // jgp
```

## inject

##### injectScript

`动态加载js文件，返回一个promise`

```typescript
injectScript('http://***').then(()=> {});
```

##### injectScripts

`批量动态加载就是文件`

```typescript
injectScripts(['http://***']).then(()=> {});
```

##### injectCSS

`插入css`

```typescript
injectCSS(id: string, cssText: string);
injectCSS('my-id', makeCssText({color: '#fff', fontSize: '12px'}));
```

## convert文件类型转换

##### file2Blob(file:File):Blob;

`将file类型数据转换成blob类型`

##### file2Url(file:File):string;

`将图片file数据转换成file:http,直接通过src展示`

##### blob2File(blob:Blob):File;

`将blob类型转换成file类型用于服务端上传`

##### base642Blob(base64:string):Blob;

`将base64图片，转成blob数据`

##### base642File(base64:string):File;

`将base64图片类型转换成file类型，可直接上传`

##### blob2Base64(blob:Blob):string;

`将图片blob数据类型转换成base64`

## css-obj React style 转换

##### obj2css

`将obj类型的样式转换成css类型`

```typescript
const testData = {
    backgroundColor: "red",
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    color: "#ffffff",
    fontSize: "16px",
    height: "100px",
    marginBottom: "10px",
    paddingTop: "10px",
    width: "100px",
}

const cssData = "background-color: red;" +
    "border-bottom-color: #000000;" +
    "border-bottom-style: solid;" +
    "border-bottom-width: 1px;" +
    "color: #ffffff;" +
    "font-size: 16px;" +
    "height: 100px;" +
    "margin-bottom: 10px;" +
    "padding-top: 10px;" +
    "width: 100px;" +
    ""

obj2css(testData); // cssData
```

##### css2obj

`将css样式转换成react用的驼峰样式`

```typescript
css2obj(cssData); // testData
```

##### makeCssText

`将对象拼接成css字符串`

```typescript
makeCssText({'my-class-name': testData});
```

```css
.my-class-name {
    background-color: red;
    border-bottom-color: #000000;
    ...
}
```

