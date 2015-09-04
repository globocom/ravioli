/* global React, console */
'use strict';

var GnocchiSelect = React.createClass({
  getInitialState: function(){
    return {
      open: false
    };
  },

  keydown: function(event){
    if(this.state.open){
      if(event.which === 27){ // esc
        this.toggle();
      } else{
        // select
      }
    } else if(event.which === 40 || event.which === 13 || event.which === 32){
      this.toggle();
    }

    event.preventDefault();
  },

  toggle: function(){
    this.setState({open: !this.state.open});
  },

  render: function(){
    var className = 'gnocchi-select';
    if(this.state.open) className += ' gnocchi--is-open';

    var iconClassName = 'gnocchi-icon gnocchi-icon-arrow-';
    iconClassName += this.state.open ? 'up' : 'down';

    return (
      <div className={className} tabIndex='0' onKeyDown={this.keydown}>
        <div className='gnocchi-text' onClick={this.toggle}>
          <div className='gnocchi-select-display'>placeholder / value</div>
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
