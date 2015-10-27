/* global require, describe, before, it */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../src/lib/components/text.jsx');


describe('GnocchiText', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiText, {placeholder: 'pink floyd'});
  });

  it('should set placeholder', () => {
    let placeholder = utils.getDOMNode(component).getAttribute('placeholder');
    expect(placeholder).to.equal('pink floyd');
  });
});
