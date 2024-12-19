/**********************************************************************
 *
 * @模块名称: ResponseMonad
 *
 * @模块用途: ResponseMonad  响应值包裹 避免出错
 *
 * @date: 2021/8/6 10:34
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { Monad } from "./monad";
import {compose} from "../compose";

type Fn = (...args: any[]) => any;

export type TypeError = 0 | 1;

enum Error {
	// 数据解析错误
	DataError = 0,
	// map执行错误
	TypeError = 1,
}

export class ResponseMonad {
	value: any; // 保存当前值
	// 保存map数据函数
	readonly mapCallbacks: Array<Fn> = [];
	// 保存异常捕获函数
	readonly catchCallbacks: Array<Fn> = [];
	// 副作用函数 用于数据值得判断
	readonly effectCallbacks: Array<Fn> = [];
	
	constructor(v: any) {
		this.value = Monad.of(v);
	}
	
	/**
	 * 接收副作用函数
	 * @param fn
	 */
	effect = (fn: Fn) => {
		this.effectCallbacks.push(fn);
		return this;
	};
	
	static of = function (v: any) {
		return new ResponseMonad(v);
	};
	
	map = (fn: Fn) => {
		this.mapCallbacks.push(fn);
		return this;
	};
	
	/**
	 * 数据平铺
	 * @param defaultVale 提供默认值
	 */
	join = () => {
		try {
			return compose(...this.mapCallbacks)(this.value.join());
		} catch (e) {
			compose(...this.catchCallbacks)(Error.TypeError, e);
		}
	};
	/**
	 * 压平数据 不做LHS赋值
	 * @param fn
	 */
	chain = (fn: Fn) => {
		/**
		 * 利用事件循环机制 延迟事件的执行顺序
		 */
		new Promise((resolve) => {
			resolve(true);
		}).then(() => {
			if (this.effectCallbacks.length) {
				const v = this.value.join();
				if (compose(...this.effectCallbacks)(v)) {
					fn(this.join());
				} else {
					compose(...this.catchCallbacks)(Error.DataError, v);
				}
			} else {
				fn(this.join());
			}
		});
		return this;
	};
	/**
	 * 异常捕获
	 * @param fn
	 */
	catch = (fn: (type: TypeError, msg: any) => any) => {
		this.catchCallbacks.push(fn);
		return this;
	}
}
