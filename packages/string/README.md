# string

## 字符串函数

##### uuid:(len?: number, radix?: number) => string;

`获取uuid 默认获取64位长度 数据基数为62`

````js
import {uuid} from "https://unpkg.com/@gaopeng123/utils.string/dist/utils.string.esm.js";
document.getElementById('utils-uuid1').innerText = `64位：` + uuid();
document.getElementById('utils-uuid2').innerText = `32位：` + uuid(32);
````

##### formatStr:(...args: any) => string

`格式化字符串，将一个'hello {o}, I like {1}'中的 {0}{1} 替换成对应字符`

```typescript
formatStr('hello {o}, I like {1}')('china', 'you');
```

##### toCase

`字母大小写转换`

```typescript
/**
 * 字符串转大小写
 * @param str
 * @param type 0-首字母大写 1-全大写 2-全小写
 */
console.log(toCase('name')); // Name
console.log(toCase('name', 1)); // NAME
console.log(toCase('name', 2)); //name
```

##### ellipsps: (text: string, width: number = 100, size: number = 12, font: string = 'Arial'): string;

`截取超长字符串...显示`

```typescript
ellipsps('wwwwwwwwwwwwwwwwwwwwwwwww', 50, 14);
```

##### strWidth:(ctx: any, text: string, fontSize: number = 12, fontFamily: string = 'Arial')

`获取字符串的长度，ctx: canvas的context对象，可传null`

```typescript
strWidth(null, 'WWWWWWW');
```

##### makeEmptyValue

`处理空数据展示`

```typescript
makeEmptyValue(''); // '-';
makeEmptyValue('', {unit: 'm', emptyValue: 'm'}); // ''
makeEmptyValue('1', {unit: 'm', emptyValue: 'm'}); // '1m'
```

##### checkVersion <span class="new">New 1.1.5+</span> 

`版本号检查`

```typescript
expect(checkVersion('1.1.1', '1.1.2')).toEqual(true);
expect(checkVersion('1.1.1', '1.1.0')).toEqual(false);
expect(checkVersion('1.1.1', '1.1.1.0')).toEqual(true);
expect(checkVersion('1.1.1', '1.1.1')).toEqual(false);
```

## path

##### pathJoin:(...args): string

`拼接url路径`

```typescript
pathJoin('http://10.3.3.3', 'api/test'); // http://10.3.3.3/api/test
pathJoin('/api', '/test'); // '/api/test'
pathJoin(); // ''
```

#####  replaceDomain

`Domain name 替换 `

```typescript
	expect(replaceDomain('https://10.1.1.1:4000/api/a/b', 'https://10.1.1.1:6000/appApi')).toEqual('https://10.1.1.1:6000/appApi/api/a/b');
		expect(replaceDomain('https://10.1.1.1:4000/api/a/b', '/appApi')).toEqual('/appApi/api/a/b');
	
```

## extractEnclosedContent

##### extractEnclosedContent: (str: string, startStr: string, endStr: string): Array<string>

`提取被符号包裹住的字符串`

```typescript
extractEnclosedContent("a (1111),b (4444), d(3333)", '(', ')'); 
// ['1111', '4444', '3333']
```

##### extractEnclosedContentByStrs(str: string, startStr: string, endStr: string, arr:Array<string> ):Array<string>;

`非正则模式提取字符串，兼容Safari, extractEnclosedContent的辅助函数`

##### extractParenthesesContent:(str:string):Array<string>

`提取小括号里面的内容`

```typescript
extractParenthesesContent("a (1111),b (4444), d(3333)"); 
//  ['1111', '4444', '3333']
```

##### extractMiddleParenthesesContent(str:string):Array<string>

`提取中括号里面的内容`

```typescript
extractMiddleParenthesesContent("a (1111),b [4444], d(3333)");
//  ['4444']
```

##### extractBigParenthesesContent(str:string):Array<string>

`提取大括号里面的内容`

```typescript
extractBigParenthesesContent("a (1111),b [4444], d{3333}"); //  ['3333']
```

## regexp

### IP

`IP地址相关正则`

##### IPV4

`IPV4正则校验`

```typescript
/^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/
const IPV4_STR = '^(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}$';
```

### PHONE

`手机号相关正则`

##### PHONE_NUMBER

`手机号正则校验`

```typescript
export const PHONE_NUMBER_STR = `^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[012356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[012356789]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$`;
```

##### 运营商支持的号码

```typescript
export const OPERATOR_NUMBER_STR = `^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[012356789]\d{2}|6[2567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$`;
```

##### IOT物联网卡

```bash
export const IOT_PHONE_NUMBER_STR = `^(?:\\+?86)?14(?:[14]0|[68]\\d)\\d{9}$`;
```

##### maskMobile

`手机号脱敏`

```()
maskMobile('18511110000'); // 185****0000
```

### PASSWORD

`密码相关正则`

##### PASSWORD

`强密码正则`

```typescript
/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}/
const PASSWORD_STR = '(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}';
```

##### PASSWORD_MAX_16

`8-16位密码正则`

```typescript
/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,16}/
```

##### PASSWORD_RegExp

`获取自定长度的密码正则`

```typescript
PASSWORD_RegExp(8,18); /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,16}/
```

### RTF

`富文本处理`

##### RTF2str

`富文本转字符串`

```typescript
// RTF2str 提取富文本中的字符串

RTF2str(`<p><em>生产中公开，光伏公开，光伏公开，光伏公开，</em></p><p>&lt;a&gt;123&lt;/a&gt;</p><p><strong style=\\"color: rgb(230, 0, 0);\\">光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏</strong></p>`)
// `生产中公开，光伏公开，光伏公开，光伏公开，<a<123</a<光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏公开，光伏`
RTF2str(`<ol><li><strong><em><s><u>1212</u></s></em></strong></li><li><span style=\\"background-color: rgb(230, 0, 0); color: rgb(161, 0, 0);\\">55555</span></li><li><span style=\\"color: rgb(255, 153, 0);\\">ces</span></li></ol><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p><p>你好 我啥也不知道</p>`)
// `121255555ces你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道你好 我啥也不知道`
```



## color

##### addOpacity

`给颜色添加透明度`

```typescript
addOpacity('#fff', 0.7); // rgba(255,255,255,0.7)
addOpacity('rgb(0,0,0)', 0.7); // rgba(0,0,0,0.7)
addOpacity('rgba(0,0,0)', 0.7); // rgba(0,0,0,0.7)
```

##### hex2Rgb

`将16进制颜色转换为rgb颜色`

```typescript
hex2Rgb('#000'); // 'rgb(0,0,0)'
```

##### rgb2hex

`将rgb颜色转换为16进制颜色`

```typescript
color2Rgb('rgb(0,0,0)'); // '#000'
```

##### rgba2hex

`将rgba颜色转换为16进制颜色`

##### rgba2rgb

`将rgba颜色转换为rgb颜色`

##### randomColor


```ty
randomColor('hex' | 'rgb'); // 返回颜色 默认hex格式
```

##### randomRgb 


```typescript
randomRgb(); // rgb(110, 112, 220)
```

##### randomHex 


```typescript
randomHex(); // '#37c972'
```



## hump

##### hump2hyphen

`驼峰命名转连字符命名`

<!--
{
    html: '<div id="utils-hump2hyphen"></div><div id="utils-hump2hyphen2"></div><div id="utils-hump2hyphen3"></div>'
}
-->

```javascript
import {hump2hyphen} from "https://unpkg.com/@gaopeng123/utils.string/dist/utils.string.esm.js";
const width = 'width';
const backgroundColor = 'backgroundColor';
const borderBottomStyle = 'borderBottomStyle';
document.getElementById('utils-hump2hyphen').innerText = hump2hyphen(width); // width
document.getElementById('utils-hump2hyphen2').innerText = hump2hyphen(backgroundColor //background-color
document.getElementById('utils-hump2hyphen3').innerText = hump2hyphen(borderBottomStyle);//border-bottom-style
```

##### hyphen2hump

`连字符命名转驼峰命名`

<!--
{
    html: '<div id="utils-hyphen2hump"></div><div id="utils-hyphen2hump2"></div><div id="utils-hyphen2hump3"></div>'
}
-->

```javascript
import {hyphen2hump} from "https://unpkg.com/@gaopeng123/utils.string/dist/utils.string.esm.js";
const width = 'width';
const backgroundColor = 'background-color';
const borderBottomStyle = 'border-bottom-style';
document.getElementById('utils-hump2hyphen').innerText = hyphen2hump(width); //width
document.getElementById('utils-hump2hyphen2').innerText = hyphen2hump(backgroundColor) //backgroundColor
document.getElementById('utils-hump2hyphen3').innerText = hyphen2hump(borderBottomStyle);//borderBottomStyle
```

## css

##### addBoxSizeUnit

`添加style单位，无单位添加单位`

`添加box尺寸单位  [em px % rem vw vh vmax vmin ex]`

```typescript
addBoxSizeUnit(10); // 10px
addBoxSizeUnit('10px'); // 10px
addBoxSizeUnit('10%'); // 10%
```

