# `useZoom`

> TODO: 放大缩小对应的dom
>
> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usezoom--demo)

## Usage

参数

```tsx
export interface ZoomProps {
    zoomDom?: any; // 缩放的dom 如果不传 默认为body
    max?: number; // 最大缩放倍数  默认0.5
    min?: number; // 最小缩放倍数  默认2
    onMax?: (zoom: number) => void; // 缩放到最大倍数时触发
    onMin?: (zoom: number) => void; // 缩放到最小倍数时触发
    defaultZoom?: number; // 默认缩放级别   默认1
    step?: number; // 每次缩放级别的值 默认0.25
}
```

```tsx
import React from 'react';
import {useZoom} from "@gaopeng123/hooks.use-zoom";

type TestUseZoomProps = {};
const TestUseZoom: React.FC<TestUseZoomProps> = (props) => {
    const [zoom, {zoomUp, zoomDown, zoomReset}] = useZoom({min: 0.25, max: 5, onMax: ()=> {
            console.log(111)
        }});
  
  const [zoom, {zoomUp, zoomDown, zoomReset}] = useZoomAndDrag({min: 0.25, max: 5, onMax: ()=> {
            console.log(111)
        }});
    return (
        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>
            <h3>useZoom</h3>
            <a onClick={() => zoomUp()}>放大</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a onClick={() => zoomDown()}>缩小</a><br/>
            zoom: {
                zoom
            }
        </div>
    )
};

export default TestUseZoom;
```
