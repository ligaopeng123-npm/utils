/**********************************************************************
 *
 * @模块名称: conversion
 *
 * @模块用途: conversion  数组转换
 *
 * @date: 2021/10/21 9:05
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isArray, isNumber} from "../../types";

/**
 * 将一维数组转换二维数组
 * @param arr
 * @param len
 */
export const convertToTwodimensional = (arr: Array<any>, len: number) => {
	if (!isArray(arr) || !isNumber(len) || len < 1) return arr;
	const newArr = [];
	for (let i = 0; i < arr.length; i = len + i) {
		newArr.push(arr.slice(i, len + i));
	}
	return newArr;
};
