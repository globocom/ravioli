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

var _helpersPropsfilter = require('../helpers/propsfilter');

var _helpersPropsfilter2 = _interopRequireDefault(_helpersPropsfilter);

var _helpersKeycodes = require('../helpers/keycodes');

var _helpersKeycodes2 = _interopRequireDefault(_helpersKeycodes);

var GnocchiCheck = (function (_React$Component) {
  _inherits(GnocchiCheck, _React$Component);

  function GnocchiCheck(props) {
    _classCallCheck(this, GnocchiCheck);

    _get(Object.getPrototypeOf(GnocchiCheck.prototype), 'constructor', this).call(this, props);
    this.state = { checked: props.checked };
  }

  _createClass(GnocchiCheck, [{
    key: 'preventFocusOnClick',
    value: function preventFocusOnClick(event) {
      event.preventDefault();
    }
  }, {
    key: 'handleControl',
    value: function handleControl(event) {
      if (event.which === _helpersKeycodes2['default'].SPACE) {
        event.preventDefault();
        this.toggle();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var newValue = !this.state.checked;
      if (this.props.onChange) this.props.onChange(newValue);
      this.setState({ checked: newValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var otherAttrs = (0, _helpersPropsfilter2['default'])(this.props, GnocchiCheck.propTypes);
      var className = (0, _classnames2['default'])('gnocchi-check-box', {
        'gnocchi--is-checked': this.state.checked
      });

      return _react2['default'].createElement(
        'div',
        _extends({}, otherAttrs, { className: 'gnocchi-check' }),
        _react2['default'].createElement(
          'div',
          {
            className: className,
            tabIndex: '0',
            onClick: this.toggle.bind(this),
            onKeyDown: this.handleControl.bind(this),
            onMouseDown: this.preventFocusOnClick },
          this.state.checked ? _react2['default'].createElement(_icon2['default'], { type: 'check' }) : ''
        ),
        this.renderLabel()
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      if (this.props.label) {
        return _react2['default'].createElement(
          'span',
          { className: 'gnocchi-check-label', onClick: this.toggle.bind(this) },
          this.props.label
        );
      }
    }
  }]);

  return GnocchiCheck;
})(_react2['default'].Component);

exports['default'] = GnocchiCheck;

GnocchiCheck.propTypes = {
  checked: _react2['default'].PropTypes.bool,
  label: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
};

GnocchiCheck.defaultProps = {
  checked: false
};
module.exports = exports['default'];
