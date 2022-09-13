const path = require("path");
const {copyFiles} = require("./bin/file");
const {join} = require("path");
const {markdownIframe} = require("./markdowniframe.cjs.development");
/**
 * 文件copy 将md文件爬出来 放到docs中 提高访问速度 网速好的话 可以全量处理
 */
// copyFiles(path.resolve(__dirname, 'document'), path.resolve(__dirname, 'docs')).then(() => {
//     writeJob();
// });
/**
 * 将文档写入
 */
const writeJob = () => {
    // cli components hooks
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
const timmer = setInterval(() => {
    writeJob();
    time++;
    if (time > 100) {
        clearInterval(timmer);
    }
}, 5000)
