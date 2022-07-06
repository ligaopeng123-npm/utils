# 你不知道的JavaScript阅读后记录

## 类型转换

### 显式类型转换

### 隐式类型转发

### 操作符

#### ~

`字符操作“非”运算符,将值强制类型转换为32位，在取反。类似 -(x + 1)`

```typescript
~ 12 // -13   -(x + 1)`
// 可用于indexOf判断
var test = 'aaa'
~test.indexOf('a') // -1
if(~test.indexOf('a')) { // true
    
}
if(!~test.indexOf('a')) { // false
   
}
```

#### ！

`取反操作符`

```typescript

```

#### +

`显式转换成number`

```typescript
+'5' // 5
+ null // 0
+ {} // NaN
+ [] // 0
+ undefined // NaN
+ true // 1
+ false // 0
+ new Date() // 1656483047144
```



