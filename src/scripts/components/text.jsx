'use strict';

var GnocchiText = React.createClass({

  focus: function(event){
    this.getDOMNode().classList.add('gnocchi-focus');
  },

  blur: function(event){
    this.getDOMNode().classList.remove('gnocchi-focus');
  },

  render: function(){
    return (
      <div className='gnocchi-text'>
        <input className='gnocchi-text-input'
          type='text'
          placeholder={this.props.placeholder || 'Type something'}
          onFocus={this.focus}
          onBlur={this.blur} />
      </div>
    );
  }
});
