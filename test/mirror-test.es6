const assert = require('assert');

import { keyMirror } from '../lib/key-facsimile';

describe('ES6 Key Mirror', () => {

	it('mirrors any given key', () => {

		var result = keyMirror({
			SOME_NAME: null,
			ANOTHER_NAME: null,
			lowercase: null,
			'dash-support': null
		});

		assert.deepEqual(result, {
			SOME_NAME: 'SOME_NAME',
			ANOTHER_NAME: 'ANOTHER_NAME',
			lowercase: 'lowercase',
			'dash-support': 'dash-support'
		});
	})
});