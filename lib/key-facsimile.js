'use strict';

var keyFacsimile = function keyFacsimile(obj, converter) {
    var result = {};
    Object.keys(obj).map(function (key) {
        result[key] = converter(key);
    });
    return result;
};

var keyMirror = function keyMirror(obj) {
    return keyFacsimile(obj, function (key) {
        return key;
    });
};
var keyPrefix = function keyPrefix(prefix) {
    return function (obj) {
        return keyFacsimile(obj, function (key) {
            return prefix + key;
        });
    };
};
var keyLowercase = function keyLowercase(obj) {
    return keyFacsimile(obj, function (key) {
        return key.toLowerCase().replace(/_/g, '-');
    });
};
var keyUppercase = function keyUppercase(obj) {
    return keyFacsimile(obj, function (key) {
        return key.toUpperCase().replace(/-/g, '_');
    });
};

module.exports = keyMirror;
module.exports.keyMirror = keyMirror;

module.exports.prefix = keyPrefix;
module.exports.keyPrefix = keyPrefix;

module.exports.lowercase = keyLowercase;
module.exports.keyLowercase = keyLowercase;

module.exports.uppercase = keyUppercase;
module.exports.keyUppercase = keyUppercase;