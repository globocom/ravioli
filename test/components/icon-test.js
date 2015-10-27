/* global require, describe, before, it, console */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiIcon = require('../../src/lib/components/icon.jsx');


describe('GnocchiIcon', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiIcon, {type: 'bob-dylan'});
  });

  it('should render icon', () => {
    let classes = utils.getDOMNode(component).getAttribute('class');
    expect(classes).to.equal('gnocchi-icon gnocchi-icon-bob-dylan');
  });
});
