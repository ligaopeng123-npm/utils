/**********************************************************************
 *
 * @模块名称: createSocket
 *
 * @模块作用: createSocket
 *
 * @创建人: pgli
 *
 * @date: 2023/9/8 5:31 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import { consoleTag } from "@gaopeng123/utils.log";
import { toCase } from "@gaopeng123/utils.string";

type fn = (...props: any) => void;

export interface WebSocketEvent {
    onOpen?: fn,
    onMessage?: fn,
    onError?: fn,
    onClose?: fn,
}

type SocketState = 'open' | 'message' | 'error' | 'close' | 'create' | 'hidden';

export interface SocketManager {
    socket: WebSocket,
    events: WebSocketEvent,
    state: SocketState,
    waitingToSend: Array<any>,
}

export type CreateSocket = (url: string, events: WebSocketEvent) => { close: () => void; send: (message: any) => void }

interface WebSocketManagerConfig {
    visibilityChange?: boolean; // 是否监听visibilitychange事件
    heartbeat?: { // 心跳参数
        timeout?: number; // 发送心跳间隔时长
        name?: string; // 发送心跳内容 默认 {code: 'heartbeat'}
    },
    binaryType?: 'blob' | 'arraybuffer' // 数据类型 默认字符串
}

export const WebSocketManager = (managerConfig?: WebSocketManagerConfig) => {
    /**
     * 保存的socket对象
     */
    const config: WebSocketManagerConfig = managerConfig || {};
    const sockets: { [key: string]: SocketManager } = {};
    /**
     * 心跳
     */
    const heartbeat = Object.assign({ timeout: 20000, name: 'heartbeat' }, config?.heartbeat);
    /**
     * 处理socket事件
     */
    const socketEvent = (url: string, type: SocketState, e?: WebSocketEventMap) => {
        try {
            const logType = type === 'open'
                ? 'success'
                : type === 'error' ? 'error' : 'log';
            consoleTag[logType](type, url, e);
            if (sockets[url]) {
                const currentSocket = sockets[url];
                sockets[url].state = type;
                const eventName = `on${toCase(type)}` as keyof WebSocketEvent;
                const eventObj = currentSocket.events;
                if (eventObj[eventName]) {
                    eventObj[eventName](e);
                }
            }
        } catch (e) {
            consoleTag.error(type, url, e);
        }
    }
    /**
     * 创建socket
     * @param url
     */
    const createSocket = (url: string) => {
        let socket: any;
        try {
            socket = new WebSocket(url);
            if (config?.binaryType) {
                socket.binaryType = config?.binaryType;
            }
            if (socket) {
                socket.addEventListener('open', (e: any) => {
                    if (sockets[url]) {
                        socketEvent(url, 'open', e);
                        if (sockets[url].waitingToSend) {
                            sockets[url].waitingToSend?.forEach((message: string) => {
                                sockets[url]?.socket?.send(message);
                            });
                            sockets[url].waitingToSend = [];
                        }
                    }
                });

                socket.addEventListener('message', (e: any) => {
                    socketEvent(url, 'message', e);
                });

                socket.addEventListener('error', (e: any) => {
                    socketEvent(url, 'error', e);
                });

                socket.addEventListener('close', (e: any) => {
                    socketEvent(url, 'close', e);
                });
            }
        } catch (e) {
            consoleTag.log('error', url, e);
        }
        return socket;
    }

    /**
     * 关闭socket 如果没有事件 则默认中断
     * @param url
     * @param events
     */
    const close = (url: string) => {
        if (sockets[url]) {
            sockets[url].events = null;
            sockets[url].state = 'hidden';
        }
    }

    /**
     * 销毁socket
     * @param url
     */
    const destroy = (url: string) => {
        if (sockets[url]) {
            const { socket } = sockets[url];
            socket?.close();
            sockets[url].events = null;
            sockets[url] = null;
        }
    }
    /**
     * 销毁所有的socket
     */
    const destroyAll = () => {
        for (let url in sockets) {
            destroy(url);
        }
    }

    /**
     * 消息发送
     */
    const send = (url: string, message: string) => {
        if (sockets[url]) {
            const { socket, waitingToSend } = sockets[url];
            try {
                socket?.send(message)
            } catch (e) {
                waitingToSend?.push(message);
            }
        }
    }

    /**
     * 循环检测
     */
    let loopDetectInterval: any;
    const loopDetect = () => {
        clearInterval(loopDetectInterval);
        loopDetectInterval = setInterval(() => {
            for (const url in sockets) {
                if (sockets[url] && sockets[url]?.events) {
                    const socket: SocketManager = sockets[url];
                    try {
                        const message = JSON.stringify({ code: heartbeat.name })
                        switch (socket.state) {
                            case 'close':
                                socket.socket = createSocket(url);
                                break;
                            case 'error':
                                socket.socket = createSocket(url);
                                break;
                            case "message":
                                socket?.socket?.send(message);
                                break;
                            case "open":
                                socket?.socket?.send(message);
                                break;
                            case "create":
                                socket?.socket?.send(message);
                                break;
                            case "hidden":
                                break;
                            default:
                                break;
                        }
                    } catch (e) {}
                }
            }
        }, heartbeat.timeout); // 20秒检测一次
    }

    /**
     * 开始检测
     */
    loopDetect();

    /**
     * 监听切屏事件，如果屏幕切走 则不在检测
     */
    if (config.visibilityChange !== false) {
        document.addEventListener('visibilitychange', (v) => {
            if (document.visibilityState === 'visible') {
                loopDetect();
            } else {
                clearInterval(loopDetectInterval);
            }
        });
    }

    /**
     * 创建socket
     * @param url
     * @param events
     */
    const create: CreateSocket = (url: string, events: WebSocketEvent) => {
        if (!sockets[url] || (sockets[url]?.state === 'close' || sockets[url]?.state === 'error')) {
            sockets[url] = {
                socket: createSocket(url),
                events: events,
                state: 'create',
                waitingToSend: []
            }
        } else {
            sockets[url].events = events;
            sockets[url].state = 'create';
        }
        return {
            close: () => destroy(url),
            send: (message: string) => send(url, message),
            json: (message: object) => send(url, JSON.stringify(message)),
            buffer: (message: object) => {
                send(url, JSON.stringify(message));
            }
        }
    }
    return { create, close, destroy, destroyAll, send }
};

const SocketManager = WebSocketManager();
export const createSocket: CreateSocket = SocketManager.create;
export const destroySocket = SocketManager.destroy;
export const send = SocketManager.send;
export const destroyAllSocket = SocketManager.destroyAll;