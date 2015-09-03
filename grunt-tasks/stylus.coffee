module.exports = (grunt) ->
  grunt.config 'stylus',
    compile:
      options:
        compress: false
      files: [
        src: 'src/styles/main.styl'
        dest: 'dist/styles/gnocchi.css'
      ]
