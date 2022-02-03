/**********************************************************************
 *
 * @模块名称: format
 *
 * @模块用途: format
 *
 * @date: 2021/8/13 14:54
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 字符串格式化
 * 将一个'hello {o}, I like {1}' {0}{1} 替换成对应字符
 * formatStr('hello {o}, I like {1}')('china', 'you');
 * @param str
 */
export type formatStrFn = (...args: any) => string;
const formatStr = (str: string): formatStrFn => {
	return (...args: any) => {
		let result = str;
		for (let i = 0; i < args.length; i++) {
			if (args[i] != undefined) {
				const reg = new RegExp('({)' + i + '(})', 'g');
				result = result.replace(reg, args[i]);
			}
		}
		return result;
	}
};

export default formatStr;
