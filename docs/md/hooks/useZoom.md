# `useZoom`

> TODO: 放大缩小对应的dom

## Usage

```tsx
import React from 'react';
import {useZoom} from "@gaopeng123/hooks.use-zoom";

type TestUseZoomProps = {};
const TestUseZoom: React.FC<TestUseZoomProps> = (props) => {
    const [zoom, zoomUp, zoomDown] = useZoom({min: 0.25, max: 5, onMax: ()=> {
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

