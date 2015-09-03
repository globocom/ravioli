/* global React */
'use strict';

var GnocchiButton = React.createClass({
  getDefaultProps: function(){
    return {
      label: 'Button',
      type: null
    };
  },

  render: function(){
    var className = 'gnocchi-button';

    if(this.props.type){
      className += ' gnocchi-button-' + this.props.type;
    }

    return (
      <button className={className}>
        {this.props.label}
      </button>
    );
  }
});
