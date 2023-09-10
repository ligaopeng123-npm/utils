# createSocket

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

## ws.sent

`发送消息 发送字符串类型`

## ws.json

`发送json类型的数据`

## ws.close

`关闭数据`



