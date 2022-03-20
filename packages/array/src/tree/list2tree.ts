import { defaultOptions, TraverseTreeProps, TreeNode } from "./typing";

export const list2tree = (props: TraverseTreeProps): Array<TreeNode> => {
    const { list, options } = props;
    const { idKey, pidKey, childrenKey } = Object.assign({}, defaultOptions, options);
    const treeMap: any = {};
    const tree = [];
    // 将所有的数据缓存起来，方便后面去找
    for (const item of list) {
        treeMap[item[idKey]] = { ...item, [childrenKey]: [] };
    }

    // 遍历list 去map对象上去找父级id
    for (const item of list) {
        // 如果有pid则从map上去找，能找到则代表有父结构，否则就是没有，
        // 如果没有直接作为跟树放到tree里面，如果有则放到children里面
        if (item[pidKey] && treeMap[item[pidKey]]) {
            treeMap[item[pidKey]][childrenKey].push(treeMap[item[idKey]]);
        } else {
            tree.push(treeMap[item[idKey]]);
        }
    }

    return tree;
}
