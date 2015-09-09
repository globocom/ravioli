var expect = require('chai').expect;
var render = require('../utils').render;
var GnocchiTextarea = require('../../dist/scripts/components/textarea');

describe('GnocchiTextarea', function(){
  var component;

  before(function(){
    this.component = render(GnocchiTextarea, {
      placeholder: 'led zeppelin',
      lines: 10
    });
  });

  it('should set placeholder', function(){
    var placeholder = this.component.getDOMNode().getAttribute('placeholder');
    expect(placeholder).to.equal('led zeppelin');
  });

  it('should set lines quantity', function(){
    var rows = this.component.getDOMNode().getAttribute('rows');
    expect(rows).to.equal('10');
  });
});
