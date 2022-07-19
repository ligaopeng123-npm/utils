# color 颜色处理相关

## addOpacity: (color: string, opacity: number): string

`给颜色添加透明度`

```typescript
addOpacity('RGBA(13,188,121, .5)', .6) // 这里会得到0.3的透明度
addOpacity('RGB(13,188,121)', .6)
```

## hex2rgb: (color: string): string

`16位制颜色转换成rgb的形式`

```typescript
hex2rgb('#369') 
hex2rgb('#336699')
```

## rgb2hex: (color: string): string

`颜色转换成16位进制的6位数形式`

```typescript
rgb2hex('#369') // #336699
rgb2hex('RGB(13,188,121)') // #0dbc79
```
