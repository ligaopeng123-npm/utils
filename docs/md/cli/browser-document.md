### 检测浏览器版本，并提供下载链接
#### demo
```typescript
import {checkBrowser} from '@gaopeng123/browser';

checkBrowser('app-key', {chrome: {
    minimumVersion: 90,
    upgradeLink: 'http://***'
}});
```
#### 参数
##### appkey: string
`应用标识，保存用户选择最后选择，建议使用随机数`

##### options: Options
`非必填，默认参数如下`
```typescript
const defaultOptions = {
    chrome: {
        // 最低版本
        minimumVersion: 80,
        // 下载链接
        upgradeLink: 'http://chrome.illzjp.cn/dl.html',
        choose: {
            nextTime: true, // 是否提示下次再说
            never: true, // 是否提示不想更新
        }
    },
    firefox: {
        minimumVersion: 80,
        upgradeLink: 'https://download-ssl.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe',
        choose: {
            nextTime: true, // 是否提示下次再说
            never: true, // 是否提示不想更新
        }
    }
}
```