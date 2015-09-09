var expect = require('chai').expect;
var render = require('../utils').render;
var GnocchiText = require('../../dist/scripts/components/text');

describe('GnocchiText', function(){
  var component;

  before(function(){
    this.component = render(GnocchiText, {placeholder: 'pink floyd'});
  });

  it('should set placeholder', function(){
    var placeholder = this.component.getDOMNode().getAttribute('placeholder');
    expect(placeholder).to.equal('pink floyd');
  });
});
