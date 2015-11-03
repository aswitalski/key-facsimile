var keyFacsimile = (keys, converter, params) => {
    var result = {};
    Object.keys(keys).forEach((key) => result[key] = converter(key));
    return result;
};

module.exports = (keys) => keyFacsimile(keys, (key) => key);
module.exports.prefix = (prefix) => (keys) => ((keys, pre) => keyFacsimile(keys, (key) => pre + key))(keys, prefix);
module.exports.lowercase = (keys) => keyFacsimile(keys, (key) => key.toLowerCase().replace(/_/g, '-'));
module.exports.uppercase = (keys) => keyFacsimile(keys, (key) => key.toUpperCase().replace(/-/g, '_'));
