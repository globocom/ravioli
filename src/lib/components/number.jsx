import React from 'react';
import RavioliText from './text';
import RavioliIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class RavioliNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = this.initState(props.value);
  }

  initState(value){
    value = this.parse(value).value;
    return { value: this.truncate(value), display: this.truncate(value) };
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

  componentWillReceiveProps(props){
    this.setState(this.initState(props.value));
  }

  render(){
    const otherAttrs = propsfilter(this.props, RavioliNumber.propTypes);

    return (
      <div {...otherAttrs} className='ravioli-number'>
        <RavioliText
          value={this.state.display}
          placeholder={this.props.placeholder}
          onKeyPress={this.handleTyping.bind(this)}
          onKeyDown={this.handleControl.bind(this)}
          onChange={this.setValue.bind(this)}/>
        <div className='ravioli-number-buttons'>
          <div className='ravioli-number-up' onClick={this.increment.bind(this)}>
            <RavioliIcon type='arrow-up'/>
          </div>
          <div className='ravioli-number-down' onClick={this.decrement.bind(this)}>
            <RavioliIcon type='arrow-down'/>
          </div>
        </div>
      </div>
    );
  }
}

RavioliNumber.propTypes = {
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

RavioliNumber.defaultProps = {
  placeholder: '#',
  value: '',
  float: false
};
