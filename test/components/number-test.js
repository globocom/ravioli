var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var render = require('../utils').render;
var GnocchiNumber = require('../../dist/scripts/components/number');
var GnocchiText = require('../../dist/scripts/components/text');

describe('GnocchiNumber', function(){
  var component;

  context('Initialization', function(){
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

  context('Unit', function(){
    beforeEach(function(){
      this.component = render(React.createElement(GnocchiNumber));
    });

    afterEach(function(){
      this.component = null;
    });

    it('#setValue()', function(){
      // React.addons.TestUtils.Simulate.click(node);
      var s = React.addons.TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'gnocchi-number');
      console.log(s)
      // var val = GnocchiNumber.prototype.val;
      // expect(val()).to.be.empty;
      // expect(val(0)).to.equal(0);
      // expect(val(1)).to.equal(1);
      // expect(val(-1)).to.equal(-1);
    });
  });
});
