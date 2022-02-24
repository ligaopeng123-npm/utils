/**********************************************************************
 *
 * @模块名称: getLength
 *
 * @模块用途: getLength
 *
 * @date: 2021/8/18 8:27
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isArray, isObject, isString} from "@gaopeng123/utils.types";

export const length = (val: any): number => {
	if (isObject(val)) {
		return Object.keys(val).length;
	} else if (isArray(val) || isString(val)) {
		return val.length;
	} else {
		return 0;
	}
};
