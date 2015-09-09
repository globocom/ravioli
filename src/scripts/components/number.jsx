/* global require, module */
var React = require('react');
var GnocchiText = require('./text');

var GnocchiNumber = React.createClass({
  onkeydown: function(event){
    if(event.which === 38){
      this.increment();
    } else if(event.which === 40){
      this.decrement();
    }
  },

  onkeypress: function(event){
    if(event.which < 48 || event.which > 57){
      event.preventDefault();
    }
  },

  oninput: function(event){
    this.setValue(event.target.value);
  },

  setValue: function(value){
    value = parseInt(value, 10);
    this.setProps({value: isNaN(value) ? '' : value});
  },

  increment: function(){
    this.setValue(this.props.value + 1);
  },

  decrement: function(){
    this.setValue(this.props.value - 1);
  },

  getDefaultProps: function(){
    return {
      placeholder: '#',
      value: ''
    };
  },

  render: function(){
    return (
      <div className='gnocchi-number'>
        <GnocchiText
          value={this.props.value}
          placeholder={this.props.placeholder}
          onKeyPress={this.onkeypress}
          onKeyDown={this.onkeydown}
          onInput={this.oninput}
          onChange={function(){}} />
        <div className='gnocchi-number-buttons'>
          <div className='gnocchi-number-up' onClick={this.increment}>
            <i className='gnocchi-icon gnocchi-icon-arrow-up'></i>
          </div>
          <div className='gnocchi-number-down' onClick={this.decrement}>
            <i className='gnocchi-icon gnocchi-icon-arrow-down'></i>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GnocchiNumber;
