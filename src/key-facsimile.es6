var keyFacsimile = (keys, converter, params) => {
	var result = {};
	Object.keys(keys).forEach(function(key) {
		result[key] = converter(key);
	});
	return result;
};

// public

var keyMirror = (keys) => {
	return keyFacsimile(keys, function plain(key) {
		return key;
	});
};

var keyPrefix = (keys, prefx) => {
	return keyFacsimile(keys, function prefix(key) {
		return prefx + key;
	});
};

var keyLowercase = (keys) => {
	return keyFacsimile(keys, function lowercase(key) {
		return key.toLowerCase().replace(/_/g, '-');
	});
};

var keyUppercase = (keys) => {
	return keyFacsimile(keys, function uppercase(key) {
		return key.toUpperCase().replace(/-/g, '_');
	});
};

module.exports = keyMirror;
module.exports.prefix = (prefix) => {
	return (keys) => {
		return keyPrefix(keys, prefix);
	};
};
module.exports.lowercase = keyLowercase;
module.exports.uppercase = keyUppercase;
