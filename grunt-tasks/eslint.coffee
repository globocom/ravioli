module.exports = (grunt) ->
  grunt.config 'eslint',
    target: 'src/scripts/**/*.{js,jsx}'
    options:
      configFile: 'grunt-tasks/config/eslint.yaml'
