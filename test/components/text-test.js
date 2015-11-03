var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../src/lib/components/text.jsx');


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
