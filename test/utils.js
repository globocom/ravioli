var React = require('react/addons');
var jsdom = require('jsdom').jsdom;

global.document = jsdom();
global.window = document.parentWindow;

module.exports = {
  render: function(element, props, child){
    return React.addons.TestUtils.renderIntoDocument(
      React.createElement(element, props, child)
    );
  },

  findByClass: React.addons.TestUtils.findRenderedDOMComponentWithClass
};
