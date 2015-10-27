/* global require, describe, before, it */

var expect = require('chai').expect;
var utils = require('../utils');
var GnocchiTextarea = require('../../src/lib/components/textarea.jsx');

describe('GnocchiTextarea', function(){
  var component;

  before(function(){
    utils.mockDOM();
    this.component = utils.render(GnocchiTextarea, {
      placeholder: 'led zeppelin',
      lines: 10
    });
  });

  it('should set placeholder', function(){
    var placeholder = utils.getDOMNode(this.component).getAttribute('placeholder');
    expect(placeholder).to.equal('led zeppelin');
  });

  it('should set lines quantity', function(){
    var rows = utils.getDOMNode(this.component).getAttribute('rows');
    expect(rows).to.equal('10');
  });
});
