import {module, test} from 'qunit';
import fetchInterceptor from '../src/fetchInterceptor';


module('fetchInterceptor', {
	beforeEach: () => {
	},
	afterEach: () => {
	}
});

test('fetchInterceptor.register', (assert) => {
	// assert.async()
	fetchInterceptor.register({
		request: function (url: string, config) {
			// Modify the url or config here
			return [url, config];
		},
		
		requestError: function (error) {
			// Called when an error occured during another 'request' interceptor call
			return Promise.reject(error);
		},
		
		response: function (response) {
			// Modify the reponse object
			return response;
		},
		
		responseError: function (error) {
			// Handle an fetch error
			return Promise.reject(error);
		}
	});
});
