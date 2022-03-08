const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    // 避免
    entry: './document.js',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'packages'),
                    to: path.join(__dirname, 'docs/document'),
                    toType: 'dir',
                    filter: (resourcePath) => {
                        // copy md文件到docs文件中
                        if (resourcePath.endsWith('.md') || resourcePath.endsWith('.MD')) {
                            return true;
                        }
                        return false;
                    },
                },
            ]
        })
    ]
};
