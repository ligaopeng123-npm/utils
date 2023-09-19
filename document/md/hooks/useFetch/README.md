# useFetch

>注意：如果和@gaopeng123/fetch一起使用，共享拦截器注入的header属性，需要使用initCreateFetch方法把createFeatch函数注入下
>
>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usefetch--demo)

## initCreateFetch

```tsx
export { get, post, put, del, patch, createFetch } from "@gaopeng123/fetch";
initCreateFetch(createFetch);
```

## 参数

`(url: string, options: Options, checkResponse?: CheckResponse, deps: Array<any>) : [loading, error, data];`

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

type Deps = any[];
```

## Usage

```tsx
import {useGet, usePost, useDel, usePut, usePatch} from "@gaopeng123/hooks.use-fetch";

const TestUseFetch: React.FC<TestUseFetchProps> = (props) => {
     const [dep1, setDep1] = useState(1);
    const [dep2, setDep2] = useState(2);
    const [loading, error, data] = useGet('/assets/test.json', {}, (res) => {
        return res.data;
    }, [dep1, dep2]);

    const onClick = () => {
        setDep1(Math.random())
    }

    if (loading) {
        return (<span>loading</span>)
    }

    if (error) {
        return (<span>{error}</span>)
    }

    return (
        <React.Fragment>
            <h3 onClick={onClick}>useGet</h3>
            <div style={{display: 'flex', width: 500}}>
                <div style={itemStyle}>loading: {loading}</div>
                <div style={itemStyle}>error: {error}</div>
                <div style={itemStyle}>data: {JSON.stringify(data, null, 2)}</div>
            </div>
            <h3>usePost</h3>
            <h3>useDel</h3>
            <h3>usePut</h3>
            <h3>usePatch</h3>
        </React.Fragment>
    )
};

export default TestUseFetch;
```

## useCreateFetch

`创建一个可操作的fetch`

```tsx
import {useGetFetch, usePostFetch, useDelFetch, usePutFetch, usePatchFetch} from "@gaopeng123/hooks.use-fetch";

const TestUseFetch: React.FC<TestUseFetchProps> = (props) => {
 const [{
        sent,
        abort
    }] = useGetFetch();
  
  
  return (
        <React.Fragment>
            <h3 onClick={() => {
                sent('/assets/test.json').then(res => {
                    console.log(res);
                });
                setTimeout(() => {
                    abort();
                }, 1)
            }
            }>useGetFetch</h3>
        </React.Fragment>
    )
}



```



## useUpdateFetch

`初始化时不下发，只有当依赖参数变更后才会下发`

```tsx
// 初次opts赋值时不加载，当opts再次赋值时接口调用；会自动处理接口abort
const [opts, setOpts] = useState({});
useEffect(()=> {}, [
  setTimeout(()=> {
    setOpts({params: {name: 'name'}});
  }, 5000);
]);
const [loading, error, data] = useUpdateGet('/assets/test.json', opts}, (res) => {
        return res.data;
    });
```

## useCtrlFetch

`初次不加载，只有当依赖参数变更后才会触发查询`

```tsx
// 初次不加载，当run()时触发接口调用；会自动处理接口abort
const [opts, setOpts] = useState({});
useEffect(()=> {}, [
  setTimeout(()=> {
    run();
  }, 5000);
]);
const [loading, error, data, {run}] = useCtrlGet('/assets/test.json', opts}, (res) => {
        return res.data;
    });
```

