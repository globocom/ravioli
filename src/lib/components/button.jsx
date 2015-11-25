import React from 'react';
import RavioliIcon from './icon';
import classlist from '../helpers/classlist';
import propsfilter from '../helpers/propsfilter';
import { extend } from 'underscore';


export default class RavioliButton extends React.Component {
  render(){
    let tag = 'button';
    let props = extend({},
      propsfilter(this.props, RavioliButton.propTypes),
      { className: this.renderClassNames() }
    );

    if(this.props.link){
      tag = 'a';
      props.href = this.props.link;
    } else {
      props.type = 'button';
    }

    return React.createElement(tag, props,
      this.props.label,
      this.props.icon ? <RavioliIcon type={this.props.icon}/> : ''
    );
  }

  renderClassNames(){
    let classNames = classlist('ravioli-button', this.props.classes);
    if(this.props.className) classNames += ` ${this.props.className}`;
    return classNames;
  }
}

RavioliButton.propTypes = {
  link: React.PropTypes.string,
  icon: React.PropTypes.string,
  classes: React.PropTypes.string,
  className: React.PropTypes.string,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
