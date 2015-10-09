/* global require, describe, before, beforeEach, after, it, context, console */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiCheck = require('../../src/lib/components/check.jsx');

describe('Check component', () => {
  var component;

  var createCheck = opts => component = utils.render(GnocchiCheck, opts);
  var destroyCheck = () => component = null;

  describe('Initialization', () => {
    before(() => createCheck({}));
    after(() => destroyCheck());

    it('should create component', () => {
      expect(component).to.exist;
    });

    it('should not render label', () => {
      var label = utils.findAllByClass(component, 'gnocchi-check-label');
      expect(label).to.be.empty;
    });

    it('should left set as unchecked', () => {
      expect(component.state.checked).to.be.false;
    });

    context('with props', () => {
      before(() => createCheck({ checked: true, label: 'Eye of the tiger' }));

      it('should render label', () => {
        var label = utils.findByClass(component, 'gnocchi-check-label');
        expect(label).to.exist;
      });

      it('should set as checked', () => {
        expect(component.state.checked).to.be.true;
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
        var changeCount = 0;
        var checkedValue;

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
          var checked = component.state.checked;
          component.toggle();
          expect(checkedValue).to.not.equal(checked);
        });
      });
    });
  });

  describe.skip('User interaction', () => {
    before(() => createCheck());
    after(() => destroyCheck());
  });
});
