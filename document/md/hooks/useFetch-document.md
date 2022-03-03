# useFetch

`(url: string, options: Options, checkResponse?: CheckResponse) : [loading, error, data];`

## 参数

```typescript
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Options = {
    method: Method,
    body?: any; // post请求 参数放在body上
    params?: any; // get请求 参数拼接在url上
    responseType?: 'text' | 'json' | 'blob' | 'formData' | 'arrayBuffer';
    noModification?: boolean, // 是否要根据responseType做数据获取
    abortController?: AbortController, // 控制fetch abort
    headers?: {
        token?: string;
        [propName: string]: any;
    };
}

type CheckResponse = (props: any) => any;
```

## Usage

```tsx
import {useGet, usePost, useDel, usePut, usePatch} from "@gaopeng123/hooks.use-fetch";

const TestUseFetch: React.FC<TestUseFetchProps> = (props) => {
    const [loading, error, data] = useGet('/assets/test.json', {params: {name: '123'}}, (res) => {
        return res.data;
    });
    
    // const [loading2, error2, data2] = usePost('/assets/test.json', {body: {name: '123'}}, (res) => {
    //    return res.data;
    // });
    
    // useDel usePut usePatch
    
    if (loading) {
       return (<span>loading</span>)
    }
    
    if (error) {
         return (<span>{error}</span>)
    }
    
    return (
        <React.Fragment>
            <h3>useGet</h3>
            <div style={{display: 'flex', width: 500}}>
                <div style={itemStyle}>loading: {loading}</div>
                <div style={itemStyle}>error: {error}</div>
                <div style={itemStyle}>data: {JSON.stringify(data, null, 2)}</div>
            </div>
        </React.Fragment>
    ) 
};

export default TestUseFetch;
```
