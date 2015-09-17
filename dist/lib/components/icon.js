/* global require, module */
'use strict';

var React = require('react');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Icon',
  mixins: [ClassList],

  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function render() {
    return React.createElement('i', { className: this.classList('gnocchi-icon', this.props.type) });
  }
});
