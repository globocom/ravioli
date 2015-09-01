'use strict';

var FocusMixin = {
  focus: function(event){
    this.getDOMNode().classList.add('gnocchi-focus');
  },

  blur: function(event){
    this.getDOMNode().classList.remove('gnocchi-focus');
  }
};
