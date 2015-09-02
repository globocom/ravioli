/* global React, FocusMixin */
'use strict';

var GnocchiText = React.createClass({
  mixins: [FocusMixin],

  getDefaultProps: function(){
    return {
      placeholder: 'Type something'
    };
  },

  render: function(){
    return (
      <div className='gnocchi-text'>
        <input className='gnocchi-text-input'
          type='text'
          placeholder={this.props.placeholder}
          onFocus={this.focus}
          onBlur={this.blur} />
      </div>
    );
  }
});
