/* global require, module */
var React = require('react');

var GnocchiButton = React.createClass({
  getDefaultProps: function(){
    return {
      classes: []
    };
  },

  render: function(){
    var className = 'gnocchi-button';

    this.props.classes.forEach(function(c){
      className += ' gnocchi-button-' + c;
    });

    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = GnocchiButton;
