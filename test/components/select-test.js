/* global require, describe, before, after, it, context, console */
var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiSelect = require('../../src/lib/components/select.jsx');

describe('Select component', () => {
  var component;

  var createSelect = opts => component = utils.render(GnocchiSelect, opts);
  var destroySelect = () => component = null;

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
    before(() => createSelect({ options: ['paranoid', 'ironman'] }));
    after(() => destroySelect());

    describe('#open()', () => {
      it('should open', () => {
        component.open();
        expect(component.state.open).to.be.true;
      });
    });

    describe('#close()', () => {
      before(() => component.open());

      it('should close', () => {
        component.close();
        expect(component.state.open).to.be.false;
      });
    });

    describe('#focusOption()', () => {
      it('should focus an option', () => {
        component.focusOption(0);
        expect(component.state.focusedOption).to.equal(0);
      });

      it('should not focus an unexisting option', () => {
        component.focusOption(2);
        expect(component.state.focusedOption).not.to.equal(2);

        component.focusOption(-2);
        expect(component.state.focusedOption).not.to.equal(-2);
      });
    });

    describe('#unfocusOption()', () => {
      before(() => component.focusOption(0));

      it('should unfocus from current focused option', () => {
        component.unfocusOption();
        expect(component.state.focusedOption).to.be.null;
      });
    });

    describe('#selectOption()', () => {
      it('should select option', () => {
        component.selectOption(0);
        expect(component.state.selectedOption).to.equal(0);
      });

      it('should not select an unexisting option', () => {
        component.selectOption(2);
        expect(component.state.selectedOption).not.to.equal(2);
      });
    });

    describe('#getOptionIndex()', () => {
      it('should return option index', () => {
        expect(component.getOptionIndex('paranoid')).to.equal(0);
        expect(component.getOptionIndex('ironman')).to.equal(1);
      });

      it('should return null when option does not exist', () => {
        expect(component.getOptionIndex('stairway to heaven')).to.be.null;
      });
    });

    describe('#focusPrev()', () => {
      context('when there is not focused option', () => {
        before(() => component.unfocusOption());

        it('should not focus on anything', () => {
          component.focusPrev();
          expect(component.state.focusedOption).to.be.null;
        });
      });

      context('when the first option is focused', () => {
        before(() => component.focusOption(0));

        it('should not set focus to an unexisting previous option', () => {
          component.focusPrev();
          expect(component.state.focusedOption).to.equal(0);
        });
      });

      context('when there is a focused option', () => {
        before(() => component.focusOption(1));

        it('should set focus to previous option', () => {
          component.focusPrev();
          expect(component.state.focusedOption).to.equal(0);
        });
      });
    });

    describe('#focusNext()', () => {
      context('when there is not focused option', () => {
        before(() => component.unfocusOption());

        it('should set focus to the first option', () => {
          component.focusNext();
          expect(component.state.focusedOption).to.equal(0);
        });
      });

      context('when there is a focused option', () => {
        before(() => component.focusOption(0));

        it('should set focus to next option', () => {
          component.focusNext();
          expect(component.state.focusedOption).to.equal(1);
        });
      });

      context('when the last option is focused', () => {
        before(() => component.focusOption(1));

        it('should not set focus to an unexisting next option', () => {
          component.focusNext();
          expect(component.state.focusedOption).to.equal(1);
        });
      });
    });
  });

  describe.skip('User interaction', () => {
    before(() => createSelect());
    after(() => destroySelect());
  });
});
