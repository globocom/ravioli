/* global require, module, console */
var React = require('react');

var GnocchiButton = React.createClass({
  propTypes: {
    classes: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      classes: ''
    };
  },

  render: function(){
    var className = 'gnocchi-button';

    this.props.classes.split(',').forEach(function(classs){
      className += ' gnocchi-button-' + classs.trim();
    });

    return (
      <button className={className}>
        {this.props.label}
        {this.renderIcon()}
      </button>
    );
  },

  renderIcon: function(){
    if(this.props.icon){
      let className = 'gnocchi-icon gnocchi-icon-' + this.props.icon;
      return <i className={className}></i>;
    }
  }
});

module.exports = GnocchiButton;
