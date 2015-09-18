module.exports = (grunt) ->
  grunt.config 'uglify',
    dist:
      options:
        banner: '<%= banner %>'
      files: [
        src: 'dist/scripts/gnocchi.js'
        dest: 'dist/scripts/gnocchi.min.js'
      ]
