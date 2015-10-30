var React = require('react');
var propsfilter = require('../helpers/propsfilter');


var GnocchiTextarea = React.createClass({
  displayName: 'Gnocchi.Textarea',

  propTypes: {
    lines: React.PropTypes.number,
    placeholder: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps: () => {
    return {
      placeholder: 'Type something',
      lines: 4
    };
  },

  render: function(){
    const otherAttrs = propsfilter(this.props, GnocchiTextarea.propTypes);

    return (
      <textarea {...otherAttrs}
        className='gnocchi-textarea'
        rows={this.props.lines}
        placeholder={this.props.placeholder}>
      </textarea>
    );
  }
});

module.exports = GnocchiTextarea;
