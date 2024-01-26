

# date

## 时间戳格式化

##### formatTimestamp 

`(timestamp: Date | number | string, type: TimestampType = 'yyyy-MM-dd HH:mm:ss'): string`

`时间戳转换成格式化后的日期格式`

```typescript
export type TimestampType = 'yyyy-MM-dd HH:mm:ss' | 'yyyy/MM/dd HH:mm:ss'
    | 'yyyy-MM-dd HH:mm:ss WW' | 'yyyy/MM/dd HH:mm:ss WW'
    | 'yyyy-MM-dd' | 'yyyy/MM/dd'
    | 'HH:mm:ss'
    | 'MM-dd' | 'MM/dd'
    | 'MM-dd HH:mm:ss' | 'MM/dd HH:mm:ss'
    | 'dd HH:mm:ss'
    | 'yyyy' | 'MM' | 'dd' | 'HH' | 'mm' | 'ss' | 'WW' | 'ww' | string

timestampToDate(Date.now(), 'yyyy-MM-dd')
timestampToDate(new Date(), 'yyyy-MM-dd')
timestampToDate((new Date()).toString(), 'yyyy-MM-dd')

formatTimestamp(1647495559126))// '2022-03-17 13:39:19'
formatTimestamp(1647495559126, 'MM-dd HH:mm:ss'))// '03-17 13:39:19'
formatTimestamp(1647495559126, 'yyyy/MM/dd HH:mm:ss'))// '2022/03/17 13:39:19'
formatTimestamp(1647495559126, 'yyyy-MM-dd HH:mm:ss WWW'))// '2022-03-17 13:39:19 星期四'
formatTimestamp(1647495559126, 'yyyy-MM-dd HH:mm:ss 周WW'))// '2022-03-17 13:39:19 周四'
formatTimestamp(1647495559126, '周WW yyyy-MM-dd HH:mm:ss'))// '周四 2022-03-17 13:39:19'
formatTimestamp(1647495559126, '周ww yyyy-MM-dd hh:mm:ss'))// '周4 2022-03-17 01:39:19'
```

##### timestampToCN

`(timestamp: Date | number | string, type: TimeType = 'dd天HH小时mm分钟ss秒'): string`

`将毫秒转换成可读性中文显示`

```typescript
type TimeType = 'd天HH小时mm分钟ss秒' | string;

expect(timestampToCN(3600)).toEqual("3.6秒");
expect(timestampToCN(3601 * 1000)).toEqual("01小时00分钟01秒");
expect(timestampToCN(86400 * 1000 + 1000)).toEqual("01天00小时00分钟01秒");
expect(timestampToCN(86400 * 1000 + 1000, "d天H小时m分钟ss秒")).toEqual("1天0小时0分钟01秒");
expect(timestampToCN(3601 * 1000000)).toEqual("41天16小时16分钟40秒");
```

## 日期获取

##### getWeek

`获取数字周几`

```ty
getWeekCN(new Date());// 5  1-7
```

##### getWeekCN `(date: Date): string`

`获取中文星期几`

```typescript
getWeekCN(new Date());// '星期五'
```

##### getWeekCNDay

`获取是中文的周几`

```typescript
getWeekCN(new Date());// '五'
```

##### getMonthDays

`根据时间戳获取其月份的天数`

```tsx
getMonthDays('2023-01-01'); // 31
getMonthDays(1672531200000); // 31
```

##### currentMonthDays

`获取当月的天数`

```tsx
currentMonthDays(); // 31
```

##### currentYearMonthDays

`获取本年任意月份的天数`

```tsx
currentYearMonthDays(1); // 31
currentYearMonthDays('02'); // 28
currentYearMonthDays('01');// 31
```

## 区间时间戳获取

##### timeRange: (days: number): TimeRange

`获取{n}天的时间戳range`

```typescript
type TimeRange = {
	startTime: number;
	endTime: number;
};
timeRange(1);
```

##### timeRangeCurrent:(type: TimeRangeType): TimeRange

`获取当前自然天、周、月、季度、年时间戳范围`

```typescript
type TimeRangeType = 'day' | 'threeDays' | 'week' | 'month' | 'quarter' | 'year';
timeRangeCurrent('week');
```

##### timeRangePrevious:(type: TimeRangeType): TimeRange

`获取过去一天、一周、一月、一季度、一年的时间戳范围`

```typescript
timeRangePrevious('threeDays');
```

##### timeRangePeriod <span class="new">New</span>

`获取过去{n}天/月的时间区间`

```typescript
timeRangePeriod('day', 4);
[
  {
    startTime: 1697126400000,
    endTime: 1697212799000,
    startTimeStr: '2023-10-13 00:00:00',
    endTimeStr: '2023-10-13 23:59:59'
  },
  {
    startTime: 1697212800000,
    endTime: 1697299199000,
    startTimeStr: '2023-10-14 00:00:00',
    endTimeStr: '2023-10-14 23:59:59'
  },
  {
    startTime: 1697299200000,
    endTime: 1697385599000,
    startTimeStr: '2023-10-15 00:00:00',
    endTimeStr: '2023-10-15 23:59:59'
  },
  {
    startTime: 1697385600000,
    endTime: 1697471999000,
    startTimeStr: '2023-10-16 00:00:00',
    endTimeStr: '2023-10-16 23:59:59'
  }
]
timeRangePeriod('mouth', 4);
[
  {
    startTime: 1688140800000,
    endTime: 1690819199000,
    startTimeStr: '2023-07-01 00:00:00',
    endTimeStr: '2023-07-31 23:59:59'
  },
  {
    startTime: 1690819200000,
    endTime: 1693497599000,
    startTimeStr: '2023-08-01 00:00:00',
    endTimeStr: '2023-08-31 23:59:59'
  },
  {
    startTime: 1693497600000,
    endTime: 1696089599000,
    startTimeStr: '2023-09-01 00:00:00',
    endTimeStr: '2023-09-30 23:59:59'
  },
  {
    startTime: 1696089600000,
    endTime: 1698767999000,
    startTimeStr: '2023-10-01 00:00:00',
    endTimeStr: '2023-10-31 23:59:59'
  }
]
```

## 自然时间戳获取

##### currentQuarterFirstMonth

`本季度的第一个月份`

```typescript
currentQuarterFirstMonth(); // number
```

##### currentQuarterLastMonth

`本季度的最后一个月份`

```typescript
currentQuarterLastMonth(); // number
```

##### currentQuarterDays

`本季度有多少天`

```typescript
currentQuarterDays(); // number
```

##### currentDayEarliest

`当天0点时间戳`

```typescript
currentDayEarliest(); // number
```

##### currentDayLatest

`当天24点时间戳`

```typescript
currentDayLatest(); // number
```

