/* global React */
'use strict';

var GnocchiSelect = React.createClass({
  render: function(){
    return (
      <div className='gnocchi-select gnocchi--is-open'>
        <div className='gnocchi-text'>
          <div className='gnocchi-select-display'>placeholder / value</div>
          <div className='gnocchi-select-button'>
            <i className='gnocchi-icon gnocchi-icon-arrow-down'></i>
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
