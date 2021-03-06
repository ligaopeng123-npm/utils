# types

* [简介](README.md)
* [types](packages/utils/src/types/README.md)
    * [date](packages/utils/src/types/README.md#date)
    * [browser](packages/utils/src/types/README.md#browser)
    * [browser version](packages/utils/src/types/README.md#browser-version)
* [object](packages/utils/src/object/README.md)
  * [clone](packages/utils/src/object/README.md#clone)
    * [clone](packages/utils/src/object/README.md#clone-tval-t-t)
    * [cloneAllObject](packages/utils/src/object/README.md#cloneallobject-tval-t-t)
    * [cloneAllArray](packages/utils/src/object/README.md#cloneallarray-tval-t-t)
    * [cloneAllItem](packages/utils/src/object/README.md#cloneallitem-tval-t-t)
  * [assign](packages/utils/src/object/README.md#assign)
    * [assignIf](packages/utils/src/object/README.md#assigniftarget-any-source-any-any)
    * [assignDeep](packages/utils/src/object/README.md#assigndeeptarget-any-source-any-any)
    * [assignDeepMergeArray](packages/utils/src/object/README.md#assigndeepmergearraytarget-any-source-any-any)
    * [assignDeepNotIncludedArray](packages/utils/src/object/README.md#assigndeepnotincludedarraytarget-any-source-any-any)
  * [other](packages/utils/src/object/README.md#other)
    * [length](packages/utils/src/object/README.md#lengthval-any-number)
    * [mousePosition](packages/utils/src/object/README.md#mousepositionevent-any-xnumberynumber)
    * [getStyle](packages/utils/src/object/README.md#getstyle-el-stylename)
    * [parentByExpected](packages/utils/src/object/README.md#parentbyexpected-dom-expected-parent)
    * [copyText](packages/utils/src/object/README.md#copytext-dom)
    * [mapObject](packages/utils/src/object/README.md#mapobject-obj-callback-objectcallback--any)
    * [filterObject](packages/utils/src/object/README.md#filterobject-obj-callback-filterobjectcallback--any)
    * [forEachObject](packages/utils/src/object/README.md#foreachobject-obj-callback-objectcallback--any)
* [function](packages/utils/src/function/README.md)
  * [缓存函数](packages/utils/src/function/README.md#%E7%BC%93%E5%AD%98%E5%87%BD%E6%95%B0)
    * [memoized](packages/utils/src/function/README.md#memoized-arg-any-arrayany)
    * [asyncMemoized](packages/utils/src/function/README.md#asyncmemoized--arg-string-promisearrayany)
  * [monad](packages/utils/src/function/README.md#monad)
    * [ResponseMonad](packages/utils/src/function/README.md#responsemonad)
  * [curry](packages/utils/src/function/README.md#curry)
    * [curry](packages/utils/src/function/README.md#curryfn-curry)
    * [partial](packages/utils/src/function/README.md#partial)
  * [compose](packages/utils/src/function/README.md#compose)
    * [compose](packages/utils/src/function/README.md#compose-1)
    * [pipe](packages/utils/src/function/README.md#pipe)
    * [composePromises](packages/utils/src/function/README.md#composepromisespromises-promises-initialvalue-any-promisevoid)
  * [fullscreen](packages/utils/src/function/README.md#fullscreen)
    * [fullscreen](packages/utils/src/function/README.md#fullscreen-el-elementoptions-fullscreenoptions-promiseany)
    * [exitFullscreen](packages/utils/src/function/README.md#exitfullscreen-promiseany)
    * [autoFullscreen](packages/utils/src/function/README.md#autofullscreenel-element-options-fullscreenoptions-callback-args-autofullscreencallback--voidpromiseany)
    * [isFullscreen](packages/utils/src/function/README.md#isfullscreen-boolean)
    * [windowSize](packages/utils/src/function/README.md#windowsize-windowsize)
  * [debounce/throttle](packages/utils/src/function/README.md#debouncethrottle)
    * [debounce](packages/utils/src/function/README.md#debounce)
    * [throttle](packages/utils/src/function/README.md#throttle)
* [file](packages/utils/src/file/README.md)
	* [urlJoinParmas](packages/utils/src/file/README.md#urljoinparmas-parmas-urljoinparmaspatams-string)
	* [removeUrlParams](packages/utils/src/file/README.md#removeurlparamsurl-string-string)
	* [removeEmptyParams](packages/utils/src/file/README.md#removeemptyparams-params-any)
	* [makeParamsProper](packages/utils/src/file/README.md#makeparamsproperparams-any)
	* [queryParamsFromUrl](packages/utils/src/file/README.md#queryparamsfromurlurl-string-object)
	* [download](packages/utils/src/file/README.md#download-url-filename-blob-parmas-downloadparams-void-%5C-error)
	* [downloadStream](packages/utils/src/file/README.md#downloadstreamurl-options-filename-downloadstreamparams-void)
	* [dowmloadScreenshotPicture](packages/utils/src/file/README.md#dowmloadscreenshotpicture-dom-options)
	* [imageFromFile](packages/utils/src/file/README.md#imagefromfilefile-file-string)
	* [imageToBase64](packages/utils/src/file/README.md#imagetobase64-opt-imagetobase64props-string)
* [String](packages/utils/src/string/README.md)
  * [uuid](packages/utils/src/string/README.md#uuidlen-number-radix-number--string)
  * [formatStr](packages/utils/src/string/README.md#formatstrargs-any--string)
  * [ellipsps](packages/utils/src/string/README.md#ellipsps-text-string-width-number--100-size-number--12-font-string--arial-string)
  * [strWidth](packages/utils/src/string/README.md#strwidthctx-any-text-string-fontsize-number--12-fontfamily-string--arial)
  * [path](packages/utils/src/string/README.md#path)
    * [pathJoin](packages/utils/src/string/README.md#pathjoinargs-string)
  * [extractEnclosedContent](packages/utils/src/string/README.md#extractenclosedcontent)
    * [extractEnclosedContent](packages/utils/src/string/README.md#extractenclosedcontent-str-string-startstr-string-endstr-string-arraystring)
    * [extractParenthesesContent](packages/utils/src/string/README.md#extractparenthesescontentstrstringarraystring)
    * [extractMiddleParenthesesContent](packages/utils/src/string/README.md#extractmiddleparenthesescontentstrstringarraystring)
    * [extractBigParenthesesContent](packages/utils/src/string/README.md#extractbigparenthesescontentstrstringarraystring)
  * [regexp](packages/utils/src/string/README.md#regexp)
    * [IPV4](packages/utils/src/string/README.md#ipv4)
    * [PHONE_NUMBER](packages/utils/src/string/README.md#phone_number)
  * [color](packages/utils/src/string/README.md#color)
    * [addOpacity](packages/utils/src/string/README.md#addopacity)
    * [hex2Rgb](packages/utils/src/string/README.md#hex2rgb)
    * [rgb2hex](packages/utils/src/string/README.md#rgb2hex)
    * [rgba2hex](packages/utils/src/string/README.md#rgba2hex)
    * [rgba2rgb](packages/utils/src/string/README.md#rgba2rgb)
* [number](packages/utils/src/number/README.md)
    * [randomInt](packages/utils/src/number/README.md#randomint-min-number-max-number-number)
    * [toThousands](packages/utils/src/number/README.md#tothousandsval-string--number-digit-number--0-string)
    * [bitUpgrade](packages/utils/src/number/README.md#bitupgrade-nnumber-opt-upgradeoptions-string)
    * [bitRateUpgrade](packages/utils/src/number/README.md#bitrateupgrade)
    * [unitUpgrade](packages/utils/src/number/README.md#unitupgradenum-number-options-unitupgradeprops-number-string)
    * [max](packages/utils/src/number/README.md#max-args-number-number)
    * [min](packages/utils/src/number/README.md#min-args-number-number)
* [array](packages/utils/src/array/README.md)
  * [convertToTwodimensional](packages/utils/src/array/README.md#converttotwodimensional)
  * [tree](packages/utils/src/array/README.md#tree)
    * [findTreeOrder](packages/utils/src/array/README.md#findtreeorder)
    * [findSubtreeByOrder](packages/utils/src/array/README.md#findsubtreebyorder)
* [date](packages/utils/src/date/README.md)
    * [formatTimestamp](packages/utils/src/date/README.md#formattimestamp)
    * [getWeekCN](packages/utils/src/date/README.md#getweekcn-date-date-string)
    * [timeRange](packages/utils/src/date/README.md#timerange-days-number-timerange)
    * [timeRangeCurrent](packages/utils/src/date/README.md#timerangecurrenttype-timerangetype-timerange)
    * [timeRangePrevious](packages/utils/src/date/README.md#timerangeprevioustype-timerangetype-timerange)
    * [currentQuarterFirstMonth](packages/utils/src/date/README.md#currentquarterfirstmonth)
    * [currentQuarterLastMonth](packages/utils/src/date/README.md#currentquarterlastmonth)
    * [currentQuarterDays](packages/utils/src/date/README.md#currentquarterdays)
    * [currentDayEarliest](packages/utils/src/date/README.md#currentdayearliest)
    * [currentDayLatest](packages/utils/src/date/README.md#currentdaylatest)
