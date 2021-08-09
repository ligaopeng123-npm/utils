/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @date: 2021/7/21 13:13
 *
 * @版权所有: pgli
 *
 **********************************************************************/
const toString = Object.prototype.toString;

interface typeFn {
	(v: unknown): boolean
}

/**
 *@函数名称：isObject
 *@参数：
 *@作用：IE6 使用toString判断是Object
 *@date 2018/5/17
 */
export const isObject: typeFn = (val: any) => {
	return toString.call(null) === '[object Object]'
		? val !== null &&
		val !== undefined &&
		toString.call(val) === '[object Object]' &&
		val.ownerDocument === undefined // 排除dom
		: toString.call(val) === '[object Object]';
};
/**
 * 判断是否是数组
 * @param val
 * @returns {boolean}
 */
export const isArray: typeFn = (val) => {
	return 'isArray' in Array
		? Array.isArray(val)
		: toString.call(val) === '[object Array]';
};
/**
 * 字符串判断
 * @param val
 */
export const isString: typeFn = (val) => {
	return typeof val === 'string';
};

/**
 * 判断是不是没有赋值
 * @param val
 */
export const isUndefined: typeFn = (val) => {
	return typeof val === 'undefined';
};

/**
 * 判断数字
 * @param val
 * @returns {boolean}
 */
export const isNumber: typeFn = function (val) {
	return typeof val === 'number' && isFinite(val);
};

/**
 * 判断boolean
 * @param val
 */
export const isBoolean: typeFn = function (val) {
	return typeof val === "boolean";
};

/**
 * Safari 3.x 4.x type判断dom返回的是function
 * @param val
 * @returns {boolean}
 */
export const isFunction: typeFn = function (val) {
	return typeof document !== 'undefined' &&
	typeof document.getElementsByTagName('body') === 'function'
		? !!val && toString.call(val) === '[object Function]'
		: !!val && typeof val === 'function';
};

/**
 *判断是否为Promise
 * @param obj
 */
export const isPromise: typeFn = (obj) => {
	// @ts-ignore
	return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

/**
 * 判断dom  nodeType 属性可返回节点的类型。
 * @param val
 * @returns {boolean}
 元素类型     节点类型
 元素element       1
 属性attr          2
 文本text          3
 注释comments      8
 文档document      9
 */
export const isElement: typeFn = (val) => {
	// @ts-ignore
	return val ? val?.nodeType === 1 : false;
};

/**
 * 字符串为“”，数组为空数组
 * @param val
 */
export const isEmpty: typeFn = (val) => {
	return (
		val === undefined ||
		val === null ||
		val === '' ||
		// @ts-ignore
		(isArray(val) && val?.length === 0)
	);
};

/**
 * 判断是不是空对象
 * @param val
 */
export const isEmptyObject: typeFn = (val) => {
	return JSON.stringify(val) === '{}';
};

/**
 * 判断对象是否相等
 * @param k
 * @param l
 */
export const isEqualByObj = function (k: object, l: object) {
	return k === l || JSON.stringify(k) === JSON.stringify(l);
};
/**
 * 判断字符串是否是json格式
 * @param str
 */
export const isJSON: typeFn = (val) => {
	// 如果是对象或者数组 直接返回true
	if (isObject(val) || isArray(val)) return true;
	// 非字符串返回false
	if (!isString(val)) return false;
	// @ts-ignore
	let str: string = val;
	// 开头结尾不一致 也非合法json
	if (str.startsWith('{') && !str.endsWith('}')) return false;
	if (str.startsWith('[') && !str.endsWith(']')) return false;
	
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
};

export default {
	isObject,
	isArray,
	isEqualByObj,
	isEmptyObject,
	isElement,
	isEmpty,
	isPromise,
	isFunction,
	isNumber,
	isUndefined,
	isString,
	isJSON
}
