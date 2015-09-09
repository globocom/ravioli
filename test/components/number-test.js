var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiNumber = require('../../dist/scripts/components/number');

describe('GnocchiNumber', function(){
  var component;
  var textinput;

  describe('Initialization', function(){
    before(function(){
      this.component = utils.render(GnocchiNumber, {
        placeholder: 'bob dylan',
        value: 100
      });

      this.textinput = utils.findByClass(this.component, 'gnocchi-text');
    });

    after(function(){
      this.component = this.textinput = null;
    });

    it('should set placeholder', function(){
      var placeholder = this.textinput.getDOMNode().getAttribute('placeholder');
      expect(placeholder).to.equal('bob dylan');
    });

    it('should set value', function(){
      var value = this.textinput.getDOMNode().value;
      expect(value).to.equal('100');
    });
  });

  describe('Unit', function(){

  });

  describe('Behaviors', function(){

  });
});
