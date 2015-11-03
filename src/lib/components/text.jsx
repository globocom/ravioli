import React from 'react';
import propsfilter from '../helpers/propsfilter';


export default class GnocchiText extends React.Component {
  render(){
    const otherAttrs = propsfilter(this.props, GnocchiText.propTypes);

    return (
      <div {...otherAttrs} className='gnocchi-text-wrapper'>
        <input
          className='gnocchi-text'
          type='text'
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

GnocchiText.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

GnocchiText.defaultProps = {
  placeholder: 'Type something'
};
