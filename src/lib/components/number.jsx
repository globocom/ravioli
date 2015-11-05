import React from 'react';
import GnocchiText from './text';
import GnocchiIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class GnocchiNumber extends React.Component {
  constructor(props){
    super(props);
    let value = this.truncate(this.convert(props.value));
    this.state = { value: value, displayValue: value };
  }

  handleTyping(event){
    const key = event.which;
    const float = this.props.float;

    if((key < keys.N0 || key > keys.N9) && (float && key !== keys.DOT)){
      console.log('prevent', key, event.keyCode);
      event.preventDefault();
    }
  }

  handleControl(event){
    if(event.which === keys.UP) this.increment();
    else if(event.which === keys.DOWN) this.decrement();
  }

  increment(){
    this.setValue(this.state.value + 1);
  }

  decrement(){
    this.setValue(this.state.value - 1);
  }

  setValue(newValue){
    let value = this.convert(newValue);

    if(this.validate(value)){
      if(this.props.onChange && value !== this.state.value)
        this.props.onChange.call(null, value);

      this.setState({ value: value, displayValue: this.display(newValue) });
    }
  }

  convert(value){
    value = parseFloat(value);
    if(this.props.float) value = value.toFixed(Number(this.props.float));
    return isNaN(value) ? '' : value;
  }

  validate(value){
    return !(value < this.props.min || value > this.props.max);
  }

  display(value){
    return this.convert(value) === '' ? '' : value;
  }

  truncate(value){
    if(value < this.props.min) return this.props.min;
    if(value > this.props.max) return this.props.max;
    return value;
  }

  render(){
    const otherAttrs = propsfilter(this.props, GnocchiNumber.propTypes);

    return (
      <div {...otherAttrs} className='gnocchi-number'>
        <GnocchiText
          value={this.state.displayValue}
          placeholder={this.props.placeholder}
          onKeyPress={this.handleTyping.bind(this)}
          onKeyDown={this.handleControl.bind(this)}
          onChange={this.setValue.bind(this)}/>
        <div className='gnocchi-number-buttons'>
          <div className='gnocchi-number-up' onClick={this.increment.bind(this)}>
            <GnocchiIcon type='arrow-up'/>
          </div>
          <div className='gnocchi-number-down' onClick={this.decrement.bind(this)}>
            <GnocchiIcon type='arrow-down'/>
          </div>
        </div>
      </div>
    );
  }
}

GnocchiNumber.propTypes = {
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  onChange: React.PropTypes.func,
  float: React.PropTypes.bool,
  min: React.PropTypes.number,
  max: React.PropTypes.number
};

GnocchiNumber.defaultProps = {
  placeholder: '#',
  value: '',
  float: false
};
