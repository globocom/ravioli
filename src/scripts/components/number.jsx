/* global React */
'use strict';

var GnocchiNumber = React.createClass({
  keydown: function(event){
    if(event.which === 38){
      this.increment();
    } else if(event.which === 40){
      this.decrement();
    }
  },

  keypress: function(event){
    if(event.which < 48 || event.which > 57){
      event.preventDefault();
    }
  },

  input: function(event){
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
          onKeyPress={this.keypress}
          onKeyDown={this.keydown}
          onInput={this.input} />
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
