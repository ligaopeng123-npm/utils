<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [String](#string)
    - [uuid:(len?: number, radix?: number) => string;](#uuidlen-number-radix-number--string)
    - [formatStr:(...args: any) => string](#formatstrargs-any--string)
    - [ellipsps: (text: string, width: number = 100, size: number = 12, font: string = 'Arial'): string;](#ellipsps-text-string-width-number--100-size-number--12-font-string--arial-string)
    - [strWidth:(ctx: any, text: string, fontSize: number = 12, fontFamily: string = 'Arial')](#strwidthctx-any-text-string-fontsize-number--12-fontfamily-string--arial)
  - [path](#path)
    - [pathJoin:(...args): string](#pathjoinargs-string)
  - [extractEnclosedContent](#extractenclosedcontent)
    - [extractEnclosedContent: (str: string, startStr: string, endStr: string): Array<string>](#extractenclosedcontent-str-string-startstr-string-endstr-string-arraystring)
    - [extractParenthesesContent:(str:string):Array<string>](#extractparenthesescontentstrstringarraystring)
    - [extractMiddleParenthesesContent(str:string):Array<string>](#extractmiddleparenthesescontentstrstringarraystring)
    - [extractBigParenthesesContent(str:string):Array<string>](#extractbigparenthesescontentstrstringarraystring)
  - [color](#color)
    - [addOpacity](#addopacity)
    - [hex2Rgb](#hex2rgb)
    - [rgb2hex](#rgb2hex)
    - [rgba2hex](#rgba2hex)
    - [rgba2rgb](#rgba2rgb)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### String

##### uuid:(len?: number, radix?: number) => string;

`获取uuid 默认获取64位长度 数据基数为62`

```typescript
uuid()
```

##### formatStr:(...args: any) => string

`格式化字符串，将一个'hello {o}, I like {1}'中的 {0}{1} 替换成对应字符`

```typescript
formatStr('hello {o}, I like {1}')('china', 'you');
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

#### path

##### pathJoin:(...args): string

`拼接url路径`

```typescript
pathJoin('http://10.3.3.3', 'api/test'); // http://10.3.3.3/api/test
pathJoin('/api', '/test'); // '/api/test'
pathJoin(); // ''
```

#### extractEnclosedContent

##### extractEnclosedContent: (str: string, startStr: string, endStr: string): Array<string>

`提取被符号包裹住的字符串`

```typescript
extractEnclosedContent("a (1111),b (4444), d(3333)", '(', ')'); 
// ['1111', '4444', '3333']
```

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

#### color

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

