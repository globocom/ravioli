'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _helpersPropsfilter = require('../helpers/propsfilter');

var _helpersPropsfilter2 = _interopRequireDefault(_helpersPropsfilter);

var _helpersKeycodes = require('../helpers/keycodes');

var _helpersKeycodes2 = _interopRequireDefault(_helpersKeycodes);

var GnocchiNumber = (function (_React$Component) {
  _inherits(GnocchiNumber, _React$Component);

  function GnocchiNumber(props) {
    _classCallCheck(this, GnocchiNumber);

    _get(Object.getPrototypeOf(GnocchiNumber.prototype), 'constructor', this).call(this, props);

    var _parse = this.parse(props.value);

    var value = _parse.value;
    var display = _parse.display;

    this.state = { value: this.truncate(value), display: this.truncate(value) };
  }

  _createClass(GnocchiNumber, [{
    key: 'handleTyping',
    value: function handleTyping(event) {
      var key = event.which;

      if (this.props.float) {
        if (key !== _helpersKeycodes2['default'].DOT && (key < _helpersKeycodes2['default'].N0 || key > _helpersKeycodes2['default'].N9)) event.preventDefault();else if (key === _helpersKeycodes2['default'].DOT && event.target.value.indexOf('.') !== -1) event.preventDefault();
      } else if (key < _helpersKeycodes2['default'].N0 || key > _helpersKeycodes2['default'].N9) {
        event.preventDefault();
      }
    }
  }, {
    key: 'handleControl',
    value: function handleControl(event) {
      if (event.which === _helpersKeycodes2['default'].UP) this.increment();else if (event.which === _helpersKeycodes2['default'].DOWN) this.decrement();
    }
  }, {
    key: 'increment',
    value: function increment() {
      var value = Number(this.state.value);
      this.setValue(this.props.float ? this.floatsum(value, 1) : value + 1);
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      var value = Number(this.state.value);
      this.setValue(this.props.float ? this.floatsum(value, -1) : value - 1);
    }
  }, {
    key: 'floatsum',
    value: function floatsum(number, delta) {
      var sum = number + delta;

      if (sum % 1 !== 0) {
        var precision = number.toString().split('.')[1].length;
        sum = sum.toFixed(precision);
      }

      return sum;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      var _parse2 = this.parse(newValue);

      var value = _parse2.value;
      var display = _parse2.display;

      if (this.validate(value, this.props.float)) {
        if (this.props.onChange && value !== this.state.value) this.props.onChange.call(null, value);

        this.setState({ value: value, display: display });
      }
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      var float = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (value === '') return true;
      var isValid = !isNaN(value);
      if (!float) isValid = isValid && value.toString().indexOf('.') === -1;
      return isValid && !(value < this.props.min || value > this.props.max);
    }
  }, {
    key: 'parse',
    value: function parse(value) {
      var string = value.toString();
      var number = parseFloat(string);

      var display = string;
      value = number;

      if (string === '.') {
        value = 0;
        display = '0.';
      } else if (isNaN(number)) value = display = '';

      return { value: value, display: display };
    }
  }, {
    key: 'truncate',
    value: function truncate(value) {
      if (value < this.props.min) return this.props.min;
      if (value > this.props.max) return this.props.max;
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var otherAttrs = (0, _helpersPropsfilter2['default'])(this.props, GnocchiNumber.propTypes);

      return _react2['default'].createElement(
        'div',
        _extends({}, otherAttrs, { className: 'gnocchi-number' }),
        _react2['default'].createElement(_text2['default'], {
          value: this.state.display,
          placeholder: this.props.placeholder,
          onKeyPress: this.handleTyping.bind(this),
          onKeyDown: this.handleControl.bind(this),
          onChange: this.setValue.bind(this) }),
        _react2['default'].createElement(
          'div',
          { className: 'gnocchi-number-buttons' },
          _react2['default'].createElement(
            'div',
            { className: 'gnocchi-number-up', onClick: this.increment.bind(this) },
            _react2['default'].createElement(_icon2['default'], { type: 'arrow-up' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'gnocchi-number-down', onClick: this.decrement.bind(this) },
            _react2['default'].createElement(_icon2['default'], { type: 'arrow-down' })
          )
        )
      );
    }
  }]);

  return GnocchiNumber;
})(_react2['default'].Component);

exports['default'] = GnocchiNumber;

GnocchiNumber.propTypes = {
  placeholder: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onChange: _react2['default'].PropTypes.func,
  float: _react2['default'].PropTypes.bool,
  min: _react2['default'].PropTypes.number,
  max: _react2['default'].PropTypes.number
};

GnocchiNumber.defaultProps = {
  placeholder: '#',
  value: '',
  float: false
};
module.exports = exports['default'];
