/**
 * Gnocchi - Gnocchi is a UI component set for form elements.
 *
 * @author Almir Filho <almir@almirfilho.com>
 * @version 0.0.2
 * @license MIT
 */

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* global require, module, console */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../mixins/classlist":8,"./icon":3}],2:[function(require,module,exports){
(function (global){
/* global require, module */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Check',

  propTypes: {
    checked: React.PropTypes.bool,
    label: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return { checked: false };
  },

  getInitialState: function getInitialState() {
    return { checked: this.props.checked };
  },

  preventFocusOnClick: function preventFocusOnClick(event) {
    return event.preventDefault();
  },

  toggle: function toggle() {
    var newValue = !this.state.checked;
    if (this.props.onChange) this.props.onChange(newValue);
    this.setState({ checked: newValue });
  },

  render: function render() {
    var className = 'gnocchi-check-box';
    if (this.state.checked) className += ' gnocchi--is-checked';

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
        this.state.checked ? React.createElement(GnocchiIcon, { type: 'check' }) : ''
      ),
      this.renderLabel()
    );
  },

  renderLabel: function renderLabel() {
    if (this.props.label) {
      return React.createElement(
        'span',
        { className: 'gnocchi-check-label', onClick: this.toggle },
        this.props.label
      );
    }
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./icon":3}],3:[function(require,module,exports){
(function (global){
/* global require, module */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../mixins/classlist":8}],4:[function(require,module,exports){
(function (global){
/* global require, module */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./icon":3,"./text":6}],5:[function(require,module,exports){
(function (global){
/* global require, module, console */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Select',

  propTypes: {
    placeholder: React.PropTypes.string,
    selected: React.PropTypes.string,
    options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
      value: React.PropTypes.string,
      label: React.PropTypes.string
    })]))
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
      selectedOption: this.getOptionIndex(this.props.selected)
    };
  },

  getOptionIndex: function getOptionIndex(str) {
    if (str) {
      var idx = this.props.options.findIndex(function (o) {
        return o === str || o.value === str;
      });
      if (idx !== -1) return idx;
    }

    return null;
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
      this.unfocusOption();
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
    if (optionIndex >= 0 && optionIndex < this.props.options.length) this.setState({ focusedOption: optionIndex });
  },

  unfocusOption: function unfocusOption() {
    this.setState({ focusedOption: null });
  },

  selectOption: function selectOption(optionIndex) {
    if (optionIndex >= 0 && optionIndex < this.props.options.length || optionIndex === null) {
      this.triggerChange(this.state.selectedOption, optionIndex);
      this.setState({ selectedOption: optionIndex });
      this.close();
    }
  },

  triggerChange: function triggerChange(oldOptionIndex, newOptionIndex) {
    if (this.props.onChange && oldOptionIndex !== newOptionIndex) {
      var selectedValue = null;

      if (newOptionIndex) {
        var selected = this.props.options[newOptionIndex];
        selectedValue = selected.value || selected;
      }

      this.props.onChange(selectedValue);
    }
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
        onMouseLeave: this.unfocusOption },
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
        key: option.value || option,
        'data-value': option.value || option,
        onMouseEnter: this.focusOption.bind(this, i),
        onClick: this.selectOption.bind(this, i) },
      option.label || option,
      i === this.state.selectedOption ? React.createElement(GnocchiIcon, { type: 'check' }) : ''
    );
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./icon":3}],6:[function(require,module,exports){
(function (global){
/* global module, require */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports = React.createClass({
  displayName: 'Gnocchi.Text',

  propTypes: {
    placeholder: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placeholder: 'Type something'
    };
  },

  render: function render() {
    return React.createElement('input', {
      className: 'gnocchi-text',
      type: 'text',
      value: this.props.value,
      placeholder: this.props.placeholder,
      onKeyPress: this.props.onKeyPress,
      onKeyDown: this.props.onKeyDown,
      onInput: this.props.onInput,
      onChange: this.props.onChange });
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
/* global require, module */
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports = React.createClass({
  displayName: 'Gnocchi.Textarea',

  propTypes: {
    placeholder: React.PropTypes.string,
    lines: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placeholder: 'Type something',
      lines: 4
    };
  },

  render: function render() {
    return React.createElement('textarea', {
      className: 'gnocchi-textarea',
      rows: this.props.lines,
      placeholder: this.props.placeholder });
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
/* global module */

'use strict';

module.exports = {
  classList: function classList(baseClass, otherClasses) {
    baseClass = baseClass.trim();
    var rendered = baseClass;

    if (otherClasses) {
      var classlist = otherClasses.split(',').filter(function (c) {
        return !!c.trim();
      }).map(function (c) {
        return baseClass + '-' + c.trim();
      }).join(' ');

      if (classlist) rendered += ' ' + classlist;
    }

    return rendered;
  }
};

},{}],"gnocchi":[function(require,module,exports){
/* global require, module, window */

'use strict';

var Gnocchi = {
  Button: require('./components/button'),
  Check: require('./components/check'),
  Number: require('./components/number'),
  Select: require('./components/select'),
  Text: require('./components/text'),
  Textarea: require('./components/textarea')
};

module.exports = Gnocchi;

if (typeof window !== 'undefined') window.Gnocchi = Gnocchi;

},{"./components/button":1,"./components/check":2,"./components/number":4,"./components/select":5,"./components/text":6,"./components/textarea":7}]},{},["gnocchi"]);
