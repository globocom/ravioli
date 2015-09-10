module.exports = (grunt) ->
  grunt.config 'concat',
    styles:
      files: [
        src: [
          'src/styles/icons.css'
          'dist/styles/gnocchi.css'
        ]
        dest: 'dist/styles/gnocchi.css'
      ]
