'use strict';

var GnocchiText = React.createClass({

  mixins: [FocusMixin],

  render: function(){
    return (
      <div className='gnocchi-text'>
        <input className='gnocchi-text-input'
          type='text'
          placeholder={this.props.placeholder || 'Type something'}
          onFocus={this.focus}
          onBlur={this.blur} />
      </div>
    );
  }
});
