<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [types](#types)
    - [date](#date)
    - [browser](#browser)
    - [browser version](#browser-version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### types

##### date

| 函数名        | 作用                                       |
| ------------- | ------------------------------------------ |
| isObject      | 判断对象                                   |
| isArray       | 判断数组                                   |
| isPromise     | 判断Promise                                |
| isFunction    | 判断函数                                   |
| isNumber      | 判断数字                                   |
| isBoolean     | 判断boolean                                |
| isUndefined   | 判断undefined                              |
| isString      | 判断string                                 |
| isElement     | 判断element                                |
| isDate        | 判断是否是Date类型                         |
| isEqualByObj  | 判断对象是否相等（包括各个属性）           |
| isEmptyObject | 判断是否是空对象                           |
| isEmpty       | 判断是否是空 null undefined '' [] 都为true |
| isJSON        | 判断是否为合法的可格式化的json字符串       |

##### browser

| 函数名    | 作用                                                |
| --------- | --------------------------------------------------- |
| isChrome  | chrome浏览器                                        |
| isFirefox | 火狐浏览器                                          |
| isWebKit  | WebKit内核                                          |
| isSafari  | Safari                                              |
| isOpera   | Opera                                               |
| isGecko   | Gecko                                               |
| isWindows | 是否是Windows系统                                   |
| isMac     | Mac系统                                             |
| isLinux   | Linux系统                                           |
| isMobile  | 移动端设备 Android、webOS、iPhone、iPod、BlackBerry |
| isStrict  | 是否是严格模式                                      |
| isSecure  | 是否是https访问                                     |

##### browser version

| 函数名         | 作用           |
| -------------- | -------------- |
| chromeVersion  | 返回值为number |
| firefoxVersion | 返回值为number |
| ieVersion      | 返回值为number |
| operaVersion   | 返回值为number |
| safariVersion  | 返回值为number |
| webKitVersion  | 返回值为number |
