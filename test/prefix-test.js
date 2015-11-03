const assert = require('assert');

const keyPrefix = require('../lib/key-facsimile').prefix('prefix:');

describe('Key Prefix =>', () => {

	it('prefixes any given key', () => {

		var result = keyPrefix({
			SOME_NAME: null,
			ANOTHER_NAME: null,
			lowercase: null,
			'dash-support': null
		});

		assert.deepEqual(result, {
			SOME_NAME: 'prefix:SOME_NAME',
			ANOTHER_NAME: 'prefix:ANOTHER_NAME',
			lowercase: 'prefix:lowercase',
			'dash-support': 'prefix:dash-support'
		});
	})
});