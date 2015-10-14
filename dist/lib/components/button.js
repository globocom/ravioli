/* global require, module, console */
'use strict';

var React = require('react');
var GnocchiIcon = require('./icon');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Button',
  mixins: [ClassList],

  propTypes: {
    link: React.PropTypes.string,
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    classes: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render: function render() {
    return this.props.link ? this.renderLink() : this.renderButton();
  },

  renderLink: function renderLink() {
    return React.createElement(
      'a',
      { className: this.renderClassNames(), href: this.props.link },
      this.renderLabel()
    );
  },

  renderButton: function renderButton() {
    return React.createElement(
      'button',
      { className: this.renderClassNames() },
      this.renderLabel()
    );
  },

  renderClassNames: function renderClassNames() {
    var classNames = this.classList('gnocchi-button', this.props.classes);
    if (this.props.className) classNames += ' ' + this.props.className;
    return classNames;
  },

  renderLabel: function renderLabel() {
    return React.createElement(
      'span',
      null,
      this.props.label,
      this.props.icon ? React.createElement(GnocchiIcon, { type: this.props.icon }) : ''
    );
  }
});
