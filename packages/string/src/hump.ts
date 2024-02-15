/**********************************************************************
 *
 * @模块名称: hump
 *
 * @模块用途: hump  驼峰转换
 *
 * @date: 2022/2/8 8:52
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 驼峰命名转连字符
 */
export const hump2hyphen = (hump: string) => {
    return hump.trim().replace(/([A-Z])/g, "-$1").toLowerCase();
}
/**
 * 连字符命名转驼峰
 */
export const hyphen2hump = (hyphen: string) => {
    return hyphen.trim().replace(/\-(\w)/g, (all: string, letter: string) => {
        return letter.toUpperCase();
    });
}
/**
 * 转小驼峰
 */
export const lowerCamelCase = hyphen2hump;
/**
 * 转大驼峰
 */
export const upperCamelCase = (str: string) => {
    const _s = hyphen2hump(str);
    return _s[0].toUpperCase() + _s.substring(1);
}
