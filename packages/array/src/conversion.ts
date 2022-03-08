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
import {isArray, isNumber} from "@gaopeng123/utils.types";

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

/**
 * 分页器 固定长度的分页器
 * @param arr
 * @param len
 */
export type NextAndPreviousType = [any[], boolean, boolean];
export type NextAndPreviousFn = () => NextAndPreviousType;
export const pageTurnerFixedLength = (arr: any[], len = 5): [NextAndPreviousType, NextAndPreviousFn, NextAndPreviousFn] => {
    // 当前页 默认为第一页
    let currentIndex = 1;
    let currentPages: any[] = [];
    const fn: any = (pageIndex = 1) => {
        const currentList = arr.slice((pageIndex - 1) * len, len * pageIndex);
        if (currentList.length === len) return currentList;
        currentPages = arr.slice(arr.length - len, arr.length);
        return currentPages;
    }
    /**
     * 是否可以执行下一页翻页
     */
    const canNext = () => {
        return currentIndex * len < arr.length;
    }
    /**
     * 下一页
     */
    const next: NextAndPreviousFn = () => {
        if (canNext()) {
            currentIndex++;
            return [fn(currentIndex), canNext(), canPrevious()];
        } else {
            return [currentPages, canNext(), canPrevious()];
        }
    }
    /**
     * 是否可触发上一页翻页
     */
    const canPrevious = () => {
        return currentIndex > 1
    }
    /**
     * 上一页
     */
    const previous: NextAndPreviousFn = () => {
        if (canPrevious()) {
            currentIndex--;
            return [fn(currentIndex), canNext(), canPrevious()];
        } else {
            return [currentPages, canNext(), canPrevious()];
        }
    }
    return [[fn(currentIndex), canNext(), canPrevious()], next, previous];
}
