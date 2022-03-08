/**********************************************************************
 *
 * @模块名称: file
 *
 * @模块用途: file
 *
 * @date: 2022/3/2 13:14
 *
 * @版权所有: pgli
 *
 **********************************************************************/
const fs = require('fs');
const path = require('path');
const fst = require('fs-extra');
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
        const filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        const stats = fs.statSync(filedir);
        const isFile = stats.isFile();//是文件
        const isDir = stats.isDirectory();//是文件夹
        if (isFile) {
            fileList.push(filedir);
        }
        if (isDir) {
            findFilePath(filedir, fileList); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    });
}

/**
 * 获取文件目录
 * @param filePath
 * @return {*[]}
 */
const getFiles = (filePath) => {
    const fileList = [];
    findFilePath(filePath, fileList);
    return fileList;
}

// const files = getFiles("D:\\code\\npm\\utils\\docs\\md");

/**
 * copy文件
 * @param source
 * @param destination
 * @return {Promise<unknown>}
 */
const copyFiles = (source, destination) => {
    return new Promise((resolve, reject) => {
        fst.copy(source, destination, function (err) {
            if (err) {
                reject(err)
            }
            resolve(true);
        })
    })
}
/**
 * 文件读取
 * @param path
 * @return {Promise<unknown>}
 */
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data)
        });
    })
}

const readFiles = async (paths, callBack) => {
    for (let i = 0; i < paths.length; i++) {
        const data = await readFile(paths[i]);
        await callBack(data, paths[i]);
    }
}

const writeFile = (path, data) => {
    // 目录不存在 则创建
    return fst.outputFile(path, data)
}

const getFilePath = (currentPath) => {
    return currentPath.replace('docs', 'document')
}

const getNewFile = (currentPath) => {
    return getFilePath(currentPath).replace('.md', '-document.md');
}

module.exports = {
    getFiles,
    copyFiles,
    readFile,
    readFiles,
    writeFile,
    getNewFile,
    getFilePath
}
