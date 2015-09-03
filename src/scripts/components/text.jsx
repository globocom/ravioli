/* global React */
'use strict';

var GnocchiText = React.createClass({
  getDefaultProps: function(){
    return {
      placeholder: 'Type something'
    };
  },

  render: function(){
    return (
      <input
        type='text'
        className='gnocchi-text'
        placeholder={this.props.placeholder} />
    );
  }
});
