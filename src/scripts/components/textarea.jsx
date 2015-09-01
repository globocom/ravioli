'use strict';

var GnocchiTextarea = React.createClass({
  mixins: [FocusMixin],

  getDefaultProps: function(){
    return {
      placeholder: 'Type something',
      lines: 4
    };
  },

  render: function(){
    return (
      <div className='gnocchi-textarea'>
        <textarea className='gnocchi-textarea-input'
          rows={this.props.lines}
          placeholder={this.props.placeholder}
          onFocus={this.focus}
          onBlur={this.blur}>
        </textarea>
      </div>
    );
  }
});
