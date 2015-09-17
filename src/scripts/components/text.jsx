/* global module, require */
var React = require('react');

module.exports = React.createClass({
  displayName: 'Gnocchi.Text',

  propTypes: {
    placeholder: React.PropTypes.string
  },

  getDefaultProps: () => {
    return {
      placeholder: 'Type something'
    };
  },

  render: function(){
    return (
      <input
        className='gnocchi-text'
        type='text'
        value={this.props.value}
        placeholder={this.props.placeholder}
        onKeyPress={this.props.onKeyPress}
        onKeyDown={this.props.onKeyDown}
        onInput={this.props.onInput}
        onChange={this.props.onChange} />
    );
  }
});
