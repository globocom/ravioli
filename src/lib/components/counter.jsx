import React from 'react';
import classnames from 'classnames';


export default class RavioliCounter extends React.Component {
  count(value, max, subtract = false){
    let string = value.toString();

    if(subtract){
      if(isNaN(parseInt(max, 10)))
        throw new Error('RavioliCounter: `max` must be a number');

      return max - string.length;
    }

    return string.length;
  }

  render(){
    let count = this.count(this.props.value, this.props.max, this.props.subtract);
    let className = classnames('ravioli-counter', {
      'ravioli-counter--is-exceeded': count < 0 || count > this.props.max
    });

    return <div className={className}>{count}</div>;
  }
}

RavioliCounter.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  max: React.PropTypes.number,
  subtract: React.PropTypes.bool
};

RavioliCounter.defaultProps = {
  value: '',
  subtract: false
};
