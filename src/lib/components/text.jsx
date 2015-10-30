var React = require('react');
var propsfilter = require('../helpers/props-filter');


var GnocchiText = React.createClass({
  displayName: 'Gnocchi.Text',

  propTypes: {
    placeholder: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps: () => {
    return {
      placeholder: 'Type something'
    };
  },

  render: function(){
    const otherAttrs = propsfilter(this.props, GnocchiText.propTypes);

    return (
      <input {...otherAttrs}
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

module.exports = GnocchiText;
