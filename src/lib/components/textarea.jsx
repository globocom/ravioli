import React from 'react';
import propsfilter from '../helpers/propsfilter';


export default class GnocchiTextarea extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, GnocchiTextarea.propTypes);

    return (
      <textarea {...otherAttrs}
        className='gnocchi-textarea'
        rows={this.props.lines}
        placeholder={this.props.placeholder}>
      </textarea>
    );
  }
}

GnocchiTextarea.propTypes = {
  lines: React.PropTypes.number,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

GnocchiTextarea.defaultProps = {
  lines: 4,
  placeholder: 'Type something'
};
