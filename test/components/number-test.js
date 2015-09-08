var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var render = require('../utils').render;
var GnocchiNumber = require('../../dist/scripts/components/number');
var GnocchiText = require('../../dist/scripts/components/text');

describe('GnocchiNumber', function(){
  var component;
  var textinput;

  before(function(){
    this.component = render(React.createElement(GnocchiNumber, {
      placeholder: 'bob dylan',
      value: 100
    }));

    this.textinput = this.component.props.children.filter(function(el){
      return TestUtils.isElementOfType(el, GnocchiText);
    })[0];
  });

  after(function(){
    this.component = null;
    this.textinput = null;
  });

  it('should set placeholder', function(){
    expect(this.textinput.props.placeholder).to.equal('bob dylan');
  });

  it('should set value', function(){
    expect(this.textinput.props.value).to.equal(100);
  });
});
