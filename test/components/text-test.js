var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../src/lib/components/text.jsx');
var GnocchiCounter = require('../../src/lib/components/counter.jsx');


describe('Text component', () => {
  let component;

  const createText = opts => component = utils.render(GnocchiText, opts);
  const destroyText = () => component = null;

  describe('Initialization', () => {
    before(() => {
      utils.mockDOM();
      createText({placeholder: 'pink floyd', value: 'echoes'});
    });

    after(() => destroyText());

    it('should set value', () => {
      let node = utils.findByTag(component, 'input');
      expect(node.getAttribute('value')).to.equal('echoes');
    });

    it('should set placeholder', () => {
      let node = utils.findByTag(component, 'input');
      expect(node.getAttribute('placeholder')).to.equal('pink floyd');
    });

    context('with counter', () => {
      before(() => createText({ counter: true }));

      it('should set has-counter class', () => {
        let node = utils.getDOMNode(component);
        expect(node.className).to.contain('gnocchi--has-counter');
      });

      it('should include counter', () => {
        expect(utils.findByType(component, GnocchiCounter)).to.exist;
      });
    });

    context('with required', () => {
      before(() => createText({ required: true }));

      it('should set required class', () => {
        let node = utils.getDOMNode(component);
        expect(node.className).to.contain('gnocchi--is-required');
      });

      it('should render required icon', () => {
        let icon = utils.findByClass(component, 'gnocchi-text-required-icon');
        expect(icon).to.exist;
      });

      it('should hide required icon when value is set', () => {
        component.setState({ value: 'something' });
        let icon = utils.findAllByClass(component, 'gnocchi-text-required-icon');
        expect(icon).to.be.empty;
      });
    });

    context('with additional html attributes', () => {
      before(() => createText({
        value: 'echoes',
        placeholder: 'pink floyd',
        rel: 'something',
        onClick: event => event.done()
      }));

      it('should set additional html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('rel')).to.equal('something');
      });

      it('should not set internal props as html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('value')).to.not.exist;
        expect(node.getAttribute('placeholder')).to.not.exist;
      });

      it('should set additional prop handlers', done => {
        utils.click(utils.getDOMNode(component), { done: done });
      });
    });
  });

  describe('onChange', () => {
    let currentValue;

    before(() => createText({ onChange: newValue => currentValue = newValue }));
    after(() => destroyText());

    it('should call onChange handler', () => {
      let input = utils.findByTag(component, 'input');
      input.value = 'pigs';
      utils.change(input);
      expect(currentValue).to.equal('pigs');
    });
  });
});
