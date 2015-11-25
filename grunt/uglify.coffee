module.exports = (grunt) ->
  grunt.config 'uglify',
    dist:
      options:
        banner: '<%= banner %>'
        screwIE8: true
      files: [
        src: 'dist/scripts/ravioli.js'
        dest: 'dist/scripts/ravioli.min.js'
      ]
