/* global require, describe, before, it */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiTextarea = require('../../src/lib/components/textarea.jsx');


describe('GnocchiTextarea', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiTextarea, {
      placeholder: 'led zeppelin',
      lines: 10
    });
  });

  it('should set placeholder', () => {
    let placeholder = utils.getDOMNode(component).getAttribute('placeholder');
    expect(placeholder).to.equal('led zeppelin');
  });

  it('should set lines quantity', () => {
    let rows = utils.getDOMNode(component).getAttribute('rows');
    expect(rows).to.equal('10');
  });
});
