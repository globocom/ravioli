module.exports = (grunt) ->
  grunt.config 'concat',
    dist:
      files:
        'dist/scripts/gnocchi.js': ['dist/scripts/components/**/*.js']
