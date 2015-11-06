import { expect } from 'chai';
import utils from '../utils';
import GnocchiIcon from '../../src/lib/components/icon';


describe('Icon component', () => {
  let component;

  const createIcon = opts => component = utils.render(GnocchiIcon, opts);
  const destroyIcon = () => component = null;

  before(() => {
    utils.mockDOM();
    createIcon({
      type: 'bob-dylan',
      rel: 'something',
      onClick: event => event.done()
    });
  });

  after(() => destroyIcon());

  it('should render icon', () => {
    let classes = utils.getDOMNode(component).className;
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

  describe('with className prop', () => {
    before(() => createIcon({
      type: 'dylan',
      className: 'like-a-rolling-stone'
    }));

    after(() => destroyIcon());

    it('should set additional css class', () => {
      let node = utils.getDOMNode(component);
      expect(node.classList.contains('like-a-rolling-stone')).to.be.true;
    });
  });
});
