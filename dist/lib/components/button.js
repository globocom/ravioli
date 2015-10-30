'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _helpersClasslist = require('../helpers/classlist');

var _helpersClasslist2 = _interopRequireDefault(_helpersClasslist);

var _helpersPropsfilter = require('../helpers/propsfilter');

var _helpersPropsfilter2 = _interopRequireDefault(_helpersPropsfilter);

var _underscore = require('underscore');

var GnocchiButton = (function (_React$Component) {
  _inherits(GnocchiButton, _React$Component);

  function GnocchiButton() {
    _classCallCheck(this, GnocchiButton);

    _get(Object.getPrototypeOf(GnocchiButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GnocchiButton, [{
    key: 'render',
    value: function render() {
      var tag = 'button';
      var props = (0, _underscore.extend)({}, (0, _helpersPropsfilter2['default'])(this.props, GnocchiButton.propTypes), { className: this.renderClassNames() });

      if (this.props.link) {
        tag = 'a';
        props.href = this.props.link;
      }

      return _react2['default'].createElement(tag, props, this.props.label, this.props.icon ? _react2['default'].createElement(_icon2['default'], { type: this.props.icon }) : '');
    }
  }, {
    key: 'renderClassNames',
    value: function renderClassNames() {
      var classNames = (0, _helpersClasslist2['default'])('gnocchi-button', this.props.classes);
      if (this.props.className) classNames += ' ' + this.props.className;
      return classNames;
    }
  }]);

  return GnocchiButton;
})(_react2['default'].Component);

exports['default'] = GnocchiButton;

GnocchiButton.propTypes = {
  link: _react2['default'].PropTypes.string,
  icon: _react2['default'].PropTypes.string,
  classes: _react2['default'].PropTypes.string,
  className: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
};
module.exports = exports['default'];
