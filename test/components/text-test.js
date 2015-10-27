/* global require, describe, before, it */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../src/lib/components/text.jsx');

describe('GnocchiText', function(){
  var component;

  before(function(){
    utils.mockDOM();
    this.component = utils.render(GnocchiText, {placeholder: 'pink floyd'});
  });

  it('should set placeholder', function(){
    var placeholder = utils.getDOMNode(this.component).getAttribute('placeholder');
    expect(placeholder).to.equal('pink floyd');
  });
});
