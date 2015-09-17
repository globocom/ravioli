/* global require, module */
var React = require('react');
var GnocchiText = require('./text');
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Number',

  propTypes: {
    placeholder: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps: () => {
    return {
      placeholder: '#',
      value: ''
    };
  },

  onkeypress: event => {
    if(event.which < 48 || event.which > 57) event.preventDefault();
  },

  onkeydown: function(event){
    if(event.which === 38) this.increment();
    else if(event.which === 40) this.decrement();
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
            <GnocchiIcon type='arrow-up'/>
          </div>
          <div className='gnocchi-number-down' onClick={this.decrement}>
            <GnocchiIcon type='arrow-down'/>
          </div>
        </div>
      </div>
    );
  }
});
