var expect = require('chai').expect;
var React = require('react/addons');
var render = require('../utils').render;
var GnocchiButton = require('../../dist/scripts/components/button');

describe('GnocchiButton', function(){
  var component;

  before(function(){
    this.component = render(React.createElement(GnocchiButton, {
      classes: ['john', 'paul']
    }, 'the beatles'));
  });

  it('should set label', function(){
    expect(this.component.props.children).to.equal('the beatles');
  });

  it('should set modifier classes', function(){
    expect(this.component.props.className).to.contains('gnocchi-button-john');
    expect(this.component.props.className).to.contains('gnocchi-button-paul');
  });
});
