module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.{js,jsx}'
      tasks: 'scripts:dev'
    scripts_tests:
      files: 'test/**/*.js'
      tasks: 'mochaTest'
    styles:
      files: 'src/styles/**/*.styl'
      tasks: 'styles:dev'
