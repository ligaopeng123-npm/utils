import {module, test} from 'qunit';
import {convertToTwodimensional} from '../src/array';

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
module('convertToTwodimensional', {
	beforeEach: () => {
	},
	afterEach: () => {
	}
});

test('convertToTwodimensional', (assert) => {
	assert.notDeepEqual((_: any) =>
			convertToTwodimensional(testData, 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]],
		'打印结果')
});