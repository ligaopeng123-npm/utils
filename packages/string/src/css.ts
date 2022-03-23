/** ********************************************************************
 *
 * @模块名称: css
 *
 * @模块用途: css
 *
 * @date: 2022/3/21 16:50
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
/**
 * 添加box尺寸单位  [em px % rem vw vh vmax vmin ex]
 * @param size
 */
export const addBoxSizeUnit = (size: string | number): string => {
    const units = ['em', 'px', '%', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'ex'];
    const sizeStr = (size + '').replace(/;/, '').trim();
    for (let key of units) {
        if (sizeStr.endsWith(key)) {
            return sizeStr;
        }
    }
    return `${size}px`;
}
