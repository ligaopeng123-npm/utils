/**********************************************************************
 *
 * @模块名称: escape
 *
 * @模块作用: escape
 *
 * @创建人: pgli
 *
 * @date: 2024/4/24 3:48 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
export const escape = (str: string) => {
    return str.replace(/[&<>"']/g, function (match) {
        const htmlEscapes: any = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };
        return htmlEscapes[match];
    });
}