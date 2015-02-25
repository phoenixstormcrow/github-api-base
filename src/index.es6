/* github-base-api

   functionality required for all github api calls
*/

var baseUrl = "https://api.github.com/",
  apiVersion = 3,
  baseProto = {
    toString: function toString() {
      "use strict";
      return this.base;
    }
  },
  /* jshint maxlen: false */ /* babel not respecting linebreaks */
  defaultUserAgent = `node_${process.version}_` +
    `${process.arch}_${process.platform}`

module.exports = (function () {
  "use strict";
  var base = Object.create(baseProto),
    headers = {};

  Object.defineProperties(base, {
    "base": {
      value: baseUrl,
      writable: false,
      configurable: false,
      enumerable: true
    },
    "version": {
      value: apiVersion,
      writable: false,
      configurable: false,
      enumerable: true
    }
  });

  Object.defineProperties(headers, {
    "Accept": {
      value: `application/vnd.github.v${apiVersion}+json`,
      writable: false,
      configurable: false,
      enumerable: true
    },
    "User-Agent": {
      value: defaultUserAgent,
      writable: true,
      enumerable: true,
      configurable: false
    }
  });

  base.headers = headers;
  return base;
})();
