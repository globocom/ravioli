module.exports = (grunt) ->
  grunt.config 'webfont',
    icons:
      src: 'src/icons/*.svg'
      dest: 'dist'
      destCss: 'src/styles'
      options:
        types: 'woff'
        hashes: false
        descent: 0
        embed: true
        htmlDemo: false
        templateOptions:
          baseClass: 'ravioli-icon'
          classPrefix: 'ravioli-icon-'
