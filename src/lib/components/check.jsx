import React from 'react';
import classnames from 'classnames';
import GnocchiIcon from './icon';
import propsfilter from '../helpers/propsfilter';
import keys from '../helpers/keycodes';


export default class GnocchiCheck extends React.Component {
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
    let otherAttrs = propsfilter(this.props, GnocchiCheck.propTypes);
    let className = classnames('gnocchi-check-box', {
      'gnocchi--is-checked': this.state.checked
    });

    return (
      <div {...otherAttrs} className='gnocchi-check'>
        <div
          className={className}
          tabIndex='0'
          onClick={this.toggle.bind(this)}
          onKeyDown={this.handleControl.bind(this)}
          onMouseDown={this.preventFocusOnClick}>
          {this.state.checked ? <GnocchiIcon type='check'/> : ''}
        </div>
        {this.renderLabel()}
      </div>
    );
  }

  renderLabel(){
    if(this.props.label){
      return (
        <span className='gnocchi-check-label' onClick={this.toggle.bind(this)}>
          {this.props.label}
        </span>
      );
    }
  }
}

GnocchiCheck.propTypes = {
  checked: React.PropTypes.bool,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

GnocchiCheck.defaultProps = {
  checked: false
};
