<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [array](#array)
    - [convertToTwodimensional](#converttotwodimensional)
  - [tree](#tree)
    - [findTreeOrder](#findtreeorder)
    - [findSubtreeByOrder](#findsubtreebyorder)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



### array

##### convertToTwodimensional 

``(arr: Array<any>, len: number): Array<Array<any>>``

`将一维数组，转为指定长度的二维数组`

```typescript
convertToTwodimensional([], 1);
```

#### tree

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

