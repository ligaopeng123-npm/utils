/**********************************************************************
 *
 * @模块名称: mouse
 *
 * @模块用途: mouse
 *
 * @date: 2021/8/18 15:08
 *
 * @版权所有: pgli
 *
 **********************************************************************/
type MousePositionParams = {
	x: number,
	y: number
}
/**
 * 根据event 获取鼠标位置
 * @param event
 */
export const mousePosition = (event: any): MousePositionParams => {
	if (!event) return {x: 0, y: 0};
	if (event.pageX || event.pageY) {
		return {x: event.pageX, y: event.pageY};
	}
	return {
		x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
		y: event.clientY + document.body.scrollTop - document.body.clientTop
	};
};

