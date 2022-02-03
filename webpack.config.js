const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: '.',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src'),
                    to: path.join(__dirname, 'docs/src'),
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
