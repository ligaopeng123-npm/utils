/**********************************************************************
 *
 * @模块名称: http
 *
 * @模块用途: http
 *
 * @date: 2022/3/2 13:11
 *
 * @版权所有: pgli
 *
 **********************************************************************/
const https = require('https');

const getMDFile = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, {timeout: 60000}, (response) => {
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
    })
}

module.exports = {
    getMDFile
}
