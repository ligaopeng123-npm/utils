import { getPlatform } from "../src";

describe('browser', () => {
    it('works', () => {
        expect(getPlatform('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36')).toStrictEqual({
            operatingSystem: 'Windows',
            browser: 'Chrome'
        });
        expect(getPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36')).toStrictEqual({
            operatingSystem: 'Mac',
            browser: 'Chrome'
        });
        expect(getPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.46(0x18002e2c) NetType/WIFI Language/zh_CN')).toStrictEqual({
            operatingSystem: 'IOS',
            browser: 'WX'
        });
    });
});
