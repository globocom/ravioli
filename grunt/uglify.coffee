module.exports = (grunt) ->
  grunt.config 'uglify',
    dist:
      options:
        banner: '<%= banner %>'
        screwIE8: true
      files: [
        src: 'dist/scripts/gnocchi.js'
        dest: 'dist/scripts/gnocchi.min.js'
      ]
