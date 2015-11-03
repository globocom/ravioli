'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _helpersPropsfilter = require('../helpers/propsfilter');

var _helpersPropsfilter2 = _interopRequireDefault(_helpersPropsfilter);

var _helpersKeycodes = require('../helpers/keycodes');

var _helpersKeycodes2 = _interopRequireDefault(_helpersKeycodes);

var GnocchiSelect = (function (_React$Component) {
  _inherits(GnocchiSelect, _React$Component);

  function GnocchiSelect(props) {
    _classCallCheck(this, GnocchiSelect);

    _get(Object.getPrototypeOf(GnocchiSelect.prototype), 'constructor', this).call(this, props);

    this.state = {
      open: false,
      focusedOption: null,
      selectedOption: this.getOptionIndex(props.selected)
    };
  }

  _createClass(GnocchiSelect, [{
    key: 'getOptionValue',
    value: function getOptionValue(option) {
      return option.value === undefined ? option : option.value;
    }
  }, {
    key: 'getOptionLabel',
    value: function getOptionLabel(option) {
      return option.label === undefined ? option : option.label;
    }
  }, {
    key: 'getOptionIndex',
    value: function getOptionIndex(str) {
      if (str) {
        var idx = this.props.options.findIndex(function (o) {
          return o === str || o.value === str;
        });
        if (idx !== -1) return idx;
      }

      return null;
    }
  }, {
    key: 'isValidOption',
    value: function isValidOption(optionIndex) {
      return optionIndex >= 0 && optionIndex < this.props.options.length;
    }
  }, {
    key: 'onkeydown',
    value: function onkeydown(event) {
      var key = event.which;

      if (key === _helpersKeycodes2['default'].ESC || key === _helpersKeycodes2['default'].UP || key === _helpersKeycodes2['default'].DOWN || key === _helpersKeycodes2['default'].ENTER || key === _helpersKeycodes2['default'].SPACE) {

        if (this.state.open) {
          if (key === _helpersKeycodes2['default'].ESC) this.close();else if (key === _helpersKeycodes2['default'].UP) this.focusPrev();else if (key === _helpersKeycodes2['default'].DOWN) this.focusNext();else if (key === _helpersKeycodes2['default'].ENTER || key === _helpersKeycodes2['default'].SPACE) this.selectOption(this.state.focusedOption);
        } else if (key === _helpersKeycodes2['default'].DOWN || key === _helpersKeycodes2['default'].ENTER || key === _helpersKeycodes2['default'].SPACE) {
          this.open();
        }

        event.preventDefault();
      }
    }
  }, {
    key: 'open',
    value: function open() {
      if (!this.state.open) this.setState({ open: true });
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.state.open) {
        this.setState({ open: false });
        this.unfocusOption();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.state.open ? this.close() : this.open();
    }
  }, {
    key: 'focusPrev',
    value: function focusPrev() {
      if (this.state.focusedOption > 0) this.focusOption(this.state.focusedOption - 1);else if (this.props.empty) this.focusOption('empty');
    }
  }, {
    key: 'focusNext',
    value: function focusNext() {
      if (this.state.focusedOption === null) this.props.empty ? this.focusOption('empty') : this.focusOption(0);else if (this.state.focusedOption === 'empty') this.focusOption(0);else if (this.state.focusedOption < this.props.options.length - 1) this.focusOption(this.state.focusedOption + 1);
    }
  }, {
    key: 'focusOption',
    value: function focusOption(optionIndex) {
      if (this.isValidOption(optionIndex) || optionIndex === null || optionIndex === 'empty') this.setState({ focusedOption: optionIndex });
    }
  }, {
    key: 'unfocusOption',
    value: function unfocusOption() {
      this.setState({ focusedOption: null });
    }
  }, {
    key: 'selectOption',
    value: function selectOption(optionIndex) {
      if (this.isValidOption(optionIndex) || optionIndex === null || optionIndex === 'empty') {
        this.triggerChange(this.state.selectedOption, optionIndex);
        this.setState({ selectedOption: optionIndex });
        this.close();
      }
    }
  }, {
    key: 'triggerChange',
    value: function triggerChange(oldOptionIndex, newOptionIndex) {
      if (this.props.onChange && oldOptionIndex !== newOptionIndex) {
        var selectedValue = null;

        if (newOptionIndex !== null) {
          var selected = this.props.options[newOptionIndex];
          selectedValue = this.getOptionValue(selected);
        }

        this.props.onChange(selectedValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var otherAttrs = (0, _helpersPropsfilter2['default'])(this.props, GnocchiSelect.propTypes);
      var className = 'gnocchi-select';
      if (this.state.open) className += ' gnocchi--is-open';

      return _react2['default'].createElement(
        'div',
        _extends({}, otherAttrs, {
          className: className,
          tabIndex: '0',
          onBlur: this.close.bind(this),
          onKeyDown: this.onkeydown.bind(this),
          onMouseLeave: this.unfocusOption.bind(this) }),
        _react2['default'].createElement(
          'div',
          { className: 'gnocchi-text', onClick: this.toggle.bind(this) },
          _react2['default'].createElement(
            'div',
            { className: 'gnocchi-select-display' },
            this.renderDisplay(this.state.selectedOption)
          ),
          _react2['default'].createElement(
            'div',
            { className: 'gnocchi-select-button' },
            _react2['default'].createElement(_icon2['default'], { type: this.state.open ? 'arrow-up' : 'arrow-down' })
          )
        ),
        _react2['default'].createElement(
          'ul',
          { className: 'gnocchi-select-list' },
          this.renderEmptyOption(this.props.empty),
          this.props.options.map(this.renderOption.bind(this))
        )
      );
    }
  }, {
    key: 'renderDisplay',
    value: function renderDisplay(optionIndex) {
      var selected = this.props.options[optionIndex];
      if (selected) return this.getOptionLabel(selected);
      return _react2['default'].createElement(
        'span',
        { className: 'gnocchi-placeholder' },
        this.props.placeholder
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(option, i) {
      var className = 'gnocchi-select-option';
      if (i === this.state.focusedOption) className += ' gnocchi--is-focused';
      if (i === this.state.selectedOption) className += ' gnocchi--is-selected';

      return _react2['default'].createElement(
        'li',
        {
          key: i,
          className: className,
          'data-value': this.getOptionValue(option),
          onMouseEnter: this.focusOption.bind(this, i),
          onClick: this.selectOption.bind(this, i) },
        this.getOptionLabel(option),
        i === this.state.selectedOption ? _react2['default'].createElement(_icon2['default'], { type: 'check' }) : ''
      );
    }
  }, {
    key: 'renderEmptyOption',
    value: function renderEmptyOption(emptyOption) {
      if (emptyOption) {
        var className = 'gnocchi-select-option gnocchi-select-option-empty';
        if (this.state.focusedOption === 'empty') className += ' gnocchi--is-focused';

        return _react2['default'].createElement(
          'li',
          {
            className: className,
            onMouseEnter: this.focusOption.bind(this, 'empty'),
            onClick: this.selectOption.bind(this, null) },
          emptyOption
        );
      }
    }
  }]);

  return GnocchiSelect;
})(_react2['default'].Component);

exports['default'] = GnocchiSelect;

GnocchiSelect.propTypes = {
  empty: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  placeholder: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  selected: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number, _react2['default'].PropTypes.shape({
    value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    label: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
  })]))
};

GnocchiSelect.defaultProps = {
  empty: false,
  options: [],
  placeholder: 'Select something'
};
module.exports = exports['default'];
