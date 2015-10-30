var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiIcon = require('../../src/lib/components/icon.jsx');


describe('GnocchiIcon component', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiIcon, {
      type: 'bob-dylan',
      rel: 'something',
      onClick: event => event.done()
    });
  });

  it('should render icon', () => {
    let classes = utils.getDOMNode(component).getAttribute('class');
    expect(classes).to.equal('gnocchi-icon gnocchi-icon-bob-dylan');
  });

  it('should set additional html attributes', () => {
    let node = utils.getDOMNode(component);
    expect(node.getAttribute('rel')).to.equal('something');
  });

  it('should not set internal props as html attributes', () => {
    let node = utils.getDOMNode(component);
    expect(node.getAttribute('type')).to.not.exist;
  });

  it('should set additional prop handlers', done => {
    utils.click(utils.getDOMNode(component), { done: done });
  });
});
