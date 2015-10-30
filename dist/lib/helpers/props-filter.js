'use strict';

var omit = require('underscore').omit;
module.exports = function (all, exclude) {
  return omit(all, Object.keys(exclude));
};
