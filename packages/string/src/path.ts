/**********************************************************************
 *
 * @模块名称: path
 *
 * @模块用途: path  路径拼接
 *
 * @date: 2021/9/1 13:55
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export const pathJoin = (...args: string[]): string => {
    if (args?.length) {
        const paths: string[] = [];
        args.forEach((arg) => {
            paths.push(...arg.split('/'));
        });
        const newPaths = paths.filter(s => s !== '');
        if (newPaths[0].startsWith('http')) {
            newPaths[0] = `${newPaths[0]}/`
        } else {
            newPaths[0] = `/${newPaths[0]}`
        }
        return newPaths.join('/');
    }
    // @ts-ignore
    return ''
};

/**
 * 替换域名
 * @param url
 * @param target
 */
export const replaceDomain = (url: string, target?: string): string => {
    if (url.startsWith('http')) {
        return pathJoin(target || '/', url.split('/').splice(3).join('/'))
    }
    return url;
}