import React from 'react';
import propsfilter from '../helpers/propsfilter';


export default class GnocchiText extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, GnocchiText.propTypes);

    return (
      <input {...otherAttrs}
        className='gnocchi-text'
        type='text'
        value={this.props.value}
        placeholder={this.props.placeholder}
        onKeyPress={this.props.onKeyPress}
        onKeyDown={this.props.onKeyDown}
        onInput={this.props.onInput}
        onChange={this.props.onChange} />
    );
  }
}

GnocchiText.propTypes = {
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

GnocchiText.defaultProps = {
  placeholder: 'Type something'
};
