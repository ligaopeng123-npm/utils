/**********************************************************************
 *
 * @模块名称: convert
 *
 * @模块用途: convert  图片类型转换
 *
 * @date: 2022/1/27 11:53
 *
 * @版权所有: pgli
 *
 **********************************************************************/
/**
 * 将file类型转blob类型
 * @param file
 */
export const file2Blob = (file: File): Blob => {
    return new Blob([file]); // 文件转化成二进制文件
}
/**
 *
 * file累着转blob 然后转url直接显示
 * @param file
 */
export const file2Url = (file: File) => {
    return URL.createObjectURL(file2Blob(file)); //转化
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
export const blob2File = (theBlob: any, fileName: any) => {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
};

/**
 * base64转file类型
 * @param dataurl
 */
export const base642File = (base64: string): File => {
    return blob2File(base642Blob(base64), Date.now())
};
/**
 * 文件转base64
 * @param blob
 */
export const blob2Base64 = (blob: Blob): Promise<any> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        //将文件读取为 DataURL
        reader.readAsDataURL(blob);
        //文件读取完成时触发
        reader.onload = (event) => {
            //获取base64流
            const base64_str = event.target.result;
            resolve(base64_str);
        }
    });
}
