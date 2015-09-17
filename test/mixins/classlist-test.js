/* global require, describe, before, it, console */
var expect = require('chai').expect;
var ClassListMixin = require('../../src/scripts/mixins/classlist');

describe('ClassListMixin', () => {

  describe('#renderClassNames', () => {
    var render = ClassListMixin.renderClassNames;

    it('should render classes', () => {
      expect(render('acdc')).to.equal('acdc');
      expect(render('acdc', 'angus')).to.equal('acdc acdc-angus');
      expect(render('acdc', 'angus,brian')).to.equal('acdc acdc-angus acdc-brian');
    });

    it('should not render empty classes', () => {
      expect(render('acdc', '')).to.equal('acdc');
      expect(render('acdc', ',,,')).to.equal('acdc');
      expect(render('acdc', 'angus,,,')).to.equal('acdc acdc-angus');
      expect(render('acdc', ',,brian,')).to.equal('acdc acdc-brian');
      expect(render('acdc', ',angus,,brian,')).to.equal('acdc acdc-angus acdc-brian');
    });

    it('should remove white spaces', () => {
      expect(render('  acdc  ')).to.equal('acdc');
      expect(render('  acdc  ', '  angus  ')).to.equal('acdc acdc-angus');
      expect(render('  acdc  ', '  angus  ,  brian  ')).to.equal('acdc acdc-angus acdc-brian');
      expect(render('  acdc  ', '  ,  ,  ')).to.equal('acdc');
    });
  });
});
