var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../dist/scripts/components/text');

describe('GnocchiText', function(){
  var component;

  before(function(){
    utils.mockDOM();
    this.component = utils.render(GnocchiText, {placeholder: 'pink floyd'});
  });

  it('should set placeholder', function(){
    var placeholder = this.component.getDOMNode().getAttribute('placeholder');
    expect(placeholder).to.equal('pink floyd');
  });
});
