/**********************************************************************
 *
 * @模块名称: map
 *
 * @模块用途: map  过滤对象
 *
 * @date: 2021/10/27 19:23
 *
 * @版权所有: pgli
 *
 **********************************************************************/
type ObjectCallBack = (currentVal?: any, index?: number, obj?: any) => any;
type FilterObjectCallBack = (currentVal?: any, index?: number, obj?: any) => boolean;
export const filterObject = (obj: any, callback?: FilterObjectCallBack) => {
    let index = 0;
    const newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (callback) {
            const callBackVal = callback(newObj[key], index, obj);
            if (callBackVal === false) {
                delete newObj[key];
            }
        }
        index++;
    }
    return newObj;
};

/**
 * 对象的forEach过滤
 * @param obj
 * @param callback
 */
export const forEachObject = (obj: any, callback?: ObjectCallBack) => {
    let index = 0;
    const newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (callback) {
            const callBackVal = callback(newObj[key], index, obj);
            newObj[key] = callBackVal;
        }
        index++;
    }
    return newObj;
};

/**
 * 对象的map过滤
 * @param obj
 * @param callback
 */
export const mapObject = (obj: any, callback?: ObjectCallBack) => {
    let index = 0;
    for (let key in obj) {
        if (callback) {
            const callBackVal = callback(obj[key], index, obj);
            obj[key] = callBackVal;
        }
        index++;
    }
    return obj;
};
