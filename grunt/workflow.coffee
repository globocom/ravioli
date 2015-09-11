module.exports = (grunt) ->
  # aliases
  grunt.registerTask 'server',  'connect'
  grunt.registerTask 'test',    'scripts:test'
  grunt.registerTask 'dev',     'watch'
  grunt.registerTask 'run',     'concurrent'
  grunt.registerTask 'default', 'build'

  # general --------------------------------------------------------------------

  grunt.registerTask 'compile', [
    'scripts:dev'
    'styles:dev'
  ]

  grunt.registerTask 'build', [
    'scripts:dist'
    'styles:dist'
  ]

  # scripts --------------------------------------------------------------------

  grunt.registerTask 'scripts:dev', [
    'eslint:source'
    'mochaTest'
    'newer:babel'
    'browserify'
  ]

  grunt.registerTask 'scripts:test', [
    'eslint:test'
    'mochaTest'
  ]

  grunt.registerTask 'scripts:dist', [
    'eslint'
    'mochaTest'
    'babel'
    'browserify'
    'uglify'
    'clean'
  ]

  # styles ---------------------------------------------------------------------

  grunt.registerTask 'styles:dev', [
    'stylus'
    'concat:styles'
    'newer:postcss'
  ]

  grunt.registerTask 'styles:dist', [
    'stylus'
    'concat:styles'
    'postcss'
    'cssmin'
  ]
