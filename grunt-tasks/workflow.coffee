module.exports = (grunt) ->
  # aliases
  grunt.registerTask 'server', 'run'
  grunt.registerTask 'build', ['dev', 'dist']

  # general --------------------------------------------------------------------

  grunt.registerTask 'run', 'concurrent'

  grunt.registerTask 'dev', [
    'scripts:dev'
    'styles:dev'
  ]

  grunt.registerTask 'dist', [
    'scripts:dist'
    'styles:dist'
  ]

  # scripts --------------------------------------------------------------------

  grunt.registerTask 'scripts:dev', [
    'eslint'
    'babel'
    'mochaTest'
    'concat:scripts'
  ]

  grunt.registerTask 'scripts:dist', [
    'eslint'
    'babel'
    'mochaTest'
    'concat:scripts'
    'uglify'
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
