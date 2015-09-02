/* global React, FocusMixin */
'use strict';

var GnocchiNumber = React.createClass({
  mixins: [FocusMixin],

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
    this.focus();
    this.setValue(this.props.value + 1);
  },

  decrement: function(){
    this.focus();
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
        <input className='gnocchi-number-input'
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.value}
          onFocus={this.focus}
          onBlur={this.blur}
          onKeyPress={this.keypress}
          onKeyDown={this.keydown}
          onInput={this.input} />
        <div className='gnocchi-number-buttons'>
          <button className='gnocchi-number-up' onClick={this.increment} />
          <button className='gnocchi-number-down' onClick={this.decrement} />
        </div>
      </div>
    );
  }
});
