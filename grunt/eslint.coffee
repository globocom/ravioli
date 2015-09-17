module.exports = (grunt) ->
  grunt.config 'eslint',
    source: 'src/lib/**/*.{js,jsx}'
    test: 'test/**/*.js'
