# createSocket

## createSocket

`创建socket连接`

`自动发送心跳（20s）；`

`断线自动重连；`

`tab页切换自动重连；`

```
export interface WebSocketEvent {
    onOpen?: fn,
    onMessage?: fn,
    onError?: fn,
    onClose?: fn,
};

const ws = createSocket(url, events);
```

### ws.sent

`发送消息 发送字符串类型`

### ws.json

`发送json类型的数据`

### ws.buffer

`发送buffer数据`

### ws.close

`关闭数据`

## WebSocketManager

`创建createSocket`

```tsx
interface WebSocketManagerConfig {
    visibilityChange?: boolean; // 是否监听visibilitychange事件
    heartbeat: { // 心跳参数
        timeout?: number; // 发送心跳间隔时长
        name?: string; // 发送心跳内容 默认 {code: 'heartbeat'}
    },
    binaryType?: 'blob' | 'arraybuffer' // 数据类型 默认字符串
}

const { createSocket, destroySocket, send,  destroyAllSocket } = WebSocketManager({});
```





