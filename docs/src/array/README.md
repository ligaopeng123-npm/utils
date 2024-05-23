# Array

## array

#### convertToTwodimensional 

``(arr: Array<any>, len: number): Array<Array<any>>``

`将一维数组，转为指定长度的二维数组`

```typescript
convertToTwodimensional([], 1);
```

#### pageTurnerFixedLength

`(arr: any[], len = 5): [NextAndPreviousType, NextAndPreviousFn, NextAndPreviousFn]`

`固定长度的分页器函数，最后一页不满条数，补满条数`

`usage`

```typescript
export type NextAndPreviousType = [any[], boolean, boolean];
export type NextAndPreviousFn = () => NextAndPreviousType;

const [[pageData, canNext, canPrevious], next, previous] = pageTurnerFixedLength(rows, 5);
// pageData 当前分页数据  any[];
// canNext 是否可点击下一页  boolen
// canPrevious 是否可点击上一页
// next 获取下一页数据的函数 范围值也是pageData, canNext, canPrevious
// previous 获取上一页数据的函数 范围值也是pageData, canNext, canPrevious
```

#### groupBy <span class="new">New 1.1.6+</span>

`数组分组`

```typescript
expect(groupBy([
  { testId: 'id1', testName: 'name-1' },
  { testId: 'id2', testName: 'name-2' },
], 'testId')).toStrictEqual({
  id1: [{ testId: 'id1', testName: 'name-1' }],
  id2: [{ testId: 'id2', testName: 'name-2' }]
});

expect(groupBy([
  { testId: 'id1', testName: 'name-1' },
  { testId: 'id2', testName: 'name-2' },
], (item) => item.testId)).toStrictEqual({
  id1: [{ testId: 'id1', testName: 'name-1' }],
  id2: [{ testId: 'id2', testName: 'name-2' }]
});
```

#### list2tree

`(props: TraverseTreeProps): Array<TreeNode>`

`将数组根据id pid组装成tree`

```typescript
const listData = [{ id: 2, pid: 1 }, {id: 10, pid: 3},{ id: 3, pid: 2 }, { id: 4, pid: 6 },{ id: 5, pid: 4 },  {id: 7, pid: 9}];

const listTreeData: any = [
    {
      "id": 2,
      "pid": 1,
      "children": [
        {
          "id": 3,
          "pid": 2,
          "children": [
            {
              "id": 10,
              "pid": 3,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "pid": 6,
      "children": [
        {
          "id": 5,
          "pid": 4,
          "children": []
        }
      ]
    },
    {
      "id": 7,
      "pid": 9,
      "children": []
    }
  ];

expect(list2tree({
  list: listData, 
  options: {idKey: 'id', pidKey: 'pid', childrenKey: 'children'}
})).toStrictEqual(listTreeData);
```

#### arr2enumBase:(arr: any[], callBack: (item: any) => Arr2enumValue)

`数组迭代函数，用于转换成枚举对象`

#### arr2enum: (arr: object[], keyProp?: string, labelPro?: string): object

`数组转换成基于object形式的枚举, 比如可以用于生成antd procomponents里的selectEnum`

```typescript
const res = await loadOptions()
const optionEnum = arr2enum(res.data, 'deviceId', 'deviceName')
```

#### arr2AntdTableEnum

`Antd Table组件的枚举，返回的枚举用在table表格上`

#### enum2arrBase:(val: Arr2enumValue, callBack: (key: string, item: any, rows: Arr2enumValue)

`将枚举类型数据转成数组，迭代枚举类型数据`

#### enum2arr:(val: any): Array<Enum2arrValue>

`枚举转换成数组`

```typescript
type Enum2arrValue = {
    label: any;
    value: string;
}
```

#### unique (arr: Array, key?: string)

`数组去重，如果数组中是对象，则需要传入key作为去重标记`

```typescript
unique([]);
```

#### uniqueArrByKey:<T>(arr: Array<T>, key: string): Array<T>

`数组对象去重`

#### delItem

`删除数组/字符串的某一项`

```typescript
delItem('abc', (item)=> item === 'a'); // bc
delItem(['a', 'b', 'c'], (item)=> item === 'a'); // ['b', 'c']
```

#### binarySearch: (arr: any[], compare: (element: any) => number, start?: number, end?: number): index

`二分查找法获取有序数组的匹配元素下标, 失败返回-1, compare函数返回0则匹配成功, 大于0表示往左继续匹配, 小于0表示往右继续匹配`

```typescript
binarySearch(arr, e => e[0] - 3333)
```

## tree

#### findTreeOrder

`(tree: Array<any>, rely: RelyFn, options?: TreeOptions): Array<number>`

`根据rely返回的条件，查找树的位置`

```typescript
export type TreeOptions = {
    childrenKey?: string;
    idKey?: string | number; // 当前唯一标识
    pidKey?: string | number; // 父级id
}
const treeData = [{
	id: 1,
	children: [{
		id: 11,
		children: [{
			id: 7,
		}]
	}, {
		id: 11
	}, {
		id: 7
	}]
}, {
	id: 2,
	children: [{
		id: 11,
	}, {
		id: 11
	}, {
		id: 6
	}]
}, {
	id: 3,
}, {
	id: 4,
}, {
	id: 5,
	children: [{
		id: 6,
		children: [{
			id: 7,
		}, {
			id: 8,
		}]
	}]
}];

findTreeOrder(treeData, (item) => {
			return item.id === 7;
		});  // [0, 0, 0]
```

#### findSubtreeByOrder

`(tree: any, order: Array<number>, options?: TreeOptions): TreeNode`

`根据order顺序 查找treeNode`

```typescript
findSubtreeByOrder(treeData, [1, 2]); // {id: 6}
```

#### findTreeNode

`查找树节点`

`(tree: Array<any>, rely: RelyFn, options?: TreeOptions): any`

```typescript
findTreeOrder(treeData, (item) => {
			return item.id === 7;
		}); // {id: 7,}
```

#### mapTree

`(tree: any[], callBack: TraverseTreeCallBack, options?: TreeOptions):TreeNode`

`遍历树，并根据callBack处理遍历中的数据，默认子级字段是children`

```typescript
const treeData1 =  [{
    id: 1,
    children: [{
        id: 11,
        children: [{
            id: 7,
        }]
    }, {
        id: 11
    }, {
        id: 7
    }]
}];

const treeData2 = mapTree(treeData1, (item) => {
    return Object.assign({}, item, item.id === 1 ? {name: `${item.id}`} : {});
});

const treeData2 = [{
	id: 1,
	__path: '0',
	name: '1',
	children: [{
		id: 11,
		__path: '0-0',
		children: [{
			__path: '0-0-0',
			id: 7,
		}]
	}, {
		__path: '0-1',
		id: 11
	}, {
		__path: '0-2',
		id: 7
	}]
}];
```

#### filterTree

`(treeData: Array<TreeNode>, filterFn: FilterFn, options?: FilterTreeOptions): Array<TreeNode>`

`根据判断条件过滤树`

```typescript
export type FilterTreeOptions = {
    deep?: boolean; // 如果父节点命中 是否将子节点返回 默认false不返回
} & TreeOptions;

export const filterTreeData = [{
    id: 1,
    children: [{
        id: 11,
        children: [{
            id: 7,
            children: [{
                id: 99
            }]
        }]
    }, {
        id: 11
    }, {
        id: 7
    }]
}, {
    id: 2,
    children: [{
        id: 11,
    }, {
        id: 11
    }, {
        id: 6
    }]
}, {
    id: 3,
}, {
    id: 4,
}, {
    id: 5,
    children: [{
        id: 6,
        children: [{
            id: 7,
        }, {
            id: 8,
        }]
    }]
}];

export const filterTreeValue1 = [
    {
        "id": 1,
        "children": [
            {
                "id": 11,
                "children": [
                    {
                        "id": 7,
                        // @ts-ignore
                        "children": [],
                        "__path": "0-0-0",
                        "__isMatch": true
                    }
                ],
                "__path": "0-0",
                "__isMatch": true
            },
            {
                "id": 7,
                "__path": "0-2",
                "__isMatch": true
            }
        ],
        "__path": "0",
        "__isMatch": true
    },
    {
        "id": 5,
        "children": [
            {
                "id": 6,
                "children": [
                    {
                        "id": 7,
                        "__path": "4-0-0",
                        "__isMatch": true
                    }
                ],
                "__path": "4-0",
                "__isMatch": true
            }
        ],
        "__path": "4",
        "__isMatch": true
    }
]


export const filterTreeValue2 = [
    {
        "id": 1,
        "children": [
            {
                "id": 11,
                "children": [
                    {
                        "id": 7,
                        "children": [
                            {
                                "id": 99,
                                "__path": "0-0-0-0",
                                "__isMatch": false
                            }
                        ],
                        "__path": "0-0-0",
                        "__isMatch": true
                    }
                ],
                "__path": "0-0",
                "__isMatch": true
            },
            {
                "id": 7,
                "__path": "0-2",
                "__isMatch": true
            }
        ],
        "__path": "0",
        "__isMatch": true
    },
    {
        "id": 5,
        "children": [
            {
                "id": 6,
                "children": [
                    {
                        "id": 7,
                        "__path": "4-0-0",
                        "__isMatch": true
                    }
                ],
                "__path": "4-0",
                "__isMatch": true
            }
        ],
        "__path": "4",
        "__isMatch": true
    }
];

expect(filterTree(filterTreeData, (item) => {
    return item.id === 7;
})).toStrictEqual(filterTreeValue1);


 expect(filterTree(filterTreeData, (item) => {
     return item.id === 7;
 }, {deep: true})).toStrictEqual(filterTreeValue2);
```

