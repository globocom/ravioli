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

var React = require('react');
var TestUtils = require('react-addons-test-utils');

module.exports = {
  mockDOM: mockDOM,
  findByClass: TestUtils.findRenderedDOMComponentWithClass,
  findAllByClass: TestUtils.scryRenderedDOMComponentsWithClass,
  filterAll: TestUtils.findAllInRenderedTree,
  click: TestUtils.Simulate.click,

  keydown: function(element, code){
    return TestUtils.Simulate.keyDown(element, {which: code});
  },

  input: function(element, value){
    return TestUtils.Simulate.input(element, {
      target: {value: value}
    });
  },

  render: function(element, props, child){
    return TestUtils.renderIntoDocument(
      React.createElement(element, props, child)
    );
  }
};
