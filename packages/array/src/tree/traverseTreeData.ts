import {defaultOptions, traverseTree} from "./traverseTree";
import {TraverseTreeCallBack, TreeNode, TreeOptions} from "./typing";

/** ********************************************************************
 *
 * @模块名称: traverseTreeData
 *
 * @模块用途: traverseTreeData
 *
 * @date: 2022/3/18 13:36
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
/**
 * 遍历树 获取遍历后的数据
 * @param tree
 * @param callBack
 * @param options
 */
export const traverseTreeData = (tree: any[], callBack: TraverseTreeCallBack, options?: TreeOptions): TreeNode => {
    const _options = Object.assign({}, defaultOptions, options);
    const treeData = [...tree];
    traverseTree({tree: treeData, options: _options, callBack});
    return treeData;
}
