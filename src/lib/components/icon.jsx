/* global require, module */
var React = require('react');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Icon',
  mixins: [ClassList],

  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function(){
    return <i className={this.classList('gnocchi-icon', this.props.type)}></i>;
  }
});
