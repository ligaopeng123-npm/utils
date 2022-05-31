// welcome to imooc.com
'use strict';Object.defineProperty(exports,'__esModule',{value:true});var tslib=require('tslib'),https=require('https'),fsExtra=require('fs-extra'),fs=require('fs'),path=require('path');/**
 * 根据URL地址 获取远程文件
 * @param url
 */
const getFile = (uri) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        https.get(uri, { timeout: 60000 }, (response) => {
            let todo = '';
            // called when a data chunk is received.
            response.on('data', (chunk) => {
                todo += chunk;
            });
            // called when the complete response is received.
            response.on('end', () => {
                resolve(todo);
            });
        }).on("error", (error) => {
            reject("Error: " + error.message);
        });
    });
});
const getMdFileFromGitRaw = getFile;/**
 * 文件写入
 * @param path
 */
const readFile = (path) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fsExtra.readFile(path, (err, data) => {
            if (err) {
                reject(err);
                throw err;
            }
            else {
                resolve(data);
            }
        });
    });
});
/**
 * 文件写入
 * @param path
 * @param data
 */
const writeFile = (path, data) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fsExtra.outputFile(path, data, (err) => {
            if (err) {
                reject(err);
                throw err;
            }
            else {
                resolve(true);
            }
        });
    });
});
/**
 * 查找文件路径
 * @param filePath
 * @param fileList
 */
const findFilePath = (filePath, fileList) => {
    const files = fs.readdirSync(filePath);
    //遍历读取到的文件列表
    files.forEach((filename, index) => {
        //获取当前文件的绝对路径
        const dirPath = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        const stats = fs.statSync(dirPath);
        const isFile = stats.isFile(); //是文件
        const isDir = stats.isDirectory(); //是文件夹
        if (isFile) {
            fileList.push(dirPath);
        }
        if (isDir) {
            findFilePath(dirPath, fileList); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    });
};
/**
 *查找dir目录下的文件
 * @param dirPath
 */
const findFileList = (dirPath) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        try {
            const fileList = [];
            findFilePath(dirPath, fileList);
            resolve(fileList);
        }
        catch (e) {
            reject(e);
        }
    });
});
/**
 * 查找markdown文件的list集合
 */
const findMdFileList = (dirPath) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    const list = yield findFileList(dirPath);
    return list === null || list === void 0 ? void 0 : list.filter((itemFilePath) => {
        return itemFilePath.endsWith('.md') || itemFilePath.endsWith('.MD');
    });
});
const defaultMatchStart = "[filename](";
const defaultMatchEnd = " ':include')";
/**
 * 根据raws内容 找到复合配置的iframe链接
 */
const findGitRawList = (raw, matchStart, matchEnd) => {
    const startMatch = (matchStart || defaultMatchStart).replace('[', '\\[').replace('(', '\\(').replace(']', '\\]');
    const endMatch = (matchEnd || defaultMatchEnd).replace(')', '\\)');
    const reg = new RegExp(`(?<=(${startMatch})).*(?=(${endMatch}))`, 'g');
    return raw.matchAll(reg);
};
const findGitRawListAndContent = (raw, matchStart, matchEnd) => {
    // 处理好字符串
    const raws = [];
    for (const regExpMatchArray of raw) {
        raws.push({
            url: regExpMatchArray[0],
            matchStr: `${matchStart || defaultMatchStart}${regExpMatchArray[0]}${matchEnd || defaultMatchEnd}`,
            content: ''
        });
    }
    return raws;
};
const findIframesByRawList = (rawList, matchStart, matchEnd) => {
    return new Promise((resolve, reject) => {
        const raws = findGitRawListAndContent(rawList, matchStart, matchEnd);
        if (raws.length) {
            Promise.all(raws.map(({ url, matchStr }) => {
                return getMdFileFromGitRaw(url);
            })).then((date) => {
                date.forEach((item, index) => {
                    raws[index].content = item.toString();
                });
                resolve(raws);
            });
        }
        else {
            resolve([]);
        }
    });
};
/**
 * 获取重新组装的数据
 * @param contents
 * @param raws
 */
const getIframesByRaws = (contents, raws) => {
    for (const { matchStr, content } of raws) {
        const newMatchStr = new RegExp(matchStr
            .replace('[', '\\[').replace(']', '\\]')
            .replace('(', '\\(').replace(')', '\\)')
            .replace(/\./g, '\\.').replace(/\//g, '\\/'));
        // 替换字符串
        contents = contents.replace(newMatchStr, content);
    }
    return contents;
};
/**
 * 写入Iframe内容
 * @param _path
 */
const writeIframes = (props) => tslib.__awaiter(void 0, void 0, void 0, function* () {
    const _path = props.path;
    const { matchStart, matchEnd } = props;
    // 根据路径读取文件内容
    const contents = yield readFile(_path);
    // 根据文件内容 查找是否有iframe链接
    const raws = findGitRawList(contents.toString(), matchStart, matchEnd);
    // 根据链接去获取对应的链接内容
    const list = yield findIframesByRawList(raws, matchStart, matchEnd);
    // 查询到链接标签 说明有内容需要爬取替换 此处做写入处理
    if (list === null || list === void 0 ? void 0 : list.length) {
        for (const findIframesByRawListItem of list) {
            const newContents = getIframesByRaws(contents.toString(), list);
            yield writeFile(_path, newContents);
        }
    }
});class markdownIframe {
    constructor(props) {
        /**
         * 开始处理
         */
        this.run = () => tslib.__awaiter(this, void 0, void 0, function* () {
            // 查找文件
            const list = yield findMdFileList(this.__path);
            for (let _path of list) {
                console.log(`process ${_path} ...`);
                yield writeIframes({ path: _path, matchStart: this.__matchStart, matchEnd: this.__matchEnd });
            }
            return 'success';
        });
        this.__path = props.path;
        this.__matchStart = props.matchStart || defaultMatchStart;
        this.__matchEnd = props.matchEnd || defaultMatchEnd;
    }
    ;
}exports.findFileList=findFileList;exports.findGitRawList=findGitRawList;exports.findGitRawListAndContent=findGitRawListAndContent;exports.findIframesByRawList=findIframesByRawList;exports.findMdFileList=findMdFileList;exports.getFile=getFile;exports.getMdFileFromGitRaw=getMdFileFromGitRaw;exports.markdownIframe=markdownIframe;exports.readFile=readFile;exports.writeFile=writeFile;
// powered by sam