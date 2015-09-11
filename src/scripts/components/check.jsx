/* global require, module */

var React = require('react');

var GnocchiCheck = React.createClass({
  getDefaultProps: function(){
    return {
      checked: false,
      label: 'Check me'
    };
  },

  toggle: function(){
    this.setProps({checked: !this.props.checked});
  },

  render: function(){
    var className = 'gnocchi-check-box';
    if(this.props.checked) className += ' gnocchi--is-checked';

    return (
      <div className='gnocchi-check'>
        <div className={className} tabIndex='0' onClick={this.toggle}>
          <i className='gnocchi-icon gnocchi-icon-check'></i>
        </div>
        <span className='gnocchi-check-label' onClick={this.toggle}>
          {this.props.label}
        </span>
      </div>
    );
  }
});

module.exports = GnocchiCheck;
