var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiNumber = require('../../src/lib/components/number.jsx');


describe('Number component', () => {
  let component;
  let textinput;

  const createNumber = opts => {
    component = utils.render(GnocchiNumber, opts);
    textinput = utils.findByTag(component, 'input');
  };

  const destroyNumber = () => component = textinput = null;

  before(() => utils.mockDOM());

  describe('Initialization', () => {
    before(() => createNumber({
      placeholder: 'bob dylan',
      value: 100
    }));

    after(() => destroyNumber());

    it('should set placeholder', () => {
      expect(textinput.getAttribute('placeholder')).to.equal('bob dylan');
    });

    it('should set value', () => {
      expect(textinput.value).to.equal('100');
    });

    context('with additional html attributes', () => {
      let node;

      before(() => {
        createNumber({
          placeholder: 'bob dylan',
          value: 100,
          rel: 'something',
          onClick: event => event.done()
        });

        node = utils.getDOMNode(component);
      });

      it('should set additional html attributes', () => {
        expect(node.getAttribute('rel')).to.equal('something');
      });

      it('should not set internal props as html attributes', () => {
        expect(node.getAttribute('placeholder')).to.not.exist;
        expect(node.getAttribute('value')).to.not.exist;
      });

      it('should set additional prop handlers', done => {
        utils.click(node, { done: done });
      });
    });

    context('with minimum constraint', () => {
      before(() => createNumber({ min: 0, value: -1 }));

      it('should set value to the minimum', () => {
        expect(textinput.value).to.equal('0');
      });
    });

    context('with maximum constraint', () => {
      before(() => createNumber({ max: 10, value: 11 }));

      it('should set value to the maximum', () => {
        expect(textinput.value).to.equal('10');
      });
    });

    context('with float option', () => {
      before(() => createNumber({ value: 0.5, float: true }));

      it('should set value as a float number', () => {
        expect(component.state.value).to.equal(0.5);
        expect(textinput.value).to.equal('0.5');
      });

      context('and minimum constraint', () => {
        before(() => createNumber({ min: 1.5, value: 0.5, float: true }));

        it('should set value as minimum float number', () => {
          expect(component.state.value).to.equal(1.5);
          expect(textinput.value).to.equal('1.5');
        });
      });

      context('and maximum constraint', () => {
        before(() => createNumber({ max: 2.2, value: 2.5, float: true }));

        it('should set value as maximum float number', () => {
          expect(component.state.value).to.equal(2.2);
          expect(textinput.value).to.equal('2.2');
        });
      });
    });
  });

  describe('Unit', () => {
    before(() => createNumber());
    after(() => destroyNumber());

    describe('#validate()', () => {
      after(() => createNumber());

      it('should validate without min and max', () => {
        createNumber();
        expect(component.validate(-1)).to.be.true;
        expect(component.validate(0)).to.be.true;
        expect(component.validate(5)).to.be.true;
        expect(component.validate(10)).to.be.true;
        expect(component.validate(100)).to.be.true;
      });

      it('should validate with min only', () => {
        createNumber({ min: 0 });
        expect(component.validate(-1)).to.be.false;
        expect(component.validate(0)).to.be.true;
        expect(component.validate(5)).to.be.true;
        expect(component.validate(10)).to.be.true;
        expect(component.validate(100)).to.be.true;
      });

      it('should validate with max only', () => {
        createNumber({ max: 10 });
        expect(component.validate(-1)).to.be.true;
        expect(component.validate(0)).to.be.true;
        expect(component.validate(5)).to.be.true;
        expect(component.validate(10)).to.be.true;
        expect(component.validate(100)).to.be.false;
      });

      it('should validate with min and max', () => {
        createNumber({ min: 0, max: 10 });
        expect(component.validate(-1)).to.be.false;
        expect(component.validate(0)).to.be.true;
        expect(component.validate(5)).to.be.true;
        expect(component.validate(10)).to.be.true;
        expect(component.validate(100)).to.be.false;
      });
    });

    describe('#truncate()', () => {
      after(() => createNumber());

      it('should truncate without min and max', () => {
        createNumber();
        expect(component.truncate(-1)).to.equal(-1);
        expect(component.truncate(5)).to.equal(5);
        expect(component.truncate(100)).to.equal(100);
      });

      it('should truncate with min only', () => {
        createNumber({ min: 0 });
        expect(component.truncate(-1)).to.equal(0);
        expect(component.truncate(5)).to.equal(5);
        expect(component.truncate(100)).to.equal(100);
      });

      it('should truncate with max only', () => {
        createNumber({ max: 10 });
        expect(component.truncate(-1)).to.equal(-1);
        expect(component.truncate(5)).to.equal(5);
        expect(component.truncate(100)).to.equal(10);
      });

      it('should truncate with min and max', () => {
        createNumber({ min: 0, max: 10 });
        expect(component.truncate(-1)).to.equal(0);
        expect(component.truncate(5)).to.equal(5);
        expect(component.truncate(100)).to.equal(10);
      });
    });

    describe('#parse()', () => {
      it('should return empty string', () => {
        expect(component.parse('')).to.deep.equal({value: '', display: ''});
        expect(component.parse('some string')).to.deep.equal({value: '', display: ''});
      });

      it('should return int string', () => {
        expect(component.parse('2')).to.deep.equal({value: 2, display: '2'});
        expect(component.parse('-2')).to.deep.equal({value: -2, display: '-2'});
        expect(component.parse('0')).to.deep.equal({value: 0, display: '0'});
        expect(component.parse(2)).to.deep.equal({value: 2, display: '2'});
        expect(component.parse(-2)).to.deep.equal({value: -2, display: '-2'});
        expect(component.parse(0)).to.deep.equal({value: 0, display: '0'});
      });

      it('should return dotted string', () => {
        expect(component.parse('.')).to.deep.equal({value: 0, display: '0.'});
        expect(component.parse('0.')).to.deep.equal({value: 0, display: '0.'});
        expect(component.parse('123.')).to.deep.equal({value: 123, display: '123.'});
      });

      it('should return float string', () => {
        expect(component.parse('0.5')).to.deep.equal({value: 0.5, display: '0.5'});
        expect(component.parse('1.33333')).to.deep.equal({value: 1.33333, display: '1.33333'});
        expect(component.parse('-0.5')).to.deep.equal({value: -0.5, display: '-0.5'});
        expect(component.parse('-3.333')).to.deep.equal({value: -3.333, display: '-3.333'});
        expect(component.parse(0.5)).to.deep.equal({value: 0.5, display: '0.5'});
        expect(component.parse(1.33333)).to.deep.equal({value: 1.33333, display: '1.33333'});
        expect(component.parse(-0.5)).to.deep.equal({value: -0.5, display: '-0.5'});
        expect(component.parse(-3.333)).to.deep.equal({value: -3.333, display: '-3.333'});
      });
    });

    describe('#increment()', () => {
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

      context('with float option', () => {
        before(() => createNumber({ float: true }));
        after(() => createNumber());

        it('should increment value', () => {
          component.setValue(3.14);
          component.increment();
          expect(component.state.value).to.equal(4.14);
        });
      });
    });

    describe('#decrement()', () => {
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

      context('with float option', () => {
        before(() => createNumber({ float: true }));
        after(() => createNumber());

        it('should decrement value', () => {
          component.setValue(1.33);
          component.decrement();
          expect(component.state.value).to.equal(0.33);
        });
      });
    });
  });

  describe('onChange', () => {
    let currentValue;
    let changeCount = 0;

    before(() => createNumber({
      onChange: value => {
        currentValue = value;
        changeCount++;
      }
    }));

    beforeEach(() => {
      changeCount = 0;
      component.setState({ value: '' });
    });

    it('should call onChange handler', () => {
      component.setValue(123);
      expect(changeCount).to.equal(1);
      expect(currentValue).to.equal(123);

      component.setValue('-123');
      expect(changeCount).to.equal(2);
      expect(currentValue).to.equal(-123);
    });

    it('should not call onChange handler', () => {
      component.setValue('');
      expect(changeCount).to.equal(0);

      component.setValue('some string');
      expect(changeCount).to.equal(0);
    });
  });

  describe('Behaviors', () => {
    before(() => createNumber());
    after(() => destroyNumber());

    it('should increment when click on up button', () => {
      let button = utils.findByClass(component, 'gnocchi-number-up');
      component.setValue('');
      utils.click(button);
      expect(component.state.value).to.equal(1);
      expect(textinput.value).to.equal('1');
    });

    it('should decrement when click on down button', () => {
      let button = utils.findByClass(component, 'gnocchi-number-down');
      component.setValue('');
      utils.click(button);
      expect(component.state.value).to.equal(-1);
      expect(textinput.value).to.equal('-1');
    });

    it('should increment when press up key', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.keydown(textinput, 38);
      expect(component.state.value).to.equal(1);
      expect(textinput.value).to.equal('1');
    });

    it('should decrement when press down key', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      utils.keydown(textinput, 40);
      expect(component.state.value).to.equal(-1);
      expect(textinput.value).to.equal('-1');
    });

    it('should update when input numbers on field', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      textinput.value = 1;
      utils.change(textinput);
      expect(component.state.value).to.equal(1);
      expect(textinput.value).to.equal('1');
    });

    it('should do nothing when input non numbers on field', () => {
      let textinput = utils.findByClass(component, 'gnocchi-text');
      component.setValue('');
      textinput.value = 'not a number';
      utils.change(textinput);
      expect(component.state.value).to.equal('');
      expect(textinput.value).to.equal('');
    });

    context('with min and max constraints', () => {
      before(() => createNumber({ min: -1, max: 10 }));
      after(() => destroyNumber());

      it('should not increment when click on up button', () => {
        let button = utils.findByClass(component, 'gnocchi-number-up');
        component.setValue(10);
        utils.click(button);
        expect(component.state.value).to.equal(10);
        expect(textinput.value).to.equal('10');
      });

      it('should not decrement when click on down button', () => {
        let button = utils.findByClass(component, 'gnocchi-number-down');
        component.setValue(-1);
        utils.click(button);
        expect(component.state.value).to.equal(-1);
        expect(textinput.value).to.equal('-1');
      });

      it('should not increment when press up key', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(10);
        utils.keydown(textinput, 38);
        expect(component.state.value).to.equal(10);
        expect(textinput.value).to.equal('10');
      });

      it('should not decrement when press down key', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(-1);
        utils.keydown(textinput, 40);
        expect(component.state.value).to.equal(-1);
        expect(textinput.value).to.equal('-1');
      });

      it('should not update when input numbers on field lesser than minimum', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(5);
        textinput.value = -2;
        utils.change(textinput);
        expect(component.state.value).to.equal(5);
        expect(textinput.value).to.equal('5');
      });

      it('should not update when input numbers on field greater than maximum', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(5);
        textinput.value = 11;
        utils.change(textinput);
        expect(component.state.value).to.equal(5);
        expect(textinput.value).to.equal('5');
      });
    });

    context('with float option', () => {
      before(() => createNumber({ float: true }));
      after(() => destroyNumber());

      it('should increment when click on up button', () => {
        let button = utils.findByClass(component, 'gnocchi-number-up');
        component.setValue(-0.5);
        utils.click(button);
        expect(component.state.value).to.equal(0.5);
        expect(textinput.value).to.equal('0.5');
      });

      it('should decrement when click on down button', () => {
        let button = utils.findByClass(component, 'gnocchi-number-down');
        component.setValue(0.5);
        utils.click(button);
        expect(component.state.value).to.equal(-0.5);
        expect(textinput.value).to.equal('-0.5');
      });

      it('should increment when press up key', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(-0.5);
        utils.keydown(textinput, 38);
        expect(component.state.value).to.equal(0.5);
        expect(textinput.value).to.equal('0.5');
      });

      it('should decrement when press down key', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(0.5);
        utils.keydown(textinput, 40);
        expect(component.state.value).to.equal(-0.5);
        expect(textinput.value).to.equal('-0.5');
      });

      it('should put zero at the beginning when input just a dot', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue('');
        textinput.value = '.';
        utils.change(textinput);
        expect(component.state.value).to.equal(0);
        expect(textinput.value).to.equal('0.');
      });

      it('should', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue(0);
        textinput.value = '0.';
        utils.change(textinput);
        expect(component.state.value).to.equal(0);
        expect(textinput.value).to.equal('0.');
      });
    });
  });
});
