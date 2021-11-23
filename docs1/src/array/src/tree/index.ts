/**********************************************************************
 *
 * @模块名称: tree
 *
 * @模块用途: tree  常用树结构数据处理
 *
 * @date: 2021/10/21 8:51
 *
 * @版权所有: pgli
 *
 **********************************************************************/

/**
 * 遍历当前子树
 * @param currentTree
 * @param rely
 */
type RelyFn = (itemTree: any) => boolean;
type TreeOptions = {
	childrenKey: string;
}

const defaultOptions = {
	childrenKey: 'children'
};

type TreeNode = {
	__path?: string; // 保存当前路径
	children?: Array<TreeNode>;
	[propName: string]: any;
}
type TraverseTreeProps = {
	tree: Array<TreeNode>;
	rely?: RelyFn;
	options: TreeOptions;
	parentNode?: any;
}
/**
 * 遍历树
 */
const traverseTree = ({tree, rely, options, parentNode}: TraverseTreeProps): Array<any> | void => {
	const {childrenKey} = options;
	const len = tree.length;
	for (let i = 0; i < len; i++) {
		// @ts-ignore
		tree[i].__path = parentNode ? `${parentNode?.__path}-${i}` : `${i}`;
		if (rely && rely(tree[i])) {
			// @ts-ignore
			return tree[i];
		}
		if (tree[i][childrenKey]) {
			const relyTree = traverseTree({tree: tree[i][childrenKey], rely, options, parentNode: tree[i]});
			if (relyTree) {
				return relyTree;
			}
		}
	}
};

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

/**
 * 根据顺序 查找子树
 * @param tree
 * @param order
 */
export const findSubtreeByOrder = (tree: any, order: Array<number>, options?: TreeOptions): TreeNode => {
	const {childrenKey} = Object.assign({}, defaultOptions, options);
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
