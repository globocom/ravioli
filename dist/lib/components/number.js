/* global require, module */
'use strict';

var React = require('react');
var GnocchiText = require('./text');
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Number',

  propTypes: {
    placeholder: React.PropTypes.string,
    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placeholder: '#',
      value: ''
    };
  },

  getInitialState: function getInitialState() {
    return { value: this.props.value };
  },

  onkeypress: function onkeypress(event) {
    if (event.which < 48 || event.which > 57) event.preventDefault();
  },

  onkeydown: function onkeydown(event) {
    if (event.which === 38) this.increment();else if (event.which === 40) this.decrement();
  },

  oninput: function oninput(event) {
    this.setValue(event.target.value);
  },

  setValue: function setValue(value) {
    value = parseInt(value, 10);
    this.setState({ value: isNaN(value) ? '' : value });
  },

  increment: function increment() {
    this.setValue(this.state.value + 1);
  },

  decrement: function decrement() {
    this.setValue(this.state.value - 1);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'gnocchi-number' },
      React.createElement(GnocchiText, {
        value: this.state.value,
        placeholder: this.props.placeholder,
        onKeyPress: this.onkeypress,
        onKeyDown: this.onkeydown,
        onInput: this.oninput,
        onChange: function () {} }),
      React.createElement(
        'div',
        { className: 'gnocchi-number-buttons' },
        React.createElement(
          'div',
          { className: 'gnocchi-number-up', onClick: this.increment },
          React.createElement(GnocchiIcon, { type: 'arrow-up' })
        ),
        React.createElement(
          'div',
          { className: 'gnocchi-number-down', onClick: this.decrement },
          React.createElement(GnocchiIcon, { type: 'arrow-down' })
        )
      )
    );
  }
});
