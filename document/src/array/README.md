# Array

## array

##### convertToTwodimensional 

``(arr: Array<any>, len: number): Array<Array<any>>``

`将一维数组，转为指定长度的二维数组`

```typescript
convertToTwodimensional([], 1);
```

##### pageTurnerFixedLength

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

## tree

##### findTreeOrder

`(tree: Array<any>, rely: RelyFn, options?: TreeOptions): Array<number>`

`根据rely返回的条件，查找树的位置`

```typescript
type TreeOptions = {
	childrenKey: string;
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

##### findSubtreeByOrder

`(tree: any, order: Array<number>, options?: TreeOptions): TreeNode`

`根据order顺序 查找treeNode`

```typescript
findSubtreeByOrder(treeData, [1, 2]); // {id: 6}
```

