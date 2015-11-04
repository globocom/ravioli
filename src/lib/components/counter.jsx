import React from 'react';
import classnames from 'classnames';


export default class GnocchiCounter extends React.Component {
  count(string, max, subtract = false){
    if(subtract){
      if(isNaN(parseInt(max, 10)))
        throw new Error('GnocchiCounter: `max` must be a number');

      return max - string.length;
    }

    return string.length;
  }

  render(){
    let count = this.count(this.props.value, this.props.max, this.props.subtract);
    let className = classnames('gnocchi-counter', {
      'gnocchi-counter--is-exceeded': count < 0 || count > this.props.max
    });

    return <div className={className}>{count}</div>;
  }
}

GnocchiCounter.propTypes = {
  value: React.PropTypes.string,
  max: React.PropTypes.number,
  subtract: React.PropTypes.bool
};

GnocchiCounter.defaultProps = {
  value: '',
  subtract: false
};
