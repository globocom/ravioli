/* global require, module, console */
var React = require('react');
var GnocchiIcon = require('./icon');
var ClassList = require('../mixins/classlist');

module.exports = React.createClass({
  displayName: 'Gnocchi.Button',
  mixins: [ClassList],

  propTypes: {
    link: React.PropTypes.string,
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    classes: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render: function(){
    return this.props.link ? this.renderLink() : this.renderButton();
  },

  renderLink: function(){
    return (
      <a className={this.renderClassNames()} href={this.props.link}>
        {this.renderLabel()}
      </a>
    );
  },

  renderButton: function(){
    return (
      <button className={this.renderClassNames()}>
        {this.renderLabel()}
      </button>
    );
  },

  renderClassNames: function(){
    let classNames = this.classList('gnocchi-button', this.props.classes);
    if(this.props.className) classNames += ` ${this.props.className}`;
    return classNames;
  },

  renderLabel: function(){
    return (
      <span>
        {this.props.label}
        {this.props.icon ? <GnocchiIcon type={this.props.icon}/> : ''}
      </span>
    );
  }
});
