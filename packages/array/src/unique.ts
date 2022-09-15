/** ********************************************************************
 *
 * @模块名称: unique
 *
 * @模块用途: unique
 *
 * @date: 2022/9/15 11:34
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
type UniqueArray = {
    [propsName: string]: any
}

export const uniqueArrByKey = <T>(arr: Array<T>, key: string): Array<T> => {
    if (arr.length === 0) return
    const list: Array<any> = [];
    const map: any = {}
    arr.forEach((item: UniqueArray) => {
        if (!map[item[key]]) {
            map[item[key]] = item;
            list.push(item);
        }
    })
    return list;
}
