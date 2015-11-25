module.exports = (grunt) ->
  grunt.config 'cssmin',
    dist:
      files: [
        src: 'dist/styles/ravioli.css'
        dest: 'dist/styles/ravioli.min.css'
      ]
