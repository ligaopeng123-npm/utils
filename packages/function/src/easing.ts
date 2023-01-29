/**********************************************************************
 *
 * @模块名称: easing
 *
 * @模块作用: easing 缓动函数
 *
 * @创建人: pgli
 *
 * @date: 2023/1/29 7:28 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isFunction } from "@gaopeng123/utils.types";

export type EasingType = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut'
    | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut'
    | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut'
    | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut'
    | 'circularIn' | 'circularOut' | 'circularInOut' | 'elasticIn' | 'elasticOut'
    | 'elasticInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut'
    | 'bounceInOut';

// https://echarts.apache.org/examples/zh/editor.html?c=line-easing
export const easingFuncs: {
    [propsName in EasingType]: (v: number) => number;
} = {
    linear: function (k: number): number {
        return k;
    },
    quadraticIn: function (k: number): number {
        return k * k;
    },
    quadraticOut: function (k: number): number {
        return k * (2 - k);
    },
    quadraticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function (k: number): number {
        return k * k * k;
    },
    cubicOut: function (k: number): number {
        return --k * k * k + 1;
    },
    cubicInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function (k: number): number {
        return k * k * k * k;
    },
    quarticOut: function (k: number): number {
        return 1 - (--k * k * k * k);
    },
    quarticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
        }
        return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function (k: number): number {
        return k * k * k * k * k;
    },
    quinticOut: function (k: number): number {
        return --k * k * k * k * k + 1;
    },
    quinticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function (k: number): number {
        return 1 - Math.cos(k * Math.PI / 2);
    },
    sinusoidalOut: function (k: number): number {
        return Math.sin(k * Math.PI / 2);
    },
    sinusoidalInOut: function (k: number): number {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function (k: number): number {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function (k: number): number {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function (k: number): number {
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function (k: number): number {
        return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function (k: number): number {
        return Math.sqrt(1 - (--k * k));
    },
    circularInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    elasticOut: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    },
    elasticInOut: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        if ((k *= 2) < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

    },

    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
    backIn: function (k: number): number {
        let s = 1.70158;
        return k * k * ((s + 1) * k - s);
    },
    backOut: function (k: number): number {
        let s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function (k: number): number {
        let s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },

    // 创建弹跳效果
    bounceIn: function (k: number): number {
        return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function (k: number): number {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        } else {
            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
        }
    },
    bounceInOut: function (k: number): number {
        if (k < 0.5) {
            return easingFuncs.bounceIn(k * 2) * 0.5;
        }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
};

/**
 * 添加动画能力
 **/
type AnimateConfig = {
    duration?: number;
    easing?: EasingType | any;
    afterAnimate: ()=> void;
}

type AnimateFnReturn = {
    clear: ()=> void;
}

export const animate = (callBack: (v: number)=> void, config: AnimateConfig): AnimateFnReturn => {
    let start = 0;
    let startTime = Date.now();
    let handlerId: any;
    const {duration, easing, afterAnimate} = Object.assign({
        duration: 1000,
        easing: 'linear'
    }, config);

    const easingFn = isFunction(easing) ? easing : easingFuncs[easing as EasingType];

    /**
     *  动画执行函数
     */
    const step = function() {
        // 时间递增
        start += (Date.now() - startTime);
        // 如果还没有运动到位，继续
        startTime = Date.now();
        if (start <= duration) {
            callBack(easingFn(start / duration));
            handlerId = requestAnimationFrame(step);
        } else {
            // 动画结束，返回一个1 避免计算不准 这里可以插入执行结束回调
            callBack(1);
            if (isFunction(afterAnimate)) {
                afterAnimate();
            }
        }
    };
    // 开始执行动画
    step();

    return {
        clear: ()=> {
            cancelAnimationFrame(handlerId)
        }
    }
}