/** ********************************************************************
 *
 * @模块名称: findTreeOrder
 *
 * @模块用途: findTreeOrder
 *
 * @date: 2022/3/18 13:34
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import {traverseTree} from "./traverseTree";
import {RelyFn, TreeOptions, defaultOptions} from "./typing";
import { findSubtreeByOrder } from "./findSubtreeByOrder";

/**
 * 查找树的顺序
 * @param tree
 * @param rely
 * @param options
 */

export const findTreeOrder = (tree: any, rely: RelyFn, options?: TreeOptions): Array<number> => {
    const currentTree: any = traverseTree({
        tree: [...tree],
        rely,
        options: Object.assign(defaultOptions, options)
    });
    return currentTree ? currentTree?.__path?.split('-')?.map((item: string) => Number(item)) : [];
};

/**
 * 查找树节点
 * @param tree
 * @param rely
 * @param options
 */
export const findTreeNode = (tree: any, rely: RelyFn, options?: TreeOptions): any => {
    const order = findTreeOrder(tree, rely, options);
    if (order?.length) {
        return findSubtreeByOrder(tree, order, options);
    }
    return null;
};
