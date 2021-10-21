/**********************************************************************
 *
 * @模块名称: monad
 *
 * @模块用途: monad
 *
 * @date: 2021/8/6 10:27
 *
 * @版权所有: pgli
 *
 **********************************************************************/
type Fn = (...args: any) => any

class Monad {
	value: any = null;
	
	constructor(v: any) {
		this.value = v;
	}
	
	static of = function (v: any) {
		return new Monad(v);
	};
	map = (fn: Fn) => {
		return Monad.of(fn(this.value));
	};
	join = (): any => {
		if (!(this.value instanceof Monad)) return this.value;
		return this.value.join();
	};
	
	chain = (fn: Fn) => {
		return fn(this.join())
	};
}

export default Monad;
