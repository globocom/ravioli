module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.jsx'
      tasks: 'newer:babel:react'
    styles:
      files: 'src/styles/**/*.styl'
      tasks: 'newer:stylus:dev'
