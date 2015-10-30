import React from 'react';
import classlist from '../helpers/classlist';
import propsfilter from '../helpers/propsfilter';


export default class GnocchiIcon extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, GnocchiIcon.propTypes);
    const className = classlist('gnocchi-icon', this.props.type);

    return <i {...otherAttrs} className={className}></i>;
  }
}

GnocchiIcon.propTypes = {
  type: React.PropTypes.string.isRequired
};
