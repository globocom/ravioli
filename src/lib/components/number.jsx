import React from 'react';
import GnocchiText from './text';
import GnocchiIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class GnocchiNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: props.value };
  }

  onkeypress(event){
    if(event.which < keys.N0 || event.which > keys.N9) event.preventDefault();
  }

  onkeydown(event){
    if(event.which === keys.UP) this.increment();
    else if(event.which === keys.DOWN) this.decrement();
  }

  oninput(event){
    this.setValue(event.target.value);
  }

  setValue(value){
    value = parseInt(value, 10);
    this.setState({ value: isNaN(value) ? '' : value });
  }

  increment(){
    this.setValue(this.state.value + 1);
  }

  decrement(){
    this.setValue(this.state.value - 1);
  }

  render(){
    const otherAttrs = propsfilter(this.props, GnocchiNumber.propTypes);

    return (
      <div {...otherAttrs} className='gnocchi-number'>
        <GnocchiText
          value={this.state.value}
          placeholder={this.props.placeholder}
          onKeyPress={this.onkeypress.bind(this)}
          onKeyDown={this.onkeydown.bind(this)}
          onInput={this.oninput.bind(this)}
          onChange={function(){}} />
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
  ])
};

GnocchiNumber.defaultProps = {
  placeholder: '#',
  value: ''
};
