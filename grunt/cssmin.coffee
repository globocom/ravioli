module.exports = (grunt) ->
  grunt.config 'cssmin',
    dist:
      files: [
        src: 'dist/styles/gnocchi.css'
        dest: 'dist/styles/gnocchi.min.css'
      ]
