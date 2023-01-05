/**
 * 判断是否长时间未操作 重新reload当前页面  释放内存
 */
export type OperateConfig = {
    wait?: number,  // 多长时间未操作，到期触发callBack 默认一个小时  单位 毫秒
    interval?: number // 每隔多长时间检测一次 默认1分钟 单位 毫秒
}
export const hasOperate = (callback: ()=> void, config?: OperateConfig) => { //second是检测未操作的时间，秒为单位，callback是该时间段未点击需要执行的函数
    const {wait, interval} = Object.assign({wait: 1000 * 60 * 60, interval: 1000 * 60}, config)
    const maxTime = wait; // 此处设置倒计时时间，单位为秒
    let time = maxTime;
    const onEvent = ()=> {
        time = maxTime;
    }

    // keydown mousemove mousedown 监听这些数据
    document.body.addEventListener('keydown', onEvent);
    document.body.addEventListener('mousemove', onEvent);
    document.body.addEventListener('mousedown', onEvent);

    const intervalId = setInterval(function() {
        time = time - interval;
        if (time <= 0) {
            clearInterval(intervalId);
            callback();
        }
    }, interval)
}