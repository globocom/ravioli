import { expect } from 'chai';
import utils from '../utils';
import RavioliSelect from '../../src/lib/components/select';


describe('Select component', () => {
  let component;

  const createSelect = opts => component = utils.render(RavioliSelect, opts);
  const destroySelect = () => component = null;

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
      let placeholder = utils.findByClass(component, 'ravioli-placeholder');
      expect(utils.getDOMNode(placeholder).textContent).to.equal('black sabbath');
    });

    it('should render options', () => {
      let options = utils.findAllByClass(component, 'ravioli-select-option');

      let option1 = utils.getDOMNode(options[0]);
      expect(option1.textContent).to.equal('ozzy');
      expect(option1.getAttribute('data-value')).to.equal('ozzy');

      let option2 = utils.getDOMNode(options[1]);
      expect(option2.textContent).to.equal('Tommy Iommi');
      expect(option2.getAttribute('data-value')).to.equal('tommy');

      let option3 = utils.getDOMNode(options[2]);
      expect(option3.textContent).to.equal('Billy Ward');
      expect(option3.getAttribute('data-value')).to.equal('Bill Ward');

      let option4 = utils.getDOMNode(options[3]);
      expect(option4.textContent).to.equal('Geezer Butler');
      expect(option4.getAttribute('data-value')).to.equal('Geezer Butler');
    });

    describe('should set selected option', () => {
      it('when it is a string', () => {
        let component = utils.render(RavioliSelect, {
          selected: 'the wizard',
          options: ['the wizard']
        });

        expect(component.state.selectedOption).to.equal(0);
      });

      it('when it is an object', () => {
        let component = utils.render(RavioliSelect, {
          selected: 'nib',
          options: [{value: 'nib', label: 'N.I.B.'}]
        });

        expect(component.state.selectedOption).to.equal(0);
      });
    });

    describe('when empty option is present', () => {
      before(() => createSelect({empty: true, options: ['ozzy', 'tommy']}));

      it('should be included among the other options', () => {
        let options = utils.findAllByClass(component, 'ravioli-select-option');
        expect(options).to.have.length(3);
      });

      it('should be placed at the first position', () => {
        let options = utils.findAllByClass(component, 'ravioli-select-option');
        let emptyOption = utils.findByClass(component, 'ravioli-select-option-empty');
        expect(options[0]).to.equal(emptyOption);
      });

      it('should has an empty label', () => {
        let emptyOption = utils.findByClass(component, 'ravioli-select-option-empty');
        expect(utils.getDOMNode(emptyOption).textContent).to.be.empty;
      });

      context('and it is a string', () => {
        before(() => createSelect({empty: 'none', options: ['ozzy', 'tommy']}));

        it('should set label with the string', () => {
          let emptyOption = utils.findByClass(component, 'ravioli-select-option-empty');
          expect(utils.getDOMNode(emptyOption).textContent).to.equal('none');
        });
      });
    });

    context('with additional html attributes', () => {
      before(() => createSelect({
        empty: true,
        options: ['ozzy', 'tommy'],
        selected: 'ozzy',
        rel: 'something',
        onClick: event => event.done()
      }));

      it('should set additional html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('rel')).to.equal('something');
      });

      it('should not set internal props as html attributes', () => {
        let node = utils.getDOMNode(component);
        expect(node.getAttribute('empty')).to.not.exist;
        expect(node.getAttribute('options')).to.not.exist;
        expect(node.getAttribute('selected')).to.not.exist;
      });

      it('should set additional prop handlers', done => {
        utils.click(utils.getDOMNode(component), { done: done });
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

      it('should deselect option', () => {
        component.selectOption(null);
        expect(component.state.selectedOption).to.equal(null);
      });

      it('should not select an unexisting option', () => {
        component.selectOption(2);
        expect(component.state.selectedOption).not.to.equal(2);
      });
    });

    describe('#triggerChange()', () => {
      let selectedValue;
      let changeCount = 0;

      it('should not try to fire handler if it does not exist', () => {
        component.triggerChange(0, 1);
        expect(changeCount).to.equal(0);
      });

      context('when `onChange` handler exists in props', () => {
        before(() => {
          createSelect({
            options: ['paranoid', 'ironman'],
            onChange: function(val){
              changeCount++;
              selectedValue = val;
            }
          });
        });

        beforeEach(() => changeCount = 0);

        it('should fire handler when selection does change', () => {
          component.triggerChange(null, 0);
          expect(changeCount).to.equal(1);
        });

        it('should not fire handler when selection does not change', () => {
          component.triggerChange(0, 0);
          expect(changeCount).to.equal(0);
        });

        it('should pass new selected value to the handler', () => {
          component.triggerChange(0, 1);
          expect(selectedValue).to.equal('ironman');
          component.triggerChange(1, 0);
          expect(selectedValue).to.equal('paranoid');
        });
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

    describe('#getOptionValue', () => {
      it('should return value when option is an object', () => {
        let option = {value: 'my value', label: 'my label'};
        expect(component.getOptionValue(option)).to.equal('my value');
      });

      it('should return value when option is a string', () => {
        expect(component.getOptionValue('my value')).to.equal('my value');
      });
    });

    describe('#getOptionLabel', () => {
      it('should return label when option is an object', () => {
        let option = {value: 'my value', label: 'my label'};
        expect(component.getOptionLabel(option)).to.equal('my label');
      });

      it('should return label when option is a string', () => {
        expect(component.getOptionLabel('my label')).to.equal('my label');
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
