var React = require('react');
var GnocchiIcon = require('./icon');
var propsfilter = require('../helpers/props-filter');


var GnocchiCheck = React.createClass({
  propTypes: {
    checked: React.PropTypes.bool,
    label: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps: () => {
    return { checked: false };
  },

  getInitialState: function(){
    return { checked: this.props.checked };
  },

  preventFocusOnClick: event => event.preventDefault(),

  toggle: function(){
    var newValue = !this.state.checked;
    if(this.props.onChange) this.props.onChange(newValue);
    this.setState({ checked: newValue });
  },

  render: function(){
    var otherAttrs = propsfilter(this.props, GnocchiCheck.propTypes);
    var className = 'gnocchi-check-box';
    if(this.state.checked) className += ' gnocchi--is-checked';

    return (
      <div {...otherAttrs} className='gnocchi-check'>
        <div
          className={className}
          tabIndex='0'
          onClick={this.toggle}
          onMouseDown={this.preventFocusOnClick}>
          {this.state.checked ? <GnocchiIcon type='check'/> : ''}
        </div>
        {this.renderLabel()}
      </div>
    );
  },

  renderLabel: function(){
    if(this.props.label){
      return (
        <span className='gnocchi-check-label' onClick={this.toggle}>
          {this.props.label}
        </span>
      );
    }
  }
});

module.exports = GnocchiCheck;
