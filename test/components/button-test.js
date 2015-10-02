/* global require, describe, before, it, console */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiButton = require('../../src/lib/components/button.jsx');

describe('GnocchiButton', function(){
  var component;

  before(function(){
    utils.mockDOM();
    this.component = utils.render(GnocchiButton, {
      label: 'the beatles',
      icon: 'arrow-right',
      classes: 'john, paul, george, ringo',
      className: 'something-in-the-way she-moves'
    });
  });

  it('should set label', function(){
    var label = this.component.getDOMNode().textContent;
    expect(label).to.contains('the beatles');
  });

  it('should add icon', function(){
    var icon = utils.findByClass(this.component, 'gnocchi-icon-arrow-right');
    expect(icon).to.exist;
  });

  it('should set modifier classes', function(){
    var classes = this.component.getDOMNode().getAttribute('class');
    expect(classes).to.contains('gnocchi-button-john');
    expect(classes).to.contains('gnocchi-button-paul');
    expect(classes).to.contains('gnocchi-button-george');
    expect(classes).to.contains('gnocchi-button-ringo');
  });

  it('should set custom classes', function(){
    var classes = this.component.getDOMNode().getAttribute('class');
    expect(classes).to.contains('something-in-the-way');
    expect(classes).to.contains('she-moves');
  });
});
