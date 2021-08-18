/**********************************************************************
 *
 * @模块名称: toThousands
 *
 * @模块用途: toThousands
 *
 * @date: 2021/8/18 8:44
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 *@函数名称：toThousands
 *@参数：value Number  num,小数点精确到几位数
 *@作用：将数字格式化成千位符号进行展示
 *@date 2018/5/22
 */
const toThousands = (val: string | number, digit: number = 0): string => {
	const value = Number(val);
	const num: any = (value || 0).toFixed(digit || 0).toString();
	let result = '';
	let integer: any = num.match(/(\S*)\./);
	let decimal = '';
	// 将字符串从'.'断开 用点之前的数据做分割处理，最后再加上小数点后面的数字
	if (integer) {
		integer = integer[1];
		decimal = num.match(/\.(\S*)/)[0]; // 拿到小数点后面的数字
	} else {
		integer = num;
	}
	// integer = integer.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
	while (integer.length > 3) {
		result = ',' + integer.slice(-3) + result;
		integer = integer.slice(0, integer.length - 3);
	}
	if (integer) {
		result = integer + result;
	}
	return result + decimal;
};

export default toThousands;
