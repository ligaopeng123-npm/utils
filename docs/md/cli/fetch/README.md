## 介绍

`fetch函数封装，提供更便捷的使用方式`

## Changelog

 [changelog](./CHANGELOG.md)

## Usage

```typescript
import {register} from '@gaopeng123/fetch';

export {createFetch as createFetch} from "@gaopeng123/fetch";
export {get as get} from "@gaopeng123/fetch";
export {post as post} from "@gaopeng123/fetch";
export {put as put} from "@gaopeng123/fetch";
export {del as del} from "@gaopeng123/fetch";
export {patch as patch} from "@gaopeng123/fetch";

const intercept: Intercept = {
	request: function (url: string, config: Option) {
		// Modify the url or config here
		console.log('request', config)
		// config.headers.token = 'tttt';
		return [url, config];
	},
	
	requestError: function (error: Error) {
		console.log('requestError');
		return Promise.reject(error);
	},
	
	response: async function (response: Response) {
		// Modify the reponse object
        // resolve(response);
        // or
		return new Promise((resolve, reject) => {
			resolve(response);
		});
	},
	
	responseError: function (error: Error) {
		// Handle an fetch error
		console.log('responseError');
		return Promise.reject(error);
	}
};
// unregisterFetch 卸载拦截器 在app卸载时调用下 卸载掉
export const unregisterFetch = register(Intercept);
```

## Option

```typescript
body?: any; // post请求 参数放在body上
params?: any; // get请求 参数拼接在url上
responseType?: 'text' | 'json' | 'blob' | 'formData' | 'arrayBuffer';
noModification?: boolean, // 是否要根据responseType做数据获取
abortController?: AbortController, // 控制fetch abort
// 此处如果配置空对象 则不会再做任何覆盖操作 同样不会增加任何headers属性
headers?: {
    token?: string;
    [propName: string]: any;
};
```

## function

### createFetch

`创建带有拦截器及响应数据处理的fetch函数`

```typescript
createFetch(url:string, option: Option):Promise<any>;
```

### get

```typescript
get(url:string, option: Option):Promise<any>;
```

### post

```typescript
post(url:string, option: Option):Promise<any>;
```

### put

```typescript
put(url:string, option: Option):Promise<any>;
```

### del

```typescript
del(url:string, option: Option):Promise<any>;
```

### patch

```typescript
patch(url:string, option: Option):Promise<any>;
```

### downLoadFile

`文件流下载`

```typescript
downLoadFile(url:string, option: Option):Promise<{ progress: string }> | any;
// 1 跟服务端有参数下发
downLoadFile("/api", {body: {}}).then((res)=>{
    if(res.progress){
       // 开始下载 如果有状态 此处可以清除状态
    }
});
// 2 根据服务端数据类型来判断是否有文件可以下载
downLoadFile("/api", {body: {}}).then((res)=>{
    if(!res.progress){
       // 服务端响应内容 下载内容失败 此处可处理一些逻辑
    }
});
```

### createFormFetch

`创建formData类型的请求`

```tsx
const postFormData = createFormFetch(url, {method: MethodEnum.post, body: {}});
```

### postFormData

`下发表单数据`

```tsx
const params: FormData | {[propsName:string]: any
// 参数如果不是FormData 则会转成FormData                   
postFormData('api', {body: formData}).then(()=> {
    
});
```

### uploadFormData

`表单上传`

```typescript
uploadFormData('api', {body: formData}).then(()=> {
    
})
```

### errorCode

```typescript
// 根据错误状态吗 返回错误信息
errorCode(code:number):string; 
```

### register

`注入拦截器`

```typescript
(intercept: Intercept): Unregister;
```

### Intercept 

`拦截器属性`

```typescript
request?(url: string, config: any): Promise<any[]> | any[];
requestError?(error: any): Promise<any>;
response?(response: FetchInterceptorResponse): FetchInterceptorResponse;
responseError?(error: any): Promise<any>;
```

## AbortController

```typescript
const abortController = new AbortController();
get('/test.json', {responseType: 'text', abortController: abortController}).then((res) => {
    console.log(res);
});

setTimeout(() => {
    abortController.abort();
}, 100);
```

