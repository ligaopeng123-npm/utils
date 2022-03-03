### 使用方式

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

### Option

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

### function

#### get

```typescript
get(url:string, option: Option):Promise<any>;
```

#### post

```typescript
post(url:string, option: Option):Promise<any>;
```

#### put

```typescript
put(url:string, option: Option):Promise<any>;
```

#### del

```typescript
del(url:string, option: Option):Promise<any>;
```

#### errorCode

```typescript
// 根据错误状态吗 返回错误信息
errorCode(code:number):string; 
```

#### register

```typescript
(intercept: Intercept): Unregister;

```

##### Intercept

```typescript
request?(url: string, config: any): Promise<any[]> | any[];
requestError?(error: any): Promise<any>;
response?(response: FetchInterceptorResponse): FetchInterceptorResponse;
responseError?(error: any): Promise<any>;
```

