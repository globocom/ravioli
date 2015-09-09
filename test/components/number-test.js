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
    before(function(){
      this.component = utils.render(GnocchiNumber);
    });

    after(function(){
      this.component = null;
    });

    context('#setValue()', function(){
      it('should set zero when pass zero', function(){
        this.component.setValue(0);
        expect(this.component.props.value).to.equal(0);
      });

      it('should set number when pass number', function(){
        this.component.setValue(20);
        expect(this.component.props.value).to.equal(20);
      });

      it('should set number when pass string number', function(){
        this.component.setValue('20');
        expect(this.component.props.value).to.equal(20);
      });

      it('should set empty string when pass empty string', function(){
        this.component.setValue('');
        expect(this.component.props.value).to.equal('');
      });

      it('should set empty string when pass not a number string', function(){
        this.component.setValue('some string');
        expect(this.component.props.value).to.equal('');
      });
    });

    context('#increment()', function(){
      it('should increment when value is unset', function(){
        this.component.setValue('');
        this.component.increment();
        expect(this.component.props.value).to.equal(1);
      });

      it('should increment value', function(){
        this.component.setValue(100);
        this.component.increment();
        this.component.increment();
        expect(this.component.props.value).to.equal(102);
      });
    });

    context('#decrement()', function(){
      it('should decrement when value is unset', function(){
        this.component.setValue('');
        this.component.decrement();
        expect(this.component.props.value).to.equal(-1);
      });

      it('should decrement value', function(){
        this.component.setValue(100);
        this.component.decrement();
        this.component.decrement();
        expect(this.component.props.value).to.equal(98);
      });
    });
  });

  describe('Behaviors', function(){

  });
});
