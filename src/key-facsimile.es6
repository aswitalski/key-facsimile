const keyFacsimile = (obj, converter) => {
    var result = {};
    Object.keys(obj).map(key => {
        result[key] = converter(key);
    });
    return result;
};

const keyMirror = (obj) => keyFacsimile(obj, (key) => key);
const keyPrefix = (prefix) => (obj) => keyFacsimile(obj, (key) => prefix + key);
const keyLowercase = (obj) => keyFacsimile(obj, (key) => key.toLowerCase().replace(/_/g, '-'));
const keyUppercase = (obj) => keyFacsimile(obj, (key) => key.toUpperCase().replace(/-/g, '_'));

module.exports = keyMirror;
module.exports.keyMirror = keyMirror;

module.exports.prefix = keyPrefix;
module.exports.keyPrefix = keyPrefix;

module.exports.lowercase = keyLowercase;
module.exports.keyLowercase = keyLowercase;

module.exports.uppercase = keyUppercase;
module.exports.keyUppercase = keyUppercase;