module.exports = (grunt) ->
  grunt.config 'concat',
    scripts:
      files: [
        src: [
          'dist/scripts/mixins/**/*.js'
          'dist/scripts/components/**/*.js'
        ]
        dest: 'dist/scripts/gnocchi.js'
      ]

    styles:
      files: [
        src: [
          'src/styles/icons.css'
          'dist/styles/gnocchi.css'
        ]
        dest: 'dist/styles/gnocchi.css'
      ]
