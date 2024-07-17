/** ********************************************************************
 *
 * @模块名称: findSubtreeByOrder
 *
 * @模块用途: findSubtreeByOrder
 *
 * @date: 2022/3/18 13:35
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import { TreeNode, defaultOptions, TreeOptions } from "./typing";

/**
 * 根据顺序 查找子树
 * @param tree
 * @param order
 */
export const findSubtreeByOrder = (tree: TreeNode, order: Array<number>, options?: TreeOptions): TreeNode => {
    const { childrenKey } = Object.assign({}, defaultOptions, options);
    let currentTree: any;
    for (let i = 0; i < order.length; i++) {
        const __path = Number(order[i]);
        // 当等于0的时候 必然是根树节点
        if (i === 0) {
            currentTree = tree[__path];
        } else {
            currentTree = currentTree[childrenKey][__path];
        }
    }
    return currentTree;
};
