'use strict';

var GnocchiNumber = React.createClass({
  getDefaultProps: function(){
    return {
      placeholder: '#'
    }
  },

  render: function(){
    return (
      <div className='gnocchi-number'>
        <input className='gnocchi-number-input'
          type='text'
          placeholder={this.props.placeholder}
          onFocus={this.focus}
          onBlur={this.blur} />
        <div className='gnocchi-number-buttons'>
          <button className='gnocchi-number-button'>^</button>
          <button className='gnocchi-number-button'>v</button>
        </div>
      </div>
    );
  }
});
