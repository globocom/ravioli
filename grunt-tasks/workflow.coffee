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
    'newer:babel'
    'concat'
  ]

  grunt.registerTask 'scripts:dist', [
    'babel'
  ]

  # styles ---------------------------------------------------------------------

  grunt.registerTask 'styles:dev', [
    'stylus:dev'
    'newer:postcss'
  ]

  grunt.registerTask 'styles:dist', [
    'stylus:dist'
    'postcss'
  ]
