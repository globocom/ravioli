/* global require, module */
var React = require('react');

var GnocchiTextarea = React.createClass({
  getDefaultProps: function(){
    return {
      placeholder: 'Type something',
      lines: 4
    };
  },

  render: function(){
    return (
      <textarea
        className='gnocchi-textarea'
        rows={this.props.lines}
        placeholder={this.props.placeholder}>
      </textarea>
    );
  }
});

module.exports = GnocchiTextarea;
