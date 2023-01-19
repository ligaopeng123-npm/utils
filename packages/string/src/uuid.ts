/**********************************************************************
 *
 * @模块名称: uuid
 *
 * @模块用途: uuid
 *
 * @date: 2021/8/13 14:54
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isBrowser } from "@gaopeng123/utils.types";

/**
 * 获取uuid方法 用于做唯一标识时使用
 * @param {number} len  id的长度  默认64位
 * @param {number} radix  数据基数你2 10 16等  默认62位全部正常字符
 * @returns {string}
 */
export type UuidFn = (len?: number, radix?: number) => string;
const uuid: UuidFn = (len = 64, radix = 62): string => {
	// 优先使用crypto
	if (isBrowser() && window.crypto) {
		// @ts-ignore
		const uuidStr = crypto.randomUUID();
		if (uuidStr) return crypto.randomUUID();
	}
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	const uuid = [];
	let i;
	radix = radix || chars.length;

	if (len) {
		// Compact form
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {
		// rfc4122, version 4 form
		let r;

		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';

		// Fill in random data. At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return uuid.join('');
};

export default uuid;
