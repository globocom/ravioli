var React = require('react');
var GnocchiIcon = require('./icon');
var classlist = require('../helpers/classlist');
var propsfilter = require('../helpers/props-filter');
var extend = require('underscore').extend;


var GnocchiButton = React.createClass({
  propTypes: {
    link: React.PropTypes.string,
    icon: React.PropTypes.string,
    classes: React.PropTypes.string,
    className: React.PropTypes.string,
    label: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  render: function(){
    let tag = 'button';
    let props = extend({},
      propsfilter(this.props, GnocchiButton.propTypes),
      { className: this.renderClassNames() }
    );

    if(this.props.link){
      tag = 'a';
      props.href = this.props.link;
    }

    return React.createElement(tag, props,
      this.props.label,
      this.props.icon ? <GnocchiIcon type={this.props.icon}/> : ''
    );
  },

  renderClassNames: function(){
    let classNames = classlist('gnocchi-button', this.props.classes);
    if(this.props.className) classNames += ` ${this.props.className}`;
    return classNames;
  }
});

module.exports = GnocchiButton;
