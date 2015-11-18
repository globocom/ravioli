'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var GnocchiCounter = (function (_React$Component) {
  _inherits(GnocchiCounter, _React$Component);

  function GnocchiCounter() {
    _classCallCheck(this, GnocchiCounter);

    _get(Object.getPrototypeOf(GnocchiCounter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GnocchiCounter, [{
    key: 'count',
    value: function count(value, max) {
      var subtract = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      var string = value.toString();

      if (subtract) {
        if (isNaN(parseInt(max, 10))) throw new Error('GnocchiCounter: `max` must be a number');

        return max - string.length;
      }

      return string.length;
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.count(this.props.value, this.props.max, this.props.subtract);
      var className = (0, _classnames2['default'])('gnocchi-counter', {
        'gnocchi-counter--is-exceeded': count < 0 || count > this.props.max
      });

      return _react2['default'].createElement(
        'div',
        { className: className },
        count
      );
    }
  }]);

  return GnocchiCounter;
})(_react2['default'].Component);

exports['default'] = GnocchiCounter;

GnocchiCounter.propTypes = {
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  max: _react2['default'].PropTypes.number,
  subtract: _react2['default'].PropTypes.bool
};

GnocchiCounter.defaultProps = {
  value: '',
  subtract: false
};
module.exports = exports['default'];
