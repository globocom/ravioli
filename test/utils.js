/* global require, module, global, document */
var jsdom = require('jsdom');

var mockDOM = () => {
  if(!global.document){
    global.document = jsdom.jsdom();
    global.window = document.defaultView;
    global.navigator = { userAgent: 'node.js' };
  }
};

mockDOM();

var React = require('react/addons');

module.exports = {
  mockDOM: mockDOM,
  findByClass: React.addons.TestUtils.findRenderedDOMComponentWithClass,
  findAllByClass: React.addons.TestUtils.scryRenderedDOMComponentsWithClass,
  filterAll: React.addons.TestUtils.findAllInRenderedTree,
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
  }
};
