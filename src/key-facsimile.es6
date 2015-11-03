const keyFacsimile = (keys, converter) => {
    var result = {};
    Object.keys(keys).forEach((key) => result[key] = converter(key));
    return result;
};

module.exports = (keys) => keyFacsimile(keys, (key) => key);
module.exports.prefix = (prefix) => (keys) => ((keys) => keyFacsimile(keys, (key) => prefix + key))(keys, prefix);
module.exports.lowercase = (keys) => keyFacsimile(keys, (key) => key.toLowerCase().replace(/_/g, '-'));
module.exports.uppercase = (keys) => keyFacsimile(keys, (key) => key.toUpperCase().replace(/-/g, '_'));
