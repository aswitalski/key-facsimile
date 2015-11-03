'use strict';

var keyFacsimile = function keyFacsimile(keys, converter, params) {
    var result = {};
    Object.keys(keys).forEach(function (key) {
        return result[key] = converter(key);
    });
    return result;
};

module.exports = function (keys) {
    return keyFacsimile(keys, function (key) {
        return key;
    });
};
module.exports.prefix = function (prefix) {
    return function (keys) {
        return (function (keys, pre) {
            return keyFacsimile(keys, function (key) {
                return pre + key;
            });
        })(keys, prefix);
    };
};
module.exports.lowercase = function (keys) {
    return keyFacsimile(keys, function (key) {
        return key.toLowerCase().replace(/_/g, '-');
    });
};
module.exports.uppercase = function (keys) {
    return keyFacsimile(keys, function (key) {
        return key.toUpperCase().replace(/-/g, '_');
    });
};