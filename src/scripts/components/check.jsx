/* global require, module */
var React = require('react');

module.exports = React.createClass({
  displayName: 'Gnocchi.Check',

  propTypes: {
    checked: React.PropTypes.bool,
    label: React.PropTypes.string
  },

  getDefaultProps: () => {
    return {
      checked: false,
      label: 'Check me'
    };
  },

  preventFocusOnClick: event => event.preventDefault(),

  toggle: function(){
    this.setProps({checked: !this.props.checked});
  },

  render: function(){
    var className = 'gnocchi-check-box';
    if(this.props.checked) className += ' gnocchi--is-checked';

    return (
      <div className='gnocchi-check'>
        <div
          className={className}
          tabIndex='0'
          onClick={this.toggle}
          onMouseDown={this.preventFocusOnClick}>
          <i className='gnocchi-icon gnocchi-icon-check'></i>
        </div>
        <span className='gnocchi-check-label' onClick={this.toggle}>
          {this.props.label}
        </span>
      </div>
    );
  }
});
