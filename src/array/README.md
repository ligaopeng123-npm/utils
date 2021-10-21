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

```

##### findSubtreeByOrder

`(tree: any, order: Array<number>, options?: TreeOptions): TreeNode`

`根据order顺序 查找treeNode`



