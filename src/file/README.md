<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [file](#file)
    - [urlJoinParmas: (parmas?: urlJoinParmasPatams): string](#urljoinparmas-parmas-urljoinparmaspatams-string)
    - [removeUrlParams:(url: string): string](#removeurlparamsurl-string-string)
    - [removeEmptyParams](#removeemptyparams)
    - [queryParamsFromUrl:(url: string): object](#queryparamsfromurlurl-string-object)
    - [download: ({url, fileName, blob, parmas}: downloadParams): void \| Error](#download-url-filename-blob-parmas-downloadparams-void-%5C-error)
    - [downloadStream:({url, options, fileName}: downloadStreamParams): void](#downloadstreamurl-options-filename-downloadstreamparams-void)
    - [dowmloadScreenshotPicture: (dom, options)](#dowmloadscreenshotpicture-dom-options)
    - [imageFromFile:(file: File): string](#imagefromfilefile-file-string)
    - [imageToBase64: (opt: ImageToBase64Props): string](#imagetobase64-opt-imagetobase64props-string)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

##### removeEmptyParams

`去掉下发参数中的undefined  null '' []`

```typescript
removeEmptyParams({a: null, b:undefined, c:'',d: [], e: 0}); // {e:0}
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


