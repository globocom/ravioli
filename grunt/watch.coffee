module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/lib/**/*.{js,jsx}'
      tasks: 'scripts:dev'
    tests:
      files: 'test/**/*.js'
      tasks: 'scripts:test'
    styles:
      files: 'src/styles/**/*.styl'
      tasks: 'styles:dev'
