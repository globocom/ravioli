/* global require, module, console */
var React = require('react');
var ClassListMixin = require('../mixins/classlist');

var GnocchiButton = React.createClass({
  mixins: [ClassListMixin],

  propTypes: {
    icon: React.PropTypes.string,
    classes: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      classes: ''
    };
  },

  render: function(){
    return (
      <button className={this.renderClassNames('gnocchi-button', this.props.classes)}>
        {this.props.label}
        {this.renderIcon()}
      </button>
    );
  },

  renderIcon: function(){
    if(this.props.icon){
      return <i className={this.renderClassNames('gnocchi-icon', this.props.icon)}></i>;
    }
  }
});

module.exports = GnocchiButton;
