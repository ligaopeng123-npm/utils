/** ********************************************************************
 *
 * @模块名称: typing
 *
 * @模块用途: typing
 *
 * @date: 2022/3/18 13:25
 *
 * @版权所有: pgli
 *
 ********************************************************************* */

export const defaultOptions = {
    childrenKey: 'children',
    idKey: 'id',
    pidKey: 'pid',
};

export type RelyFn = (itemTree: any) => boolean;
export type TreeOptions = {
    childrenKey?: string;
    idKey?: string | number; // 当前唯一标识
    pidKey?: string | number; // 父级id
}

export type FilterTreeOptions = {
    deep?: boolean; // 如果父节点命中 是否将子节点返回 默认false不返回
} & TreeOptions;

export type TreeNode = {
    __path?: string; // 保存当前路径
    children?: Array<TreeNode>;
    [propName: string]: any;
}

export type TraverseTreeProps = {
    list?: Array<TreeNode>;
    tree?: Array<TreeNode>;
    rely?: RelyFn; // 暂停的凭据 一旦范围tree 则停止遍历
    callBack?: TraverseTreeCallBack; // 遍历每一项都会执行的处理函数
    options?: TreeOptions;
    parentNode?: any;
}

export type TraverseTreeCallBack = (v: TreeNode) => TreeNode;
export type FilterFn = (v: TreeNode) => boolean;
