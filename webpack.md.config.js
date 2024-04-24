const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const lernaJson = require('./lerna.json');
// 当前的版本
console.log(lernaJson.version.split('-')[0]);
const checkMd = (resourcePath) => {
    // copy md文件到docs文件中
    if ((resourcePath.endsWith('.md') || resourcePath.endsWith('.MD')) && !resourcePath.includes('node_modules')) {
        return true;
    }
    return false;
}
const mdList = [
    // hooks
    {
        from: path.join(__dirname, '../hooks', 'packages'),
        to: path.join(__dirname, 'document/md/hooks'),
        toType: 'dir',
        filter: checkMd,
    },
    {
        from: path.join(__dirname, '../hooks/README.md'),
        to: path.join(__dirname, 'document/md/hooks'),
        toType: 'dir',
        filter: checkMd,
    },
    // web-components
    {
        from: path.join(__dirname, '../web-components-repo', 'packages'),
        to: path.join(__dirname, 'document/md/components'),
        toType: 'dir',
        filter: checkMd,
    },
    // web-components 根目录
    {
        from: path.join(__dirname, '../web-components-repo/README.md'),
        to: path.join(__dirname, 'document/md/components'),
        toType: 'dir',
        filter: checkMd,
    },
    // fetch
    {
        from: path.join(__dirname, '../fetch/README.md'),
        to: path.join(__dirname, 'document/md/cli/fetch'),
        toType: 'dir',
        filter: checkMd,
    },
    // rtc-cli
    {
        from: path.join(__dirname, '../rtc-cli/README.md'),
        to: path.join(__dirname, 'document/md/cli/rtc-cli'),
        toType: 'dir',
        filter: checkMd,
    },
    // hoc
    {
        from: path.join(__dirname, '../hoc/README.md'),
        to: path.join(__dirname, 'document/md/cli/hoc'),
        toType: 'dir',
        filter: checkMd,
    }
]
module.exports = {
    // 避免
    entry: './document.js',
    mode: "production",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'packages'),
                    to: path.join(__dirname, 'document/src'),
                    toType: 'dir',
                    filter: checkMd,

                },
                // todo 如果从git拉取 则不用从本地拉取【git上太慢了】
                ...mdList
            ].map((item)=> {
                return {
                    ...item,
                    globOptions: { ignore: ['**/node_modules/**', '**/dist/**'] }
                }
            })
        })
    ]
};
