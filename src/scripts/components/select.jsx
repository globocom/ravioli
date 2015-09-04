/* global React, console */
'use strict';

var GnocchiSelect = React.createClass({
  getInitialState: function(){
    return {
      open: false,
      selectedOption: null
    };
  },

  keydown: function(event){
    if(this.state.open){
      switch(event.which){
        case 27: this.toggle(); break; // esc
        case 38: this.up();     break; // up arrow
        case 40: this.down();   break; // down arrow
        case 13:                       // enter
        case 32: this.select(); break; // space
      }
    } else if([40, 13, 32].indexOf(event.which) !== -1){ // down, enter, space
      this.toggle();
    }

    if([27, 38, 40, 13, 32].indexOf(event.which) !== -1){
      event.preventDefault();
    }
  },

  toggle: function(){
    this.setState({open: !this.state.open});
  },

  up: function(){},

  down: function(){},

  select: function(){},

  render: function(){
    var className = 'gnocchi-select';
    if(this.state.open) className += ' gnocchi--is-open';

    var iconClassName = 'gnocchi-icon gnocchi-icon-arrow-';
    iconClassName += this.state.open ? 'up' : 'down';

    return (
      <div className={className} tabIndex='0' onKeyDown={this.keydown}>
        <div className='gnocchi-text' onClick={this.toggle}>
          <div className='gnocchi-select-display'>{this.state.selectedOption}</div>
          <div className='gnocchi-select-button'>
            <i className={iconClassName}></i>
          </div>
        </div>
        <ul className='gnocchi-select-options'>
          {this.props.options.map(this.renderOption)}
        </ul>
      </div>
    );
  },

  renderOption: function(option){
    return (
      <li className='gnocchi-select-option' data-value={option.value || option}>
        {option.label || option}
      </li>
    );
  }
});
