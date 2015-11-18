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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _counter = require('./counter');

var _counter2 = _interopRequireDefault(_counter);

var _helpersPropsfilter = require('../helpers/propsfilter');

var _helpersPropsfilter2 = _interopRequireDefault(_helpersPropsfilter);

var GnocchiText = (function (_React$Component) {
  _inherits(GnocchiText, _React$Component);

  function GnocchiText(props) {
    _classCallCheck(this, GnocchiText);

    _get(Object.getPrototypeOf(GnocchiText.prototype), 'constructor', this).call(this, props);
    this.state = { value: props.value };
  }

  _createClass(GnocchiText, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var newValue = event.target.value;
      this.setState({ value: newValue });
      if (this.props.onChange) this.props.onChange.call(null, newValue);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ value: props.value });
    }
  }, {
    key: 'empty',
    value: function empty(value) {
      return value === null || value === undefined || value === '';
    }
  }, {
    key: 'render',
    value: function render() {
      var otherAttrs = (0, _helpersPropsfilter2['default'])(this.props, GnocchiText.propTypes);
      var className = (0, _classnames2['default'])('gnocchi-text-wrapper', {
        'gnocchi--is-required': this.props.required,
        'gnocchi--has-counter': this.props.counter
      });

      return _react2['default'].createElement(
        'div',
        _extends({}, otherAttrs, { className: className }),
        _react2['default'].createElement('input', {
          className: 'gnocchi-text',
          type: 'text',
          value: this.props.value,
          onChange: this.handleChange.bind(this) }),
        this.renderRequiredIcon(),
        this.renderPlaceholder(),
        this.renderCounter()
      );
    }
  }, {
    key: 'renderRequiredIcon',
    value: function renderRequiredIcon() {
      if (this.props.required && this.empty(this.state.value)) return _react2['default'].createElement(_icon2['default'], { type: 'warn', className: 'gnocchi-text-required-icon' });
    }
  }, {
    key: 'renderPlaceholder',
    value: function renderPlaceholder() {
      if (this.props.placeholder && this.empty(this.state.value)) return _react2['default'].createElement(
        'span',
        { className: 'gnocchi-placeholder' },
        this.props.placeholder
      );
    }
  }, {
    key: 'renderCounter',
    value: function renderCounter() {
      if (this.props.counter) return _react2['default'].createElement(_counter2['default'], {
        value: this.state.value,
        max: this.props.counterMax,
        subtract: this.props.counter === 'subtract' });
    }
  }]);

  return GnocchiText;
})(_react2['default'].Component);

exports['default'] = GnocchiText;

GnocchiText.propTypes = {
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  placeholder: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onChange: _react2['default'].PropTypes.func
};

GnocchiText.defaultProps = {
  placeholder: 'Type something'
};
module.exports = exports['default'];
