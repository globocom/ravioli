import React from 'react';
import classnames from 'classnames';
import classlist from '../helpers/classlist';
import propsfilter from '../helpers/propsfilter';


export default class RavioliIcon extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, RavioliIcon.propTypes);
    const className = classnames(
      this.props.className,
      classlist('ravioli-icon', this.props.type)
    );

    return <i {...otherAttrs} className={className}></i>;
  }
}

RavioliIcon.propTypes = {
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};
