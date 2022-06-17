const path = require("path");
const {copyFiles, getFiles, readFiles, readFile, getNewFile, writeFile, getFilePath} = require("./bin/file");
const {getMDFile} = require("./bin/http");
const {join} = require("path");
const {markdownIframe} = require("./markdowniframe.cjs.development");
/**
 * 文件copy 将md文件爬出来 放到docs中 提高访问速度 网速好的话 可以全量处理
 */
// copyFiles(path.resolve(__dirname, 'document'), path.resolve(__dirname, 'docs')).then(() => {
//    writeJob();
// });

const job = () => {
    const files = getFiles(path.resolve(__dirname, 'document/md'));
    readFiles(files, async (data, currentPath) => {
        // 获取md文件内容
        const _data = data.toString();
        if (_data.includes('[filename]')) {
            // 截取文件的引用地址
            const mdPath = _data.replace('[filename](', '').replace(" ':include')", '');
            // 获取引用内容
            const file = await getMDFile(mdPath);
            // 写入引用内容
            const newFilePath = getNewFile(currentPath);
            // 写入文件
            await writeFile(newFilePath, file);
            // 修改引入的路径
            const newMdPath = `./${path.basename(newFilePath)}`;
            // 获取当前文档内容
            const domPath = getFilePath(currentPath);
            const domData = await readFile(domPath);
            if (domData.toString().includes('https')) {
                await writeFile(domPath, `[filename](${newMdPath} ':include')`);
            }
        }
    }).then(() => {
        console.info(`处理成功`);
    }).catch((err) => {
        console.log(err)
    });
}

const writeJob = ()=> {
    const mi = new markdownIframe({path: join(__dirname, './docs/md/cli')});
    mi.run()
        .then(data => {
            console.log('data', data);
        }).catch((err) => {
            console.error(err);
        });
    }



let time = 0;
writeJob();
const timmer = setInterval(()=> {
    writeJob();
    time ++;
    if (time > 100) {
        clearInterval(timmer);
    }
}, 5000)
