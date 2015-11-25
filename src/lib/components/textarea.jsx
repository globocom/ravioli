import React from 'react';
import propsfilter from '../helpers/propsfilter';


export default class RavioliTextarea extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, RavioliTextarea.propTypes);

    return (
      <textarea {...otherAttrs}
        className='ravioli-textarea'
        rows={this.props.lines}
        placeholder={this.props.placeholder}>
      </textarea>
    );
  }
}

RavioliTextarea.propTypes = {
  lines: React.PropTypes.number,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

RavioliTextarea.defaultProps = {
  lines: 4,
  placeholder: 'Type something'
};
