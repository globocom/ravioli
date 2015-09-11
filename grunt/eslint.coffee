module.exports = (grunt) ->
  grunt.config 'eslint',
    source: 'src/scripts/**/*.{js,jsx}'
    test: 'test/**/*.js'
    options:
      configFile: 'grunt/config/eslint.yaml'
