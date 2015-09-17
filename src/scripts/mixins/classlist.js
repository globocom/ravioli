/* global module */

module.exports = {
  classList: (baseClass, otherClasses) => {
    baseClass = baseClass.trim();
    var rendered = baseClass;

    if(otherClasses){
      let classlist = otherClasses.split(',')
        .filter(c => !!c.trim())
        .map(c => `${baseClass}-${c.trim()}`)
        .join(' ');

      if(classlist) rendered += ` ${classlist}`;
    }

    return rendered;
  }
};
