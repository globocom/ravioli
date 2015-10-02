/* global require, module, console */
var React = require('react');
var GnocchiIcon = require('./icon');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Button',
  mixins: [ClassList],

  propTypes: {
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    classes: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render: function(){
    let classes = this.classList('gnocchi-button', this.props.classes);

    return (
      <button className={`${classes} ${this.props.className}`}>
        {this.props.label}
        {this.props.icon ? <GnocchiIcon type={this.props.icon}/> : ''}
      </button>
    );
  }
});
