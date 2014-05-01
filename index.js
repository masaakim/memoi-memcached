
var memoi = require('memoi');
var Memcached = require('memcached');

module.exports = function() {

  if (arguments.length === 0) {
    throw new Error('No memcached connection string/object given.');
  } else if (typeof arguments[0] === 'object' && arguments[0].connect !== undefined) {
    memcached = arguments[0];
  } else if (arguments.length == 1) {
    memcached = new Memcached(arguments[0]);
  } else {
    memcached = new Memcached(arguments[0], arguments[1]);
  }

  var configDefaults = {
    ttl: 120,
    hashAlgorithm: 'sha1'
  };

  var config = (arguments.length > 1 && Array.prototype.pop.call(arguments)) || {};

  for (var configProp in configDefaults) {
    if (configDefaults.hasOwnProperty(configProp) && config[configProp] === undefined) {
      config[configProp] = configDefaults[configProp];
    }
  }

};
