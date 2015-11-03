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
    this.state = { value: this.convertValue(props.value) };
  }

  _createClass(GnocchiNumber, [{
    key: 'handleTyping',
    value: function handleTyping(event) {
      if (event.which < _helpersKeycodes2['default'].N0 || event.which > _helpersKeycodes2['default'].N9) event.preventDefault();
    }
  }, {
    key: 'handleControl',
    value: function handleControl(event) {
      if (event.which === _helpersKeycodes2['default'].UP) this.increment();else if (event.which === _helpersKeycodes2['default'].DOWN) this.decrement();
    }
  }, {
    key: 'increment',
    value: function increment() {
      this.setValue(this.state.value + 1);
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      this.setValue(this.state.value - 1);
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      newValue = this.convertValue(newValue);

      if (this.props.onChange && newValue !== this.state.value) this.props.onChange.call(null, newValue);

      this.setState({ value: newValue });
    }
  }, {
    key: 'convertValue',
    value: function convertValue(value) {
      value = parseInt(value, 10);
      return isNaN(value) ? '' : value;
    }
  }, {
    key: 'render',
    value: function render() {
      var otherAttrs = (0, _helpersPropsfilter2['default'])(this.props, GnocchiNumber.propTypes);

      return _react2['default'].createElement(
        'div',
        _extends({}, otherAttrs, { className: 'gnocchi-number' }),
        _react2['default'].createElement(_text2['default'], {
          value: this.state.value,
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
  onChange: _react2['default'].PropTypes.func
};

GnocchiNumber.defaultProps = {
  placeholder: '#',
  value: ''
};
module.exports = exports['default'];
