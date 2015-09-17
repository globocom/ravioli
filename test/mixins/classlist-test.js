/* global require, describe, before, it, console */
var expect = require('chai').expect;
var ClassList = require('../../src/scripts/mixins/classlist');

describe('ClassList mixin', () => {

  describe('#classList', () => {
    var list = ClassList.classList;

    it('should list classes', () => {
      expect(list('acdc')).to.equal('acdc');
      expect(list('acdc', 'angus')).to.equal('acdc acdc-angus');
      expect(list('acdc', 'angus,brian')).to.equal('acdc acdc-angus acdc-brian');
    });

    it('should not list empty classes', () => {
      expect(list('acdc', '')).to.equal('acdc');
      expect(list('acdc', ',,,')).to.equal('acdc');
      expect(list('acdc', 'angus,,,')).to.equal('acdc acdc-angus');
      expect(list('acdc', ',,brian,')).to.equal('acdc acdc-brian');
      expect(list('acdc', ',angus,,brian,')).to.equal('acdc acdc-angus acdc-brian');
    });

    it('should remove white spaces', () => {
      expect(list('  acdc  ')).to.equal('acdc');
      expect(list('  acdc  ', '  angus  ')).to.equal('acdc acdc-angus');
      expect(list('  acdc  ', '  angus  ,  brian  ')).to.equal('acdc acdc-angus acdc-brian');
      expect(list('  acdc  ', '  ,  ,  ')).to.equal('acdc');
    });
  });
});
