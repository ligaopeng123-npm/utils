/**********************************************************************
 *
 * @模块名称: timestamp.test
 *
 * @模块用途: timestamp.test
 *
 * @date: 2021/8/13 16:14
 *
 * @版权所有: pgli
 *
 **********************************************************************/
// import {formatTimestamp, getWeekCN, timeRange} from "../../src";
import {formatTimestamp, timeRange, timeRangeCurrent} from "../src";
// 1647495559126
describe('timestampToDate', () => {
    it('works', () => {
        // expect(formatTimestamp(Date.now(), 'yyyy-MM-dd')).toEqual('2021-08-13');
        // expect(formatTimestamp(new Date(), 'yyyy-MM-dd')).toEqual('2021-08-13');
        // expect(formatTimestamp((new Date()).toString(), 'yyyy-MM-dd')).toEqual('2021-08-13');
        // expect(getWeekCN(new Date())).toEqual('星期五');

        expect(timeRange(1)).toStrictEqual({
            startTime: new Date().setHours(0, 0, 0, 0),
            endTime: new Date().setHours(23, 59, 59, 999),
        });

        expect(timeRangeCurrent('day')).toStrictEqual({
            startTime: new Date().setHours(0, 0, 0, 0),
            endTime: new Date().setHours(23, 59, 59, 999),
        });

        expect(formatTimestamp(1647495559126)).toEqual('2022-03-17 13:39:19');
        expect(formatTimestamp(1647495559126, 'MM-dd HH:mm:ss')).toEqual('03-17 13:39:19');
        expect(formatTimestamp(1647495559126, 'yyyy/MM/dd HH:mm:ss')).toEqual('2022/03/17 13:39:19');
        expect(formatTimestamp(1647495559126, 'yyyy-MM-dd HH:mm:ss WWW')).toEqual('2022-03-17 13:39:19 星期四');
        expect(formatTimestamp(1647495559126, 'yyyy-MM-dd HH:mm:ss 周WW')).toEqual('2022-03-17 13:39:19 周四');
        expect(formatTimestamp(1647495559126, '周WW yyyy-MM-dd HH:mm:ss')).toEqual('周四 2022-03-17 13:39:19');
        expect(formatTimestamp(1647495559126, '周ww yyyy-MM-dd hh:mm:ss')).toEqual('周4 2022-03-17 01:39:19');

        // expect(timeRangeCurrent('week')).toStrictEqual({
        // 	startTime: new Date('2021-8-9').setHours(0, 0, 0, 0),
        // 	endTime: new Date('2021-8-15').setHours(23, 59, 59, 999),
        // });

        // expect(timeRangeCurrent('month')).toStrictEqual({
        // 	startTime: new Date('2021-8-1').setHours(0, 0, 0, 0),
        // 	endTime: new Date('2021-8-31').setHours(23, 59, 59, 999),
        // });

        // expect(timeRangeCurrent('quarter')).toStrictEqual({
        // 	startTime: new Date('2021-7-1').setHours(0, 0, 0, 0),
        // 	endTime: new Date('2021-9-30').setHours(23, 59, 59, 999),
        // });

        // expect(timeRangeCurrent('year')).toStrictEqual({
        // 	startTime: new Date('2021-1-1').setHours(0, 0, 0, 0),
        // 	endTime: new Date('2021-12-31').setHours(23, 59, 59, 999),
        // });
    });
});

