import React from 'react';
import GnocchiText from './text';
import GnocchiIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class GnocchiNumber extends React.Component {
  constructor(props){
    super(props);
    let { value, display } = this.parse(props.value);
    this.state = { value: this.truncate(value), display: this.truncate(value) };
  }

  handleTyping(event){
    const key = event.which;

    if(this.props.float){
      if(key !== keys.DOT && (key < keys.N0 || key > keys.N9))
        event.preventDefault();
      else if(key === keys.DOT && event.target.value.indexOf('.') !== -1)
        event.preventDefault();
    } else if(key < keys.N0 || key > keys.N9){
      event.preventDefault();
    }
  }

  handleControl(event){
    if(event.which === keys.UP) this.increment();
    else if(event.which === keys.DOWN) this.decrement();
  }

  increment(){
    let value = Number(this.state.value);
    this.setValue(this.props.float ? this.floatsum(value, 1) : value + 1);
  }

  decrement(){
    let value = Number(this.state.value);
    this.setValue(this.props.float ? this.floatsum(value, -1) : value - 1);
  }

  floatsum(number, delta){
    let sum = number + delta;

    if(sum % 1 !== 0){
      let precision = number.toString().split('.')[1].length;
      sum = sum.toFixed(precision);
    }

    return sum;
  }

  setValue(newValue){
    let { value, display } = this.parse(newValue);

    if(this.validate(value, this.props.float)){
      if(this.props.onChange && value !== this.state.value)
        this.props.onChange.call(null, value);

      this.setState({ value: value, display: display });
    }
  }

  validate(value, float = false){
    if(value === '') return true;
    let isValid = !isNaN(value);
    if(!float) isValid = isValid && value.toString().indexOf('.') === -1;
    return isValid && !(value < this.props.min || value > this.props.max);
  }

  parse(value){
    const string = value.toString();
    const number = parseFloat(string);

    let display = string;
    value = number;

    if(string === '.'){
      value = 0;
      display = '0.';
    } else if(isNaN(number))
      value = display = '';

    return { value: value, display: display };
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
          value={this.state.display}
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
