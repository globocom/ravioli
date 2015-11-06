const expect = require('chai').expect;
const utils = require('../utils');
const GnocchiCheck = require('../../src/lib/components/check.jsx');
const keys = require('../../src/lib/helpers/keycodes');


describe('Check component', () => {
  let component;

  const createCheck = opts => component = utils.render(GnocchiCheck, opts);
  const destroyCheck = () => component = null;

  describe('Initialization', () => {
    before(() => createCheck({}));
    after(() => destroyCheck());

    it('should create component', () => {
      expect(component).to.exist;
    });

    it('should not render label', () => {
      let label = utils.findAllByClass(component, 'gnocchi-check-label');
      expect(label).to.be.empty;
    });

    it('should left set as unchecked', () => {
      expect(component.state.checked).to.be.false;
    });

    context('with props', () => {
      before(() => createCheck({
        checked: true,
        label: 'Eye of the tiger',
        rel: 'something',
        onClick: event => event.done()
      }));

      it('should render label', () => {
        let label = utils.findByClass(component, 'gnocchi-check-label');
        expect(label).to.exist;
        expect(label.textContent).to.equal('Eye of the tiger');
      });

      it('should set as checked', () => {
        expect(component.state.checked).to.be.true;
      });

      it('should set additional html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('rel')).to.equal('something');
      });

      it('should not set internal props as html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('label')).to.not.exist;
        expect(node.getAttribute('checked')).to.not.exist;
      });

      it('should set additional prop handlers', done => {
        utils.click(utils.getDOMNode(component), { done: done });
      });
    });
  });

  describe('Unit', () => {
    before(() => createCheck({}));
    after(() => destroyCheck());

    describe('#toggle()', () => {
      it('should toggle check', () => {
        component.toggle();
        expect(component.state.checked).to.be.true;
        component.toggle();
        expect(component.state.checked).to.be.false;
      });

      context('when `onChange` handler exists', () => {
        let changeCount = 0;
        let checkedValue;

        before(() => createCheck({
          onChange: (value) => {
            changeCount++;
            checkedValue = value;
          }
        }));

        it('should fire handler', () => {
          component.toggle();
          expect(changeCount).to.equal(1);
        });

        it('should pass new value to handler', () => {
          let checked = component.state.checked;
          component.toggle();
          expect(checkedValue).to.not.equal(checked);
        });
      });
    });
  });

  describe('User interaction', () => {
    let checkboxNode;

    before(() => createCheck());
    after(() => destroyCheck());

    describe('Keyboard control', () => {
      before(() => {
        checkboxNode = utils.findByClass(component, 'gnocchi-check-box');
      });

      it('should check when pressing spacebar', () => {
        component.setState({ checked: false });
        utils.keyDown(checkboxNode, { which: keys.SPACE });
        expect(component.state.checked).to.be.true;
        expect(checkboxNode.className).to.contains('gnocchi--is-checked');
      });

      it('should uncheck when pressing spacebar', () => {
        component.setState({ checked: true });
        utils.keyDown(checkboxNode, { which: keys.SPACE });
        expect(component.state.checked).to.be.false;
        expect(checkboxNode.className).to.not.contains('gnocchi--is-checked');
      });
    });
  });
});
