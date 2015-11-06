import { expect } from 'chai';
import utils from '../utils';
import GnocchiButton from '../../src/lib/components/button';


describe('Button component', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(GnocchiButton, {
      label: 'the beatles',
      icon: 'arrow-right',
      classes: 'john, paul, george, ringo',
      className: 'something-in-the-way she-moves'
    });
  });

  it('should set label', () => {
    let label = utils.getDOMNode(component).textContent;
    expect(label).to.contains('the beatles');
  });

  it('should add icon', () => {
    let icon = utils.findByClass(component, 'gnocchi-icon-arrow-right');
    expect(icon).to.exist;
  });

  it('should set modifier classes', () => {
    expect(utils.getDOMNode(component).className)
      .to.contains('gnocchi-button-john')
      .and.to.contains('gnocchi-button-paul')
      .and.to.contains('gnocchi-button-george')
      .and.to.contains('gnocchi-button-ringo');
  });

  it('should set custom classes', () => {
    expect(utils.getDOMNode(component).className)
      .to.contains('something-in-the-way')
      .and.to.contains('she-moves');
  });

  it('should be a button element', () => {
    expect(utils.getDOMNode(component))
      .to.have.property('tagName', 'BUTTON');
  });

  context('with link prop', () => {
    before(() => component = utils.render(GnocchiButton, {
      link: 'http://ilovecoffee.com/'
    }));

    it('should be a link element', () => {
      expect(utils.getDOMNode(component)).to.have.property('tagName', 'A');
    });

    it('should have href url', () => {
      expect(utils.getDOMNode(component))
        .to.have.property('href', 'http://ilovecoffee.com/');
    });
  });

  context('with additional html attributes', () => {
    before(() => component = utils.render(GnocchiButton, {
      label: 'the beatles',
      icon: 'arrow-right',
      rel: 'something',
      onClick: event => event.done()
    }));

    it('should set additional html attributes', () => {
      let node = utils.getDOMNode(component);
      expect(node.getAttribute('rel')).to.equal('something');
    });

    it('should not set internal props as html attributes', () => {
      let node = utils.getDOMNode(component);
      expect(node.getAttribute('label')).to.not.exist;
      expect(node.getAttribute('icon')).to.not.exist;
    });

    it('should set additional prop handlers', done => {
      utils.click(utils.getDOMNode(component), { done: done });
    });
  });
});
