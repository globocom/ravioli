import { expect } from 'chai';
import utils from '../utils';
import RavioliTextarea from '../../src/lib/components/textarea';


describe('RavioliTextarea', () => {
  let component;

  before(() => {
    utils.mockDOM();
    component = utils.render(RavioliTextarea, {
      placeholder: 'led zeppelin',
      lines: 10
    });
  });

  it('should set placeholder', () => {
    let placeholder = utils.getDOMNode(component).getAttribute('placeholder');
    expect(placeholder).to.equal('led zeppelin');
  });

  it('should set lines quantity', () => {
    let rows = utils.getDOMNode(component).getAttribute('rows');
    expect(rows).to.equal('10');
  });

  context('with additional html attributes', () => {
    before(() => component = utils.render(RavioliTextarea, {
      placeholder: 'led zeppelin',
      lines: 10,
      rel: 'something',
      onClick: event => event.done()
    }));

    it('should set additional html attributes', () => {
      let node = utils.getDOMNode(component);
      expect(node.getAttribute('rel')).to.equal('something');
    });

    it('should not set internal props as html attributes', () => {
      let node = utils.getDOMNode(component);
      expect(node.getAttribute('lines')).to.not.exist;
    });

    it('should set additional prop handlers', done => {
      utils.click(utils.getDOMNode(component), { done: done });
    });
  });
});
