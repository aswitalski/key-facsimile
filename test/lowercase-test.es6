const assert = require('assert');

import { keyLowercase } from '../lib/key-facsimile';

describe('ES6 Key Lowercase =>', () => {

	it('lowercases any given key', () => {

		var result = keyLowercase({
			SOME_NAME: null,
			SOME_OTHER_NAME: null,
			lowercase: null,
			'dash-support': null
		});

		assert.deepEqual(result, {
			SOME_NAME: 'some-name',
			SOME_OTHER_NAME: 'some-other-name',
			lowercase: 'lowercase',
			'dash-support': 'dash-support'
		});
	})
});