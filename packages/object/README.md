# object

## clone

#### clone: <T>(val: T): T

`将对象或者数组clone一份，解除引用`

```typescript
clone({});
```

#### cloneAllObject: <T>(val: T): T

`clone所有对象的属性`

```typescript
cloneAllObject({});
```

#### cloneAllArray: <T>(val: T): T

`clone所有的数组属性`

```typescript
cloneAllArray([]);
```

#### cloneAllItem: <T>(val: T): T

`clone所有`

```typescript
cloneAllItem({});
```

## assign
#### assignIfByOrder
`(order:AssignIfOrder,target: any, ...source: any):any`
`对象属性的copy，如果order返回true则赋值`
```typescript
// type AssignIfOrder = (v:any)=> boolean;
assignIfByOrder((v)=> v!==null, {a:1}, {b: null});// {a:1}
```

#### assignIf:(target: any, ...source: any): any

`对象属性的浅赋值，如果目标对象的属性为undefined null,则复制source属性`

```typescript
assignIf({a: 1}, {a:2, b: 1}); // {a:1,b:1}
```
#### assignDeep:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组默认为直接被source属性覆盖。`

```typescript
assignDeep({a: 1}, {a: [1], b: 2}); // {a: [1], b: 2}   
```

#### assignDeepMergeArray:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组通过concat拼接。`

```ty
assignDeepMergeArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1});
// {a: [1, 2, 3, 4, 5, 6], b: 1}    
```

#### assignDeepNotIncludedArray:(target: any, source: any): any

`对象属性的深度合并（非覆盖），数组通过concat拼接。`

```TY
assignDeepNotIncludedArray({a: [1, 2, 3]}, {a: [4, 5, 6], b: 1}); 
// {a: [1, 2, 3], b: 1}  
```

## dom

#### mousePosition:(event: any): {x:number,y:number}

`根据event 获取鼠标位置`

```typescript
mousePosition(event)
```

#### getStyle: (el, styleName)

`获取el的某个样式属性`

```typescript
getStyle(div, 'color');
```

#### parentByExpected: (dom, expected): parent

`获取复合逾期的父级dom`

```typescript
parentByExpected(dom, (currntDom)=> {
    if(currntDom.classList.contains('loading')) return true;
})
```

#### copyText: (dom)=>Promise<{message: string, status: boolean}

`点击后复制文本`

```typescript
// 直接放在click函数中使用  粘贴板上为test
<div onClick="copyText">test</div>
// 传入dom
copyText(document.querySelector('#dom'))
/*
* 姓名：张三
*	性别：男
*/
copyText('姓名：张三\n性别：男')
```

#### isVisibleInViewport

`元素是否在可视范围内`

```typescript
// partiallyVisible 是否部分可见
isVisibleInViewport(el: Element, partiallyVisible = true):boolean;
isVisibleInViewport(document.body, false);
```

#### observeViewport

`监听dom是否进入视口`

```typescript
/**
 * @param observeDomList 监控的对象集合 数组
 * @param observeCallBack    监听函数  范围在可视范围内的元素集合
 * @param wait          去抖时间
 * @param options       去抖配置
 */
const observeViewport = (observeDomList: any[], observeCallBack: any, wait?: number, options?: DebounceOptions): void;
```

`usage`

```typescript
import {observeViewport} from "@gaopeng123/utils";
import testImg from './public/test.jpg';

window.onload = () => {
    const app = document.querySelector('#root');
    const list = [];
    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.style.height = '180px';
        item.id = `item-${i}`;
        app.append(item);
        list.push(item);
    }
    observeViewport(list, (els: any) => {
        els.forEach((el: any) => {
            if (!el.querySelector('img')) {
                const img = document.createElement('img');
                img.src = testImg;
                el.append(img);
            }
        })
    }, 200);
}
```

#### getScrollPosition

`获取当前dom的滚动条滚动位置`

```typescript
getScrollPosition(document.querySelector('#xxx')); // {x: number,y:number}
```

#### scrollToTop

`将有滚动条的dom，滚动到最顶部`

```tsx
scrollToTop = (el?: Element): void 
```

#### levitatingBall

`悬浮球`

```tsx
export type levitatingBallConfig = {
    el: any; // 可拖拽的dom
  	style?: any; // 样式
    up_down?: boolean; // 是否可以上下移动
    left_right?: boolean; // 是否可以左右移动
}

levitatingBall(config: levitatingBallConfig, onClick: onClick: (e: MouseEvent | TouchEvent) => void);
```



## other

#### length:(val: any): number

`获取对象的length`

```typescript
length({a:1}); // 1
```

#### mapObject: (obj, callBack: ObjectCallBack) => any;

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

#### filterObject: (obj, callBack: FilterObjectCallBack) => any;

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

#### forEachObject: (obj, callBack: ObjectCallBack) => any;

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

## clearEmpty: <T>(val: T): T

`清除object中的空值键值对, 比如可以用来处理请求参数`

```typescript
const query = {name: '', type: null, page: 1}
const clearedQuery = clearEmpty(query) // {page: 1}
```