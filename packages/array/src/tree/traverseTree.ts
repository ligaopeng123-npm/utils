/** ********************************************************************
 *
 * @模块名称: traverseTree
 *
 * @模块用途: traverseTree
 *
 * @date: 2022/3/18 13:34
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import { TraverseTreeProps, TreeNode } from "./typing";

/**
 * 遍历树
 */
export const traverseTree = (
    {
        tree,
        rely,
        options,
        parentNode,
        callBack
    }: TraverseTreeProps): TreeNode | void => {
    const { childrenKey } = options;
    const len = tree.length;
    for (let i = 0; i < len; i++) {
        tree[i].__path = parentNode ? `${parentNode?.__path}-${i}` : `${i}`;
        if (callBack) tree[i] = callBack(tree[i]);
        if (rely && rely(tree[i])) {
            return tree[i];
        }
        if (tree[i][childrenKey]) {
            const relyTree = traverseTree({
                tree: tree[i][childrenKey],
                rely, callBack, options,
                parentNode: tree[i]
            });
            if (relyTree) {
                return relyTree;
            }
        }
    }
};
