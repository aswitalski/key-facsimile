const keyFacsimile = (obj, converter) => {
    var result = {};
    Object.keys(obj).forEach((key) => result[key] = converter(key));
    return result;
};

module.exports = (obj) => keyFacsimile(obj, (key) => key);
module.exports.prefix = (prefix) => (obj) => keyFacsimile(obj, (key) => prefix + key);
module.exports.lowercase = (obj) => keyFacsimile(obj, (key) => key.toLowerCase().replace(/_/g, '-'));
module.exports.uppercase = (obj) => keyFacsimile(obj, (key) => key.toUpperCase().replace(/-/g, '_'));
