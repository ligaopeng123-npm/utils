# object

## clone

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

## assign

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

## other

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

