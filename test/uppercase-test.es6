const assert = require('assert');

import { keyUppercase } from '../lib/key-facsimile';

describe('ES6 Key Uppercase =>', () => {

	it('Uppercases any given key', () => {

		var result = keyUppercase({
			SOME_NAME: null,
			ANOTHER_NAME: null,
			lowercase: null,
			'dash-full-support': null
		});

		assert.deepEqual(result, {
			SOME_NAME: 'SOME_NAME',
			ANOTHER_NAME: 'ANOTHER_NAME',
			lowercase: 'LOWERCASE',
			'dash-full-support': 'DASH_FULL_SUPPORT'
		});
	})
});