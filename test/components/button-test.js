/* global require, describe, before, it, context */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiButton = require('../../src/lib/components/button.jsx');


describe('GnocchiButton', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiButton, {
      label: 'the beatles',
      icon: 'arrow-right',
      classes: 'john, paul, george, ringo',
      className: 'something-in-the-way she-moves'
    });
  });

  it('should set label', () => {
    let label = utils.getDOMNode(component).textContent;
    expect(label).to.contains('the beatles');
  });

  it('should add icon', () => {
    let icon = utils.findByClass(component, 'gnocchi-icon-arrow-right');
    expect(icon).to.exist;
  });

  it('should set modifier classes', () => {
    expect(utils.getDOMNode(component).className)
      .to.contains('gnocchi-button-john')
      .and.to.contains('gnocchi-button-paul')
      .and.to.contains('gnocchi-button-george')
      .and.to.contains('gnocchi-button-ringo');
  });

  it('should set custom classes', () => {
    expect(utils.getDOMNode(component).className)
      .to.contains('something-in-the-way')
      .and.to.contains('she-moves');
  });

  it('should be a button element', () => {
    expect(utils.getDOMNode(component))
      .to.have.property('tagName', 'BUTTON');
  });

  context('when link prop is present', () => {
    before(() => {
      component = utils.render(GnocchiButton, {
        link: 'http://ilovecoffee.com/'
      });
    });

    it('should be a link element', () => {
      expect(utils.getDOMNode(component)).to.have.property('tagName', 'A');
    });

    it('should have href url', () => {
      expect(utils.getDOMNode(component))
        .to.have.property('href', 'http://ilovecoffee.com/');
    });
  });
});
