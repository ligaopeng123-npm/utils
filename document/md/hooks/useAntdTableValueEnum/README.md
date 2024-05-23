# useAntdTableValueEnum

`处理antd 表格 valueEnum`

## Usage

```tsx
const useEemo = () => {
    return useAntdTableValueEnum({
      	// 需要一个数组
        request: async () => {
            return await demoList()
        },
      	// 数组对应显示的值
        fieldNames: {
            label: 'name',
            value: 'value'
        },
      	// 是否需要缓存，码表数据基本不会变化 可以换成
        cacheKey: 'useEemo',
      	// 是否需要多valueEnum数据再次处理
      	enumCallBack: (item)=> item
    })
}

const {list, valueEnum} = useEemo();
```



