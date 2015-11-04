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
  });

  describe('Unit', () => {
    before(() => createNumber());
    after(() => destroyNumber());

    describe('#convertValue()', () => {
      it('should return number when pass number', () => {
        expect(component.convertValue(0)).to.equal(0);
        expect(component.convertValue(10)).to.equal(10);
        expect(component.convertValue(-1)).to.equal(-1);
      });

      it('should return number when pass string number', () => {
        expect(component.convertValue('0')).to.equal(0);
        expect(component.convertValue('10')).to.equal(10);
        expect(component.convertValue('-1')).to.equal(-1);
      });

      it('should return empty string when pass a non number value', () => {
        expect(component.convertValue('')).to.equal('');
        expect(component.convertValue('some string')).to.equal('');
        expect(component.convertValue(null)).to.equal('');
        expect(component.convertValue(undefined)).to.equal('');
      });

      context('with min and max constraints', () => {
        before(() => createNumber({ min: 0, max: 10 }));
        after(() => createNumber());

        it('should not return a lesser value than minimum', () => {
          expect(component.convertValue(-1)).to.equal(0);
        });

        it('should not return a greater value than maximum', () => {
          expect(component.convertValue(11)).to.equal(10);
        });
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
        component.setValue('');
        textinput.value = -2;
        utils.change(textinput);
        expect(component.state.value).to.equal(-1);
        expect(textinput.value).to.equal('-1');
      });

      it('should not update when input numbers on field greater than maximum', () => {
        let textinput = utils.findByClass(component, 'gnocchi-text');
        component.setValue('');
        textinput.value = 11;
        utils.change(textinput);
        expect(component.state.value).to.equal(10);
        expect(textinput.value).to.equal('10');
      });
    });
  });
});
