module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.jsx'
      tasks: 'babel:react'
