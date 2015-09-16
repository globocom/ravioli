/* global require, describe, before, it, console */

var expect = require('chai').expect;
var ClassListMixin = require('../../src/scripts/mixins/classlist');

describe('ClassListMixin', () => {

  describe('Compose classes', () => {
    it('should compose only base class', () => {
      var result = ClassListMixin.renderClassNames('rolling-stones');
      expect(result).to.equal('rolling-stones');
    });

    it('should compose other class', () => {
      var result = ClassListMixin.renderClassNames('rolling-stones', 'mick-jagger');
      expect(result).to.equal('rolling-stones rolling-stones-mick-jagger');
    });

    it('should compose other classes when passing separated by comma', () => {
      var result = ClassListMixin.renderClassNames('rolling-stones', 'mick,keith');
      expect(result).to.equal('rolling-stones rolling-stones-mick rolling-stones-keith');
    });

    it('should not compose empty classes', () => {
      var result1 = ClassListMixin.renderClassNames('rolling-stones', '');
      expect(result1).to.equal('rolling-stones');

      var result2 = ClassListMixin.renderClassNames('rolling-stones', ',,,');
      expect(result2).to.equal('rolling-stones');
    });
  });

  describe('Trim classes', () => {
    it('should trim spaces from base class', () => {
      var result = ClassListMixin.renderClassNames('  rolling-stones  ');
      expect(result).to.equal('rolling-stones');
    });

    it('should trim spaces from other class', () => {
      var result = ClassListMixin.renderClassNames('rolling-stones', '  mick-jagger  ');
      expect(result).to.equal('rolling-stones rolling-stones-mick-jagger');
    });

    it('should trim spaces from other classes (more than one)', () => {
      var result = ClassListMixin.renderClassNames('rolling-stones', '  mick  ,  keith  ');
      expect(result).to.equal('rolling-stones rolling-stones-mick rolling-stones-keith');
    });
  });
});
