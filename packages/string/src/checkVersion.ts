/**********************************************************************
 *
 * @模块名称: checkVersion
 *
 * @模块作用: checkVersion
 *
 * @创建人: pgli
 *
 * @date: 2024/4/24 9:56 上午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 检查版本号大小
 * @param currentVersion
 * @param newVersion
 */
export const checkVersion = (currentVersion: string, newVersion: string) => {
    // 将版本号字符串转换为数字数组，便于比较
    const currentVersionArray = currentVersion.split('.').map(Number);
    const newVersionArray = newVersion.split('.').map(Number);

    if (currentVersionArray.length < newVersionArray.length) {
        return true;
    }

    // 比较主版本号、次版本号和修订版本号
    for (let i = 0; i < currentVersionArray.length; i++) {
        if (currentVersionArray[i] < newVersionArray[i]) {
            return true;
        }
    }
    return false;
}