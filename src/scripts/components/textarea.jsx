'use strict';

var GnocchiTextarea = React.createClass({

  mixins: [FocusMixin],

  render: function(){
    return (
      <div className='gnocchi-textarea'>
        <textarea className='gnocchi-textarea-input'
          rows={this.props.lines || 4}
          placeholder={this.props.placeholder || 'Type something'}
          onFocus={this.focus}
          onBlur={this.blur}>
        </textarea>
      </div>
    );
  }
});
