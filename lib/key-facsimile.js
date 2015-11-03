'use strict';

var keyFacsimile = function keyFacsimile(keys, converter, params) {
	var result = {};
	Object.keys(keys).forEach(function (key) {
		result[key] = converter(key);
	});
	return result;
};

// public

var keyMirror = function keyMirror(keys) {
	return keyFacsimile(keys, function plain(key) {
		return key;
	});
};

var keyPrefix = function keyPrefix(keys, prefx) {
	return keyFacsimile(keys, function prefix(key) {
		return prefx + key;
	});
};

var keyLowercase = function keyLowercase(keys) {
	return keyFacsimile(keys, function lowercase(key) {
		return key.toLowerCase().replace(/_/g, '-');
	});
};

var keyUppercase = function keyUppercase(keys) {
	return keyFacsimile(keys, function uppercase(key) {
		return key.toUpperCase().replace(/-/g, '_');
	});
};

module.exports = keyMirror;
module.exports.prefix = function (prefix) {
	return function (keys) {
		return keyPrefix(keys, prefix);
	};
};
module.exports.lowercase = keyLowercase;
module.exports.uppercase = keyUppercase;