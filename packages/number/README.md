# number

## 随机数

##### randomInt: (min?: number, max?: number): number

`获取限定大小的随机整数`

```typescript
randomInt(5, 100); // 默认min = 0; max = 10;
```

## 量级转换

##### toThousands:(val: string | number, digit: number = 0): string

`将数字转换为千位制转换，digit小数点精确到几位 `

```typescript
toThousands(9999999); // '9,999,999'
toThousands(9999999.000, 3); // '9,999,999.000'
```

##### bitUpgrade: (n:number, opt: UpgradeOptions): string

`比特转换`

```typescript
type UpgradeOptions = {
	decimal?: number, // 保留几位小数 默认俩位
	delimiter?: string, // 数字和单位之间的分隔符 默认为 无
}
bitUpgrade(1000); // '1.00KB'
bitUpgrade(1025, {delimiter: ' '}); // '1.00 KB'
bitUpgrade(999); // '999B'
```

##### bitRateUpgrade

`比特率转换`

```typescript
bitRateUpgrade(1000);//'1000bps'
bitRateUpgrade(1025, {delimiter: ' '}); // '1.00 Kbps'
```

##### unitUpgrade:(num: number, options?: UnitUpgradeProps): [number, string]

`单位进阶`

```typescript
UnitUpgradeProps = {
	type?: 'bit' | 'bitRate',
	decimal?: number, // 保留几位小数 默认俩位
}
unitUpgrade(1000); //(['1.00', 'KB']
```

##### toFixed: (num:number, fix?: number);

`4舍5入，避免原生toFixed的银行家舍入法导致的问题`

## 最值

##### max: (...args: number[]): number;

`求最大值`

```typescript
max(3,4,9); // 9
```

##### min: (...args: number[]): number;

`求最小值`

```typescript
min(3,4,9); // 3
```

