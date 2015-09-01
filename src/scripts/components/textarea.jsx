'use strict';

var GnocchiTextarea = React.createClass({
  render: function(){
    return (
      <div className="gnocchi-textarea">
        <textarea
          rows={this.props.lines || 4}
          placeholder={this.props.placeholder || 'Type something'}>
        </textarea>
      </div>
    );
  }
});
