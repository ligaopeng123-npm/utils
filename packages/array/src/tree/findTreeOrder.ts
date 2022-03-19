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
import {defaultOptions, traverseTree} from "./traverseTree";
import {RelyFn, TreeOptions} from "./typing";

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
    return currentTree.__path?.split('-')?.map((item: string) => Number(item));
};
