module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.{js,jsx}'
      tasks: 'scripts:dev'
    styles:
      files: 'src/styles/**/*.styl'
      tasks: 'styles:dev'
