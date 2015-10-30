var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiText = require('../../src/lib/components/text.jsx');


describe('Text component', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiText, {placeholder: 'pink floyd'});
  });

  it('should set placeholder', () => {
    let placeholder = utils.getDOMNode(component).getAttribute('placeholder');
    expect(placeholder).to.equal('pink floyd');
  });

  context('with additional html attributes', () => {
    before(() => component = utils.render(GnocchiText, {
      placeholder: 'pink floyd',
      rel: 'something',
      onClick: event => event.done()
    }));

    it('should set additional html attributes', () => {
      let node = utils.getDOMNode(component);
      expect(node.getAttribute('rel')).to.equal('something');
    });

    it('should set additional prop handlers', done => {
      utils.click(utils.getDOMNode(component), { done: done });
    });
  });
});
