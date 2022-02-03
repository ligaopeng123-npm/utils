/**********************************************************************
 *
 * @模块名称: convert
 *
 * @模块用途: convert  数据类型转换
 *
 * @date: 2022/1/27 11:53
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 *
 * file累着转blob 然后转url直接显示
 * @param file
 */
export const file2Url = (file: File) => {
    const blob = new Blob([file]); // 文件转化成二进制文件
    const url = URL.createObjectURL(blob); //转化
    return url;
};

/**
 * base64 转blob
 * @param dataurl
 */
export const base642Blob = (dataurl: string) => {
    let arr: any = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
};

/**
 * blob转file
 * @param theBlob
 * @param fileName
 */
export const blobToFile = (theBlob: any, fileName: any) => {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
};

/**
 * base64转file类型
 * @param dataurl
 */
export const base642File = (base64: string): File => {
    return blobToFile(base642Blob(base64), Date.now())
};
