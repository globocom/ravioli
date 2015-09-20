/* global require, module, console */
var React = require('react');
var GnocchiIcon = require('./icon');

module.exports = React.createClass({
  displayName: 'Gnocchi.Select',

  propTypes: {
    options: React.PropTypes.array,
    placeholder: React.PropTypes.string
  },

  getDefaultProps: () => {
    return {
      options: [],
      placeholder: 'Select something'
    };
  },

  getInitialState: () => {
    return {
      open: false,
      focusedOption: null,
      selectedOption: null
    };
  },

  preventFocusOnClick: event => event.preventDefault(),

  onkeydown: function(event){
    if(this.state.open){
      switch(event.which){
        case 27: this.close();      break; // esc
        case 38: this.focusPrev();  break; // up arrow
        case 40: this.focusNext();  break; // down arrow
        case 13:                           // enter
        case 32: this.selectOption(this.state.focusedOption); break; // space
      }
    } else if([40, 13, 32].indexOf(event.which) !== -1){ // down, enter, space
      this.open();
    }

    if([27, 38, 40, 13, 32].indexOf(event.which) !== -1)
      event.preventDefault();
  },

  open: function(){
    if(!this.state.open) this.setState({open: true});
  },

  close: function(){
    if(this.state.open){
      this.setState({open: false});
      this.focusOption(null);
    }
  },

  toggle: function(){
    this.state.open ? this.close() : this.open();
  },

  focusPrev: function(){
    if(this.state.focusedOption > 0)
      this.focusOption(this.state.focusedOption - 1);
  },

  focusNext: function(){
    var newFocusedOption = this.state.focusedOption;

    if(this.state.focusedOption === null)
      newFocusedOption = 0;
    else if(this.state.focusedOption < this.props.options.length - 1)
      newFocusedOption++;

    this.focusOption(newFocusedOption);
  },

  focusOption: function(optionIndex){
    this.setState({focusedOption: optionIndex});
  },

  selectOption: function(optionIndex){
    this.setState({selectedOption: optionIndex});
    this.close();
  },

  render: function(){
    var className = 'gnocchi-select';
    if(this.state.open) className += ' gnocchi--is-open';

    return (
      <div
        className={className}
        tabIndex='0'
        onBlur={this.close}
        onKeyDown={this.onkeydown}
        onMouseDown={this.preventFocusOnClick}
        onMouseLeave={this.focusOption.bind(this, null)}>
        <div className='gnocchi-text' onClick={this.toggle}>
          <div className='gnocchi-select-display'>
            {this.renderDisplay(this.state.selectedOption)}
          </div>
          <div className='gnocchi-select-button'>
            <GnocchiIcon type={this.state.open ? 'arrow-up' : 'arrow-down'}/>
          </div>
        </div>
        <ul className='gnocchi-select-list'>
          {this.props.options.map(this.renderOption)}
        </ul>
      </div>
    );
  },

  renderDisplay: function(optionIndex){
    var selected = this.props.options[optionIndex];
    if(selected) return selected.label || selected;
    return <span className='gnocchi-placeholder'>{this.props.placeholder}</span>;
  },

  renderOption: function(option, i){
    var className = 'gnocchi-select-option';

    if(i === this.state.focusedOption) className += ' gnocchi--is-focused';
    if(i === this.state.selectedOption) className += ' gnocchi--is-selected';

    return (
      <li
        className={className}
        key={option.value || option}
        onMouseEnter={this.focusOption.bind(this, i)}
        onClick={this.selectOption.bind(this, i)}>
        {option.label || option}
        {i === this.state.selectedOption ? <GnocchiIcon type='check'/> : ''}
      </li>
    );
  }
});