# tsTypes

`定义一些公共的ts类型处理`

## Optional 将参数变为可选

```ty
Optional<params, 'name' | ‘age’>；
```

## 获取对象的key value类型

```typescript
// 获取一个对象的key和value的类型
const obj = {a:1, b: 2};
// 获取一个对象的key
type objKey = keyof typeof obj; // a | b
// 范型获取一个对象的key
type ObjectKeys<T> = keyof T;

type objectKeys = ObjectKeys<obj>; // a | b
// 获取obj的value类型
type objValues = typeof obj[keyof typeof obj];
// 范型获取obj的value类型
type ObjectValues<T> = T[keyof T];

ObjectValues(typeof obj);

// 获取obj的key value的类型
type ObjectKeyValue<T> = {
  key: keyof T;
  value: T[keyof T];
};

ObjectKeyValue(typeof obj)
```

