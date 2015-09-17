/* global require, module, console */
'use strict';

var React = require('react');
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Select',

  propTypes: {
    options: React.PropTypes.array,
    placeholder: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      options: [],
      placeholder: 'Select something'
    };
  },

  getInitialState: function getInitialState() {
    return {
      open: false,
      focusedOption: null,
      selectedOption: null
    };
  },

  preventFocusOnClick: function preventFocusOnClick(event) {
    return event.preventDefault();
  },

  onkeydown: function onkeydown(event) {
    if (this.state.open) {
      switch (event.which) {
        case 27:
          this.close();break; // esc
        case 38:
          this.focusPrev();break; // up arrow
        case 40:
          this.focusNext();break; // down arrow
        case 13: // enter
        case 32:
          this.selectOption(this.state.focusedOption);break; // space
      }
    } else if ([40, 13, 32].indexOf(event.which) !== -1) {
        // down, enter, space
        this.open();
      }

    if ([27, 38, 40, 13, 32].indexOf(event.which) !== -1) event.preventDefault();
  },

  open: function open() {
    if (!this.state.open) this.setState({ open: true });
  },

  close: function close() {
    if (this.state.open) {
      this.setState({ open: false });
      this.focusOption(null);
    }
  },

  toggle: function toggle() {
    this.state.open ? this.close() : this.open();
  },

  focusPrev: function focusPrev() {
    if (this.state.focusedOption > 0) this.focusOption(this.state.focusedOption - 1);
  },

  focusNext: function focusNext() {
    var newFocusedOption = this.state.focusedOption;

    if (this.state.focusedOption === null) newFocusedOption = 0;else if (this.state.focusedOption < this.props.options.length - 1) newFocusedOption++;

    this.focusOption(newFocusedOption);
  },

  focusOption: function focusOption(optionIndex) {
    this.setState({ focusedOption: optionIndex });
  },

  selectOption: function selectOption(optionIndex) {
    this.setState({ selectedOption: optionIndex });
    this.close();
  },

  render: function render() {
    var className = 'gnocchi-select';
    if (this.state.open) className += ' gnocchi--is-open';

    return React.createElement(
      'div',
      {
        className: className,
        tabIndex: '0',
        onBlur: this.close,
        onKeyDown: this.onkeydown,
        onMouseDown: this.preventFocusOnClick,
        onMouseLeave: this.focusOption.bind(this, null) },
      React.createElement(
        'div',
        { className: 'gnocchi-text', onClick: this.toggle },
        React.createElement(
          'div',
          { className: 'gnocchi-select-display' },
          this.renderDisplay(this.state.selectedOption)
        ),
        React.createElement(
          'div',
          { className: 'gnocchi-select-button' },
          React.createElement(GnocchiIcon, { type: this.state.open ? 'arrow-up' : 'arrow-down' })
        )
      ),
      React.createElement(
        'ul',
        { className: 'gnocchi-select-list' },
        this.props.options.map(this.renderOption)
      )
    );
  },

  renderDisplay: function renderDisplay(optionIndex) {
    var selected = this.props.options[optionIndex];
    if (selected) return selected.label || selected;
    return React.createElement(
      'span',
      { className: 'gnocchi-placeholder' },
      this.props.placeholder
    );
  },

  renderOption: function renderOption(option, i) {
    var className = 'gnocchi-select-option';

    if (i === this.state.focusedOption) className += ' gnocchi--is-focused';
    if (i === this.state.selectedOption) className += ' gnocchi--is-selected';

    return React.createElement(
      'li',
      {
        className: className,
        'data-value': option.value || option,
        onMouseEnter: this.focusOption.bind(this, i),
        onClick: this.selectOption.bind(this, i) },
      option.label || option,
      i === this.state.selectedOption ? React.createElement(GnocchiIcon, { type: 'check' }) : ''
    );
  }
});
