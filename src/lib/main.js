/* global require, module, window */

var Ravioli = {
  Button: require('./components/button'),
  Check: require('./components/check'),
  Number: require('./components/number'),
  Select: require('./components/select'),
  Text: require('./components/text'),
  Textarea: require('./components/textarea')
};

module.exports = Ravioli;

if(typeof window !== 'undefined') window.Ravioli = Ravioli;
