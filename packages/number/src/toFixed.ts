/**********************************************************************
 *
 * @模块名称: toFixed
 *
 * @模块作用: toFixed
 *
 * @创建人: pgli
 *
 * @date: 2023/7/11 9:25 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { isEmpty } from "@gaopeng123/utils.types";

const toFixed  = (num: number, fix?: number)=> {
    if (isEmpty(num)) return num;
    const factor = Math.pow(10, fix || 1);
    return Math.round(Number(num) * factor) / factor;
}

export default toFixed;
