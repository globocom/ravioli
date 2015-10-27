/* global require, describe, before, after, it, context */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiNumber = require('../../src/lib/components/number.jsx');


describe('GnocchiNumber', () => {
  let component;
  let textinput;

  before(() => {
    utils.mockDOM();
  });

  describe('Initialization', () => {
    before(() => {
      component = utils.render(GnocchiNumber, {
        placeholder: 'bob dylan',
        value: 100
      });

      textinput = utils.findByClass(component, 'gnocchi-text');
    });

    after(() => {
      component = textinput = null;
    });

    it('should set placeholder', () => {
      let placeholder = utils.getDOMNode(textinput).getAttribute('placeholder');
      expect(placeholder).to.equal('bob dylan');
    });

    it('should set value', () => {
      let value = utils.getDOMNode(textinput).value;
      expect(value).to.equal('100');
    });
  });

  describe('Unit', () => {
    before(() => {
      component = utils.render(GnocchiNumber);
    });

    after(() => {
      component = null;
    });

    context('#setValue()', () => {
      it('should set zero when pass zero', () => {
        component.setValue(0);
        expect(component.state.value).to.equal(0);
      });

      it('should set number when pass number', () => {
        component.setValue(20);
        expect(component.state.value).to.equal(20);
      });

      it('should set number when pass string number', () => {
        component.setValue('20');
        expect(component.state.value).to.equal(20);
      });

      it('should set empty string when pass empty string', () => {
        component.setValue('');
        expect(component.state.value).to.equal('');
      });

      it('should set empty string when pass not a number string', () => {
        component.setValue('some string');
        expect(component.state.value).to.equal('');
      });
    });

    context('#increment()', () => {
      it('should increment when value is unset', () => {
        component.setValue('');
        component.increment();
        expect(component.state.value).to.equal(1);
      });

      it('should increment value', () => {
        component.setValue(100);
        component.increment();
        component.increment();
        expect(component.state.value).to.equal(102);
      });
    });

    context('#decrement()', () => {
      it('should decrement when value is unset', () => {
        component.setValue('');
        component.decrement();
        expect(component.state.value).to.equal(-1);
      });

      it('should decrement value', () => {
        component.setValue(100);
        component.decrement();
        component.decrement();
        expect(component.state.value).to.equal(98);
      });
    });
  });

  describe('Behaviors', () => {
    before(() => {
      component = utils.render(GnocchiNumber);
    });

    after(() => {
      component = null;
    });

    it('should increment when click on up button', () => {
      let button = utils.findByClass(component, 'gnocchi-number-up');
      component.setValue('');
      utils.click(button);
      expect(component.state.value).to.equal(1);
    });

    it('should decrement when click on down button', () => {
      let button = utils.findByClass(component, 'gnocchi-number-down');
      component.setValue('');
      utils.click(button);
      expect(component.state.value).to.equal(-1);
    });

    it('should increment when press up key', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.keydown(textinput, 38);
      expect(component.state.value).to.equal(1);
    });

    it('should decrement when press down key', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.keydown(textinput, 40);
      expect(component.state.value).to.equal(-1);
    });

    it('should update when input numbers on field', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.input(textinput, 1);
      expect(component.state.value).to.equal(1);
    });

    it('should do nothing when input non numbers on field', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.input(textinput, 'not a number');
      expect(component.state.value).to.equal('');
    });
  });
});
