var omit = require('underscore').omit;
module.exports = (all, exclude) => omit(all, Object.keys(exclude));
