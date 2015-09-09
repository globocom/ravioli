var expect = require('chai').expect;
var render = require('../utils').render;
var GnocchiButton = require('../../dist/scripts/components/button');

describe('GnocchiButton', function(){
  var component;

  before(function(){
    this.component = render(GnocchiButton, {
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
