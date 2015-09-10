/* global require, module, global, document */

var React = require('react/addons');

module.exports = {
  findByClass: React.addons.TestUtils.findRenderedDOMComponentWithClass,
  click: React.addons.TestUtils.Simulate.click,

  keydown: function(element, code){
    return React.addons.TestUtils.Simulate.keyDown(element, {which: code});
  },

  input: function(element, value){
    return React.addons.TestUtils.Simulate.input(element, {
      target: {value: value}
    });
  },

  render: function(element, props, child){
    return React.addons.TestUtils.renderIntoDocument(
      React.createElement(element, props, child)
    );
  },

  mockDOM: function(){
    if(!global.document){
      global.document = require('jsdom').jsdom();
      global.window = document.parentWindow;
    }
  }
};
