module.exports = (grunt) ->
  grunt.config 'concat',
    dist:
      files: [
        src: [
          'dist/scripts/mixins/**/*.js'
          'dist/scripts/components/**/*.js'
        ]
        dest: 'dist/scripts/gnocchi.js'
      ]
