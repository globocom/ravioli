var React = require('react');
var classlist = require('../helpers/classlist');
var propsfilter = require('../helpers/props-filter');


var GnocchiIcon = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function(){
    const otherAttrs = propsfilter(this.props, GnocchiIcon.propTypes);
    const className = classlist('gnocchi-icon', this.props.type);

    return <i {...otherAttrs} className={className}></i>;
  }
});

module.exports = GnocchiIcon;
