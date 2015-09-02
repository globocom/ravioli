module.exports = (grunt) ->
  grunt.config 'stylus',
    dev:
      options:
        compress: false
      files: [
        src: 'src/styles/main.styl'
        dest: 'dist/styles/gnocchi.css'
      ]

    dist:
      files: [
        src: 'src/styles/main.styl'
        dest: 'dist/styles/gnocchi.min.css'
      ]
