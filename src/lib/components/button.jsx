import React from 'react';
import GnocchiIcon from './icon';
import classlist from '../helpers/classlist';
import propsfilter from '../helpers/propsfilter';
import { extend } from 'underscore';


export default class GnocchiButton extends React.Component {
  render(){
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
  }

  renderClassNames(){
    let classNames = classlist('gnocchi-button', this.props.classes);
    if(this.props.className) classNames += ` ${this.props.className}`;
    return classNames;
  }
}

GnocchiButton.propTypes = {
  link: React.PropTypes.string,
  icon: React.PropTypes.string,
  classes: React.PropTypes.string,
  className: React.PropTypes.string,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
