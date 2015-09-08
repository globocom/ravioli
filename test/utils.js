var React = require('react/addons');

module.exports = {
  render: function(element){
    var renderer = React.addons.TestUtils.createRenderer();
    renderer.render(element);
    return renderer.getRenderOutput();
  }
};
