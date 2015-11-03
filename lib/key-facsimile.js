'use strict';

var keyFacsimile = function keyFacsimile(obj, converter) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        return result[key] = converter(key);
    });
    return result;
};

module.exports = function (obj) {
    return keyFacsimile(obj, function (key) {
        return key;
    });
};
module.exports.prefix = function (prefix) {
    return function (obj) {
        return keyFacsimile(obj, function (key) {
            return prefix + key;
        });
    };
};
module.exports.lowercase = function (obj) {
    return keyFacsimile(obj, function (key) {
        return key.toLowerCase().replace(/_/g, '-');
    });
};
module.exports.uppercase = function (obj) {
    return keyFacsimile(obj, function (key) {
        return key.toUpperCase().replace(/-/g, '_');
    });
};