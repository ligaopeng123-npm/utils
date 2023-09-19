const {copyFiles} = require("./bin/file");
const path = require("path");
/**
 * 文件copy 将md文件爬出来 放到docs中 提高访问速度 网速好的话 可以全量处理
 */
copyFiles(path.resolve(__dirname, 'document'), path.resolve(__dirname, 'docs')).then(() => {
});
