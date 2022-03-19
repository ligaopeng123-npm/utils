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
export type RelyFn = (itemTree: any) => boolean;
export type TreeOptions = {
    childrenKey: string;
}

export type TreeNode = {
    __path?: string; // 保存当前路径
    children?: Array<TreeNode>;
    [propName: string]: any;
}

export type TraverseTreeProps = {
    tree: Array<TreeNode>;
    rely?: RelyFn; // 暂停的凭据 一旦范围tree 则停止遍历
    callBack?: TraverseTreeCallBack; // 遍历每一项都会执行的处理函数
    options: TreeOptions;
    parentNode?: any;
}

export type TraverseTreeCallBack = (v: TreeNode) => TreeNode;
