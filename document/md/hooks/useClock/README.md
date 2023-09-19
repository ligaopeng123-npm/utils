# useClock 

>时钟器 [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useclock--demo)

## 参数

```typescript
type ClockDate = {
    ymd: string, // 年月日
    hms: string, // 时分秒
    week: string; // 周几
}

const {ymd, hms, week} = useClock();
```

## Usage

```tsx
import React from 'react';
import {useClock, ClockDate } form "@gaopeng123/hooks.use-clock"; // @gaopeng123/hooks

type TestUseClockProps = {};
const TestUseClock: React.FC<TestUseClockProps> = (props) => {
    const clock: ClockDate = useClock();
    return (
        <React.Fragment>
            <h3>useClock</h3>
            {
                `${clock.ymd} ${clock.hms} ${clock.week}`
            }
        </React.Fragment>
    )
};

export default TestUseClock;
```

