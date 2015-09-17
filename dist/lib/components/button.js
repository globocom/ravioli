/* global require, module, console */
'use strict';

var React = require('react');
var GnocchiIcon = require('./icon');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Button',
  mixins: [ClassList],

  propTypes: {
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    classes: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      'button',
      { className: this.classList('gnocchi-button', this.props.classes) },
      this.props.label,
      this.props.icon ? React.createElement(GnocchiIcon, { type: this.props.icon }) : ''
    );
  }
});
