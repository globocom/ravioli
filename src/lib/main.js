/* global require, module, window */

var Gnocchi = {
  Button: require('./components/button'),
  Check: require('./components/check'),
  Number: require('./components/number'),
  Select: require('./components/select'),
  Text: require('./components/text'),
  Textarea: require('./components/textarea')
};

module.exports = Gnocchi;

if(typeof window !== 'undefined') window.Gnocchi = Gnocchi;
