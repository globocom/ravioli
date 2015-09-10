/* global require, describe, before, it */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiButton = require('../../src/scripts/components/button.jsx');

describe('GnocchiButton', function(){
  var component;

  before(function(){
    utils.mockDOM();
    this.component = utils.render(GnocchiButton, {
      classes: ['john', 'paul']
    }, 'the beatles');
  });

  it('should set label', function(){
    expect(this.component.props.children).to.equal('the beatles');
  });

  it('should set modifier classes', function(){
    var elementClasses = this.component.getDOMNode().getAttribute('class');
    expect(elementClasses).to.contains('gnocchi-button-john');
    expect(elementClasses).to.contains('gnocchi-button-paul');
  });
});
