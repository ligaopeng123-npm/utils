/** ********************************************************************
 *
 * @模块名称: filterTree
 *
 * @模块用途: filterTree
 *
 * @date: 2022/9/22 8:40
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
import { isArray } from "@gaopeng123/utils.types";
import { defaultOptions, FilterFn, FilterTreeOptions, TreeNode } from "./typing";
import { mapTree } from "./mapTree";

/**
 * 递归判断数据是否命中 如果子节点命中 也算命中
 * @param item
 * @param callBack
 * @param options
 */
function isMatch(item: TreeNode, callBack: FilterFn, options?: FilterTreeOptions) {
    let flag1 = false;
    let flag2 = false;
    if (callBack(item)) {
        flag1 = true
    } else if (item[options.childrenKey] && item[options.childrenKey].length) {
        item[options.childrenKey].forEach((child: any[]) => {
            if (isMatch(child, callBack, options)) {
                flag2 = true
            }
        });
    }
    return flag1 || flag2;
}

/**
 * 遍历整棵树 给每一条命中的数据都打上标记
 * @param treeData
 * @param callBack
 * @param options
 */
const setMatch = (treeData: Array<TreeNode>, callBack: FilterFn, options?: FilterTreeOptions) => {
    return mapTree(treeData, (treeNode) => {
        return {
            ...treeNode,
            // 给每一条数据都打上标记
            __isMatch: isMatch(treeNode, callBack, options)
        }
    });
}
/**
 * 是否还有更深的命中节点
 * @param treeData
 * @param childrenKey
 */
const hasDeepMatch = (treeData: TreeNode, childrenKey: string): boolean => {
    if (treeData[childrenKey] && treeData[childrenKey].length) {
        for (let i = 0; i < treeData[childrenKey].length; i++) {
            const childTreeNode = treeData[childrenKey][i];
            if (childTreeNode.__isMatch) {
                return true;
            }
        }
    }
    return false;
}

/**
 * 根据打的标记 将树过滤组装 同样需要递归
 * @param treeData
 * @param callBack
 * @param options
 */
export const filterByMatch = (treeData: Array<TreeNode>, callBack: FilterFn, options?: FilterTreeOptions) => {
    const {deep, childrenKey} = options;
    if (deep) {
        return treeData.filter((item: TreeNode, index) => {
            if (item && item[childrenKey] && item[childrenKey].length && item.__isMatch) {
                // 如果是需要带子节点 此处在遍历到倒数第二层时 停止遍历 将子节点都返回
                item[childrenKey] = hasDeepMatch(item, childrenKey)
                    ? filterByMatch(item[childrenKey], callBack, options)
                    : item[childrenKey];
            }
            return item.__isMatch;
        })
    } else {
        return treeData.filter((item: any, index) => {
            if (item && item[childrenKey] && item[childrenKey].length) {
                item[childrenKey] = filterByMatch(item[childrenKey], callBack, options);
            }
            return item.__isMatch;
        })
    }
    // 数据冗余了 先这样 减少一次递归
    // return mapTree(newTreeData, (treeNode) => {
    //     const currentTreeNode = {...treeNode};
    //     delete currentTreeNode.__path;
    //     delete currentTreeNode.__isMatch;
    //     return currentTreeNode
    // });
}

/**
 * 树的过滤
 * @param treeData
 * @param filterFn
 * @param options
 */
export const filterTree = (treeData: Array<TreeNode>, filterFn: FilterFn, options?: FilterTreeOptions): Array<TreeNode> => {
    if (isArray) {
        const _options = Object.assign({}, defaultOptions, options);
        return filterByMatch(setMatch(JSON.parse(JSON.stringify(treeData)), filterFn, _options), filterFn, _options);
    } else {
        console.error(`filterTree参数不合法`);
        return treeData;
    }
}

export default filterTree;

