var expect = require('chai').expect;
var React = require('react/addons');
var render = require('../utils').render;
var GnocchiTextarea = require('../../dist/scripts/components/textarea');

describe('GnocchiTextarea', function(){
  var component;

  before(function(){
    this.component = render(React.createElement(GnocchiTextarea, {
      placeholder: 'led zeppelin',
      lines: 10
    }));
  });

  it('should set placeholder', function(){
    expect(this.component.props.placeholder).to.equal('led zeppelin');
  });

  it('should set lines quantity', function(){
    expect(this.component.props.rows).to.equal(10);
  });
});
