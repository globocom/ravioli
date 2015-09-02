module.exports = (grunt) ->
  grunt.config 'webfont',
    icons:
      src: 'src/icons/*.svg'
      dest: 'dist'
      destCss: 'src/styles'
      options:
        types: 'woff'
        hashes: false
        htmlDemo: false
        embed: true
        templateOptions:
          baseClass: 'gnocchi-icon'
          classPrefix: 'gnocchi-icon-'
