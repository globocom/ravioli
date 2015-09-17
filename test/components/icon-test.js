/* global require, describe, before, it, console */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiIcon = require('../../src/scripts/components/icon.jsx');

describe('GnocchiIcon component', () => {
  var component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiIcon, {type: 'bob-dylan'});
  });

  it('should render icon', () => {
    var classes = component.getDOMNode().getAttribute('class');
    expect(classes).to.equal('gnocchi-icon gnocchi-icon-bob-dylan');
  });
});
