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
    if (!args || args.length === 0) return '';
    // 避免非法输入
    const _args = args.filter(arg => arg && typeof arg === 'string');
    const isWins = _args.join('').includes('\\'); // 是否是 windows 路径
    const sep = isWins ? '\\' : '/';
    const slcharCode = isWins ? 92 : 47; // `\` 的 charCode 是 92，`/` 是 47
    const upDir = /[\\/]+[^\\.\\/]*[\\/]+\.\./; // 匹配上级目录（../）..\\的正则
    const cwDir = /[\\/]\.[\\/]/; // 匹配当前目录（./） .\\的正则

    let x = _args.length,
        b = _args[x - 1],
        p = b.charCodeAt(b.length - 1) === slcharCode ? sep : '' // 最后一个参数是否有斜杠

    while (x--) {
        b = args[x]
        p = (!x || b.charCodeAt(0) === slcharCode ? '' : sep)
            + (b.charCodeAt(b.length - 1) === slcharCode ? b.slice(0, -1) : b)
            + p;
    }

    while (upDir.test(p)) p = p.replace(upDir, '');
    while (cwDir.test(p)) p = p.replace(cwDir, sep);


    //begin 截断多余的 `..`，确保不会超出根目录
    const root = isWins ? /^[a-zA-Z]:[\\/]/ : /^[\\/]/; // Windows 或 POSIX 根路径匹配
    const escapedSep = sep.replace(/([\\\^\$\.\*\+\?\|\(\)\[\]\{\}])/g, '\\$1');
    const extraUpDir = new RegExp(`(?:^|${escapedSep})\\.\\.(?:${escapedSep}|$)`, 'g'); // 转义后的 sep
    if (root.test(p)) {
        while (extraUpDir.test(p)) {
            p = p.replace(extraUpDir, '');
        }
        // 如果路径为空，则保留根路径
        if (!p || p === sep) p = isWins ? (p.match(root)?.[0] || '') : '/';
    }

    // 去掉多余的尾部分隔符（保留根路径的单个分隔符）
    if (p.length > 1 && p.charCodeAt(p.length - 1) === slcharCode) {
        p = p.slice(0, -1);
    }
    //end 截断多余的 `..`

    return p;
};

/**
 * 替换域名
 * @param url
 * @param target
 */
export const replaceDomain = (url: string, target?: string): string => {
    if (url.startsWith('http') || url.startsWith('//')) {
        return pathJoin(target || '/', url.split('/').splice(3).join('/'))
    }
    return url;
};


