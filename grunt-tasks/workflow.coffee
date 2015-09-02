module.exports = (grunt) ->
  grunt.registerTask 'run', 'concurrent:dev'
  grunt.registerTask 'dev', 'concurrent:dev'

  grunt.registerTask 'scripts:dev', [
    'newer:babel'
    'concat'
  ]

  grunt.registerTask 'styles:dev', [
    'stylus:dev'
    'postcss'
  ]
