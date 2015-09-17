/* global require, module */
var React = require('react');

module.exports = React.createClass({
  displayName: 'Gnocchi.Textarea',

  propTypes: {
    placeholder: React.PropTypes.string,
    lines: React.PropTypes.number
  },

  getDefaultProps: () => {
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
