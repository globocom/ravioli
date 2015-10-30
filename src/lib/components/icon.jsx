var React = require('react');
var ClassList = require('../mixins/classlist');
var propsfilter = require('../helpers/props-filter');


var GnocchiIcon = React.createClass({
  displayName: 'Gnocchi.Icon',
  mixins: [ClassList],

  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function(){
    const otherAttrs = propsfilter(this.props, GnocchiIcon.propTypes);
    const className = this.classList('gnocchi-icon', this.props.type);

    return <i {...otherAttrs} className={className}></i>;
  }
});

module.exports = GnocchiIcon;
