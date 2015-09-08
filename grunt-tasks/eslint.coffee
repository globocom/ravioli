module.exports = (grunt) ->
  grunt.config 'eslint',
    scripts: 'src/scripts/**/*.{js,jsx}'
    options:
      configFile: 'grunt-tasks/config/eslint.yaml'
