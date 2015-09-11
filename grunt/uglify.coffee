module.exports = (grunt) ->
  grunt.config 'uglify',
    dist:
      files: [
        src: 'dist/scripts/gnocchi.js'
        dest: 'dist/scripts/gnocchi.min.js'
      ]
