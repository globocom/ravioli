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
    'newer:eslint'
    'newer:babel'
    'newer:concat'
  ]

  grunt.registerTask 'scripts:dist', [
    'eslint'
    'babel'
    'concat'
    'uglify'
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
