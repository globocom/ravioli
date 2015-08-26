module.exports = (grunt) ->
  grunt.config 'babel',
    dist:
      files:
        'dist/gnocchi.js': 'src/scripts/gnocchi.jsx'
