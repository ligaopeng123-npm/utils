const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
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
                    filter: (resourcePath) => {
                        // copy md文件到docs文件中
                        if ((resourcePath.endsWith('.md') || resourcePath.endsWith('.MD')) && !resourcePath.includes('node_modules')) {
                            return true;
                        }
                        return false;
                    },
                },
            ]
        })
    ]
};
