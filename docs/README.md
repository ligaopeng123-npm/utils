## 介绍

> [!NOTE]
> **@gaopeng123/ 。工具包文档整理**

## 共

> @gaopeng123/utils
>
>[工具类函数](README)

> @gaopeng123/fetch
>
>[fetch封装](md/fetch)

> @gaopeng123/hooks
>
>[常用hooks整理](md/hooks)

> @gaopeng123/hoc
>
>[常用高阶组件](md/hoc)

> Web Components
>
> [login-module](md/login-module)

> @gaopeng123/screen
>
> [大屏组件](md/screen)

> @gaopeng123/rtc-cli
>
> [rtc-cli](md/rtc-cli)

> @gaopeng123/browser
>
>[浏览器检测升级插件](md/browser)

<!--
{
    html: '<div id="demoA">demoA</div>'
}
-->

````js
document.getElementById('demoA').innerHTML = 'change demoA text'
````

<!--
{
    html: '<div id="utils-uuid">uuid()</div>'
}
-->

````js
import {uuid} from "https://unpkg.com/@gaopeng123/utils/dist/utils.esm.js";
document.getElementById('utils-uuid').innerText = uuid();
````
<!--
{
    html: '<div id="utils-uuid2">uuid()</div>'
}
-->
````typescript
import {uuid} from "https://unpkg.com/@gaopeng123/utils/dist/utils.esm.js";
document.getElementById('utils-uuid2').innerText = uuid();
````