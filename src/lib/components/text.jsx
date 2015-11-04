import React from 'react';
import classnames from 'classnames';
import GnocchiCounter from './counter';
import propsfilter from '../helpers/propsfilter';


export default class GnocchiText extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: props.value };
  }

  handleChange(event){
    let newValue = event.target.value;
    this.setState({ value: newValue });
    if(this.props.onChange) this.props.onChange.call(null, newValue);
  }

  render(){
    const otherAttrs = propsfilter(this.props, GnocchiText.propTypes);
    let className = classnames('gnocchi-text-wrapper', {
      'gnocchi-text--has-counter': this.props.counter
    });

    return (
      <div {...otherAttrs} className={className}>
        <input
          className='gnocchi-text'
          type='text'
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange.bind(this)}/>
        {this.renderCounter()}
      </div>
    );
  }

  renderCounter(){
    if(this.props.counter)
      return (
        <GnocchiCounter
          value={this.state.value}
          max={this.props.counterMax}
          subtract={this.props.counter === 'subtract'}/>
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
  ]),
  onChange: React.PropTypes.func
};

GnocchiText.defaultProps = {
  placeholder: 'Type something'
};
