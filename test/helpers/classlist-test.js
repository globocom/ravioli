const expect = require('chai').expect;
const classlist = require('../../src/lib/helpers/classlist');


describe('ClassList mixin', () => {
  it('should list classes', () => {
    expect(classlist('acdc')).to.equal('acdc');
    expect(classlist('acdc', 'angus')).to.equal('acdc acdc-angus');
    expect(classlist('acdc', 'angus,brian')).to.equal('acdc acdc-angus acdc-brian');
  });

  it('should not list empty classes', () => {
    expect(classlist('acdc', '')).to.equal('acdc');
    expect(classlist('acdc', ',,,')).to.equal('acdc');
    expect(classlist('acdc', 'angus,,,')).to.equal('acdc acdc-angus');
    expect(classlist('acdc', ',,brian,')).to.equal('acdc acdc-brian');
    expect(classlist('acdc', ',angus,,brian,')).to.equal('acdc acdc-angus acdc-brian');
  });

  it('should remove white spaces', () => {
    expect(classlist('  acdc  ')).to.equal('acdc');
    expect(classlist('  acdc  ', '  angus  ')).to.equal('acdc acdc-angus');
    expect(classlist('  acdc  ', '  angus  ,  brian  ')).to.equal('acdc acdc-angus acdc-brian');
    expect(classlist('  acdc  ', '  ,  ,  ')).to.equal('acdc');
  });
});
