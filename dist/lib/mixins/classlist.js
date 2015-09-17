/* global module */

'use strict';

module.exports = {
  classList: function classList(baseClass, otherClasses) {
    baseClass = baseClass.trim();
    var rendered = baseClass;

    if (otherClasses) {
      var classlist = otherClasses.split(',').filter(function (c) {
        return !!c.trim();
      }).map(function (c) {
        return baseClass + '-' + c.trim();
      }).join(' ');

      if (classlist) rendered += ' ' + classlist;
    }

    return rendered;
  }
};
