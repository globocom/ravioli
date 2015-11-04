var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiCounter = require('../../src/lib/components/counter.jsx');


describe('Counter component', () => {
  let component;

  const createCounter = opts => component = utils.render(GnocchiCounter, opts);
  const destroyCounter = () => component = null;

  describe('Initialization', () => {
    before(() => utils.mockDOM());
    afterEach(() => destroyCounter());

    it('should set inital value as 0', () => {
      createCounter();
      expect(utils.getDOMNode(component).textContent).to.equal('0');
    });

    it('should set inital value', () => {
      createCounter({ value: 'dire' });
      expect(utils.getDOMNode(component).textContent).to.equal('4');
    });

    it('should set exceeded status', () => {
      createCounter({ value: 'dire straits', max: 10 });
      expect(utils.getDOMNode(component).className).to.contain('exceeded');
    });

    context('when subtracting', () => {
      it('should set inital value with max when subtract', () => {
        createCounter({ max: 70, subtract: true });
        expect(utils.getDOMNode(component).textContent).to.equal('70');
      });

      it('should set inital value with max when subtract', () => {
        createCounter({ max: 70, subtract: true, value: 'dire' });
        expect(utils.getDOMNode(component).textContent).to.equal('66');
      });
    });
  });

  describe('Unit', () => {
    before(() => createCounter());
    after(() => destroyCounter());

    describe('#count', () => {
      it('should return correct values for normal counting', () => {
        expect(component.count('')).to.equal(0);
        expect(component.count('', 10)).to.equal(0);
        expect(component.count('dire straits')).to.equal(12);
        expect(component.count('dire straits', 10)).to.equal(12);
      });

      it('should throw an exception if pass subtract without max', () => {
        expect(component.count.bind(component, null, true)).to.throw(Error);
      });

      it('should return correct values for subtract counting', () => {
        expect(component.count('', 12, true)).to.equal(12);
        expect(component.count('dire', 12, true)).to.equal(8);
        expect(component.count('dire straits', 12, true)).to.equal(0);
        expect(component.count('dire straits rocks', 12, true)).to.equal(-6);
      });
    });
  });
});
