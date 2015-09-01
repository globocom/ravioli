'use strict';

var GnocchiText = React.createClass({

  render: function(){
    return (
      <div className='gnocchi-text'>
        <input type='text'
          placeholder={this.props.placeholder || 'Type something'} />
      </div>
    );
  }
});
