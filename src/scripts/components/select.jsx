/* global React */
'use strict';

var GnocchiSelect = React.createClass({
  render: function(){
    var options = this.props.options.map(function(option){
      return <div>{option.value || option} - {option.label || option}</div>;
    });

    return (
      <div>
        {options}
      </div>
    );
  }
});
