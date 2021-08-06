/**********************************************************************
 *
 * @模块名称: object
 *
 * @模块用途: index  对象处理函数
 *
 * @date: 2021/8/6 9:49
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isArray, isObject} from "../types";

/**
 * copy 解除引用
 * @param val
 * @returns {*}
 */
export const clone = <T>(val: T): T => {
	if (isArray(val) || isObject(val)) return JSON.parse(JSON.stringify(val));
	return val;
};

/**
 * clone所有的对象
 * @param val
 */
export const cloneAllObject = <T>(val: T): T => {
	const obj: any = {};
	let item: any;
	for (const k in val) {
		item = val[k];
		if (isArray(item)) {
			// 判断数组
			obj[k] = cloneAllArray(item);
		} else if (isObject(item)) {
			obj[k] = cloneAllItems(item);
		} else {
			obj[k] = item;
		}
	}
	return item;
};

/**
 * clone所有数组
 * @param val
 */
export const cloneAllArray = <T>(val: T): T => {
	/**
	 * 解除数组关系的引用
	 * @type {Array.<T>}
	 */
	const arr = Array.prototype.slice.call(val);
	const newArr: any = [];
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const item: any = arr[i];
		if (isArray(item)) {
			newArr.push(cloneAllArray(item));
		} else if (isObject(item)) {
			newArr.push(cloneAllObject(item));
		} else {
			newArr.push(val);
		}
	}
	return newArr;
};

/**
 * clone所有属性
 * @param val
 * @returns {*}
 */
export const cloneAllItems = <T>(val: T): T => {
	if (isArray(val)) {
		cloneAllArray(val);
	} else if (isObject(val)) {
		cloneAllObject(val);
	}
	return val;
};
