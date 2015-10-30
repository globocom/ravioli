var expect = require('chai').expect;
var propsfilter = require('../../src/lib/helpers/props-filter');


describe('PropsFilter helper', () => {
  it('should return empty object', () => {
    expect(propsfilter({}, {})).to.be.an('object').and.to.be.empty;
    expect(propsfilter({}, {a: 1})).to.be.an('object').and.to.be.empty;
  });

  it('should return props object', () => {
    expect(propsfilter({a: 1}, {})).to.deep.equal({a: 1});
  });

  it('should return filtered props', () => {
    expect(propsfilter({a: 1}, {a: 1})).to.deep.equal({});
  });
});
