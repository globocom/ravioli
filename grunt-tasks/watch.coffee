module.exports = (grunt) ->
  grunt.config 'watch',
    scripts:
      files: 'src/scripts/**/*.{js,jsx}'
      tasks: ['newer:babel', 'concat']
    styles:
      files: 'src/styles/**/*.styl'
      tasks: ['stylus:dev', 'postcss']
