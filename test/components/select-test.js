/* global require, describe, before, after, it, context, console */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiSelect = require('../../src/lib/components/select.jsx');

describe('GnocchiSelect', () => {
  var component;

  var createSelect = (opts) => component = utils.render(GnocchiSelect, opts);
  var destroySelect = () => component = null;

  before(() => utils.mockDOM());

  describe('Initialization', () => {
    before(() => {
      createSelect({
        placeholder: 'black sabbath',
        options: [
          'ozzy',
          {value: 'tommy', label: 'Tommy Iommi'},
          {value: 'Bill Ward', label: 'Billy Ward'},
          'Geezer Butler'
        ]
      });
    });

    after(() => destroySelect());

    it('should create component', () => {
      expect(component).to.exist;
    });

    it('should render placeholder', () => {
      var placeholder = utils.findByClass(component, 'gnocchi-placeholder');
      expect(placeholder.getDOMNode().textContent).to.equal('black sabbath');
    });

    it('should render options', () => {
      var options = utils.findAllByClass(component, 'gnocchi-select-option');

      var option1 = options[0].getDOMNode();
      expect(option1.textContent).to.equal('ozzy');
      expect(option1.getAttribute('data-value')).to.equal('ozzy');

      var option2 = options[1].getDOMNode();
      expect(option2.textContent).to.equal('Tommy Iommi');
      expect(option2.getAttribute('data-value')).to.equal('tommy');

      var option3 = options[2].getDOMNode();
      expect(option3.textContent).to.equal('Billy Ward');
      expect(option3.getAttribute('data-value')).to.equal('Bill Ward');

      var option4 = options[3].getDOMNode();
      expect(option4.textContent).to.equal('Geezer Butler');
      expect(option4.getAttribute('data-value')).to.equal('Geezer Butler');
    });

    describe('should set selected option', () => {
      it('when it is a string', () => {
        var component = utils.render(GnocchiSelect, {
          selected: 'the wizard',
          options: ['the wizard']
        });

        expect(component.state.selectedOption).to.equal(0);
      });

      it('when it is an object', () => {
        var component = utils.render(GnocchiSelect, {
          selected: 'nib',
          options: [{value: 'nib', label: 'N.I.B.'}]
        });

        expect(component.state.selectedOption).to.equal(0);
      });
    });
  });

  describe('Unit', () => {
    before(() => createSelect());

    after(() => destroySelect());


    describe('#open()', () => {
      it('should open');
    });

    describe('#close()', () => {
      it('should close');
    });

    describe('#focusOption()', () => {
      it('should focus an option');
      it('should not focus an unexisting option');
    });

    describe('#selectOption()', () => {
      it('should select option');
      it('should not select an unexisting option');
    });

    describe('#focusPrev', () => {
      context('when there is not focused option', () => {
        it('should not focus on anything');
      });

      context('when the first option is focused', () => {
        it('should not set focus to an unexisting previous option');
      });

      context('when there is a focused option', () => {
        it('should set focus to previous option');
      });
    });

    describe('#focusNext', () => {
      context('when there is not focused option', () => {
        it('should set focus to the first option');
      });

      context('when there is a focused option', () => {
        it('should set focus to next option');
      });

      context('when the last option is focused', () => {
        it('should not set focus to an unexisting next option');
      });
    });
  });

  describe.skip('Behaviors', () => {
    before(() => createSelect());

    after(() => destroySelect());
  });
});
