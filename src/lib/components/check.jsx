import React from 'react';
import classnames from 'classnames';
import RavioliIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class RavioliCheck extends React.Component {
  constructor(props){
    super(props);
    this.state = { checked: props.checked };
  }

  preventFocusOnClick(event){
    event.preventDefault();
  }

  handleControl(event){
    if(event.which === keys.SPACE){
      event.preventDefault();
      this.toggle();
    }
  }

  toggle(){
    let newValue = !this.state.checked;
    if(this.props.onChange) this.props.onChange(newValue);
    this.setState({ checked: newValue });
  }

  render(){
    let otherAttrs = propsfilter(this.props, RavioliCheck.propTypes);
    let className = classnames('ravioli-check-box', {
      'ravioli--is-checked': this.state.checked
    });

    return (
      <div {...otherAttrs} className='ravioli-check'>
        <div
          className={className}
          tabIndex='0'
          onClick={this.toggle.bind(this)}
          onKeyDown={this.handleControl.bind(this)}
          onMouseDown={this.preventFocusOnClick}>
          {this.state.checked ? <RavioliIcon type='check'/> : ''}
        </div>
        {this.renderLabel()}
      </div>
    );
  }

  renderLabel(){
    if(this.props.label){
      return (
        <span className='ravioli-check-label' onClick={this.toggle.bind(this)}>
          {this.props.label}
        </span>
      );
    }
  }
}

RavioliCheck.propTypes = {
  checked: React.PropTypes.bool,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

RavioliCheck.defaultProps = {
  checked: false
};
