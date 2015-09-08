'use strict';

var expect = require('chai').expect;
var React = require('react/addons');
var render = require('../utils.js').render;
var GnocchiText = require('../../dist/scripts/components/text.js');

describe('GnocchiText', function(){

  var component;

  before(function(){
    this.component = render(React.createElement(GnocchiText, {
      placeholder: 'pink floyd'
    }));
  });

  it('should set placeholder', function(){
    expect(this.component.props.placeholder).to.equal('pink floyd');
  });
});
