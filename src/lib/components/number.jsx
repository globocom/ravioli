import React from 'react';
import GnocchiText from './text';
import GnocchiIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class GnocchiNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: this.convertValue(props.value) };
  }

  handleTyping(event){
    if(event.which < keys.N0 || event.which > keys.N9) event.preventDefault();
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
    newValue = this.convertValue(newValue);

    if(this.props.onChange && newValue !== this.state.value)
      this.props.onChange.call(null, newValue);

    this.setState({ value: newValue });
  }

  convertValue(value){
    value = parseInt(value, 10);
    if(isNaN(value)) return '';

    if(value < this.props.min) return this.props.min;
    if(value > this.props.max) return this.props.max;

    return value;
  }

  render(){
    const otherAttrs = propsfilter(this.props, GnocchiNumber.propTypes);

    return (
      <div {...otherAttrs} className='gnocchi-number'>
        <GnocchiText
          value={this.state.value}
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
  min: React.PropTypes.number,
  max: React.PropTypes.number,
};

GnocchiNumber.defaultProps = {
  placeholder: '#',
  value: ''
};
