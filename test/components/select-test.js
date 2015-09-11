/* global require, describe, before, after, it, context */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiSelect = require('../../src/scripts/components/select.jsx');

describe('GnocchiSelect', function(){
  var component;

  var createSelect = (opt) => component = utils.render(GnocchiSelect, opt);
  var destroySelect = () => component = null;

  before(() => utils.mockDOM());

  describe('Initialization', function(){
    before(function(){
      createSelect();
    });

    after(function(){
      destroySelect();
    });

    it('should create component', function(){
      expect(this.component).not.to.be.null;
    });

    it('should set placeholder');
    it('should set options');
    it('should set value');
  });

  describe('Unit', function(){
    before(() => createSelect());

    after(() => destroySelect());

    describe('#open()', function(){
      it('should open');
    });

    describe('#close()', function(){
      it('should close');
    });

    describe('#focusOption()', function(){
      it('should focus an option');
      it('should not focus an unexisting option');
    });

    describe('#selectOption()', function(){
      it('should select option');
      it('should not select an unexisting option');
    });

    describe('#focusPrev', function(){
      context('when there is not focused option', function(){
        it('should not focus on anything');
      });

      context('when the first option is focused', function(){
        it('should not set focus to an unexisting previous option');
      });

      context('when there is a focused option', function(){
        it('should set focus to previous option');
      });
    });

    describe('#focusNext', function(){
      context('when there is not focused option', function(){
        it('should set focus to the first option');
      });

      context('when there is a focused option', function(){
        it('should set focus to next option');
      });

      context('when the last option is focused', function(){
        it('should not set focus to an unexisting next option');
      });
    });
  });

  describe.skip('Behaviors', function(){
    before(() => createSelect());

    after(() => destroySelect());
  });
});
