/* global require, module */
'use strict';

var React = require('react');
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Check',

  propTypes: {
    checked: React.PropTypes.bool,
    label: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      label: 'Check me'
    };
  },

  preventFocusOnClick: function preventFocusOnClick(event) {
    return event.preventDefault();
  },

  toggle: function toggle() {
    this.setProps({ checked: !this.props.checked });
  },

  render: function render() {
    var className = 'gnocchi-check-box';
    if (this.props.checked) className += ' gnocchi--is-checked';

    return React.createElement(
      'div',
      { className: 'gnocchi-check' },
      React.createElement(
        'div',
        {
          className: className,
          tabIndex: '0',
          onClick: this.toggle,
          onMouseDown: this.preventFocusOnClick },
        this.props.checked ? React.createElement(GnocchiIcon, { type: 'check' }) : ''
      ),
      React.createElement(
        'span',
        { className: 'gnocchi-check-label', onClick: this.toggle },
        this.props.label
      )
    );
  }
});
