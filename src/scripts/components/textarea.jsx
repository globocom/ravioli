'use strict';

var GnocchiTextarea = React.createClass({

  focus: function(event){
    this.getDOMNode().classList.add('gnocchi-focus');
  },

  blur: function(event){
    this.getDOMNode().classList.remove('gnocchi-focus');
  },

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
