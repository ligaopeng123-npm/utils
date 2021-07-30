/**********************************************************************
 *
 * @模块名称: download
 *
 * @模块用途: 下载函数
 *
 * @date: 2021/7/30 8:47
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {isObject} from "../types";

/**
 * @params  需要拼接的参数
 *  拼接url地址参数
 *  urlJoinParmas({name:'zhangsan'})
 */
export interface urlJoinParmasPatams {
	[propName: string]: any
}

export const urlJoinParmas = (parmas?: urlJoinParmasPatams): string => {
	let count = 1;
	if (isObject(parmas)) {
		let str = `?`;
		for (let i in parmas) {
			const concatSymbol = count > 1 ? '&' : '';
			str += `${concatSymbol}${i}=${parmas[i]}`;
			count++;
		}
		return str;
	} else {
		return '';
	}
};
/**
 * 下载函数 文件需在服务端存在
 * @param url
 * @param {string} name
 */
export declare type downloadParams = {
	url?: string, // uri地址
	fileName?: string, // 文件名
	blob?: string | Blob, // blob地址
	parmas?: any, // 请求参数
}

export const download = ({url, fileName, blob, parmas}: downloadParams): void | Error => {
	if (!url && !blob) return new Error('url or blob is undefined');
	const href = blob ? URL.createObjectURL(blob) : url + urlJoinParmas(parmas);
	const elt = document.createElement('a');
	elt.setAttribute('href', href);
	elt.setAttribute('download', fileName || 'default');
	elt.style.display = 'none';
	document.body.appendChild(elt);
	elt.click();
	document.body.removeChild(elt);
	if (blob) URL.revokeObjectURL(href);
};

/**
 * 文档流下载函数 建议使用此方式进行下载 服务端不需要保存冗余文件
 * downloadStream({url:'', options: {body: ''},fileName: ''})
 */
export declare type downloadStreamParams = {
	url: string; // uri地址
	options?: any; // fetch参数
	fileName?: string; // 文件名
}
export const downloadStream = ({url, options, fileName}: downloadStreamParams): void => {
	fetch(url, Object.assign({responseType: 'blob'}, options)).then((res: any) => {
		const blob = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});
		download({blob: blob, fileName: fileName});
	});
};