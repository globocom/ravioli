module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.jsx'
      tasks: 'newer:babel:react'
