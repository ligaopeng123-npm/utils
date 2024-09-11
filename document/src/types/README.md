# types

## data

| 函数名                                | 作用                                                        |
| ------------------------------------- | ----------------------------------------------------------- |
| isObject                              | 判断对象                                                    |
| isArray                               | 判断数组                                                    |
| isSparseArray | 是否是稀疏数组 |
| isPromise                             | 判断Promise                                                 |
| isAsync <span class="new">New 1.1.19+ </span> | 判断是否是async函数 |
| isFunction                            | 判断函数                                                    |
| isNumber                              | 判断数字                                                    |
| isBoolean                             | 判断boolean                                                 |
| isTrue                                | true “true” 皆返回true                                      |
| isFalse                               | false “false” 皆返回false                                   |
| isUndefined                           | 判断undefined                                               |
| isNull                                | 判断null                                                    |
| isString                              | 判断string                                                  |
| isHasDom | 判断是否可以使用dom对象                                     |
| isElement                             | 判断element                                                 |
| isDate                                | 判断是否是Date类型                                          |
| isUTC                                 | 判断字符串是否是UTC格式                                     |
| isEqualByObj                          | 判断对象是否相等（包括各个属性）                            |
| isEqual                               | 判断数据是否相等，主要用于判断 1 = '1',  true = 'true' 场景 |
| isEmptyObject                         | 判断是否是空对象                                            |
| isEmpty                               | 判断是否是空 null undefined '' [] {} 都为true               |
| isJSON                                | 判断是否为合法的可格式化的json字符串                        |
| isBuffer                              | 判断是否是buffer类型                                        |
| isFormData                            | 判断是否是formData类型                                      |
| isFile                                | 判断是否是file类型                                          |
| isBlob                                | 判断是否是blob类型                                          |
| isStream                              | 判断是否是stream流                                          |
| isURLSearchParams                     | 判断是否是URLSearchParams类型                               |
| isFocus <span class="new">New 1.1.15+</span>  | 判断是否聚焦                                                |
| isUrl <span class="new">New 1.1.15+</span>    | 判断是否是合法url                                           |

## browser

| 函数名                                    | 作用                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| isChrome                                  | chrome浏览器                                                 |
| isFirefox                                 | 火狐浏览器                                                   |
| isWebKit                                  | WebKit内核                                                   |
| isSafari                                  | Safari                                                       |
| isOpera                                   | Opera                                                        |
| isGecko                                   | Gecko                                                        |
| isWindows                                 | 是否是Windows系统                                            |
| isMac                                     | Mac系统                                                      |
| isLinux                                   | Linux系统                                                    |
| isMobile                                  | 移动端设备 Android、webOS、iPhone、iPod、BlackBerry          |
| isIOS                                     | 移动端设备 iPhone、iPod                                      |
| isAndroid                                 | 移动端设备 Android                                           |
| isStrict                                  | 是否是严格模式                                               |
| isSecure                                  | 是否是https访问                                              |
| isNodejs                                  | 是否是node运行环境                                           |
| isBrowser                                 | 是否是浏览器运行环境                                         |
| isWX                                      | 是否在微信中运行                                             |
| getPlatform                               | 获取终端信息{ browser: string, operatingSystem: string } 操作系统和浏览器 |

## browser version

| 函数名         | 作用           |
| -------------- | -------------- |
| chromeVersion  | 返回值为number |
| firefoxVersion | 返回值为number |
| ieVersion      | 返回值为number |
| operaVersion   | 返回值为number |
| safariVersion  | 返回值为number |
| webKitVersion  | 返回值为number |
