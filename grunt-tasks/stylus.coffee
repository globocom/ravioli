module.exports = (grunt) ->
  grunt.config 'stylus',
    dev:
      options:
        compress: false
      files: [
        expand: true
        cwd: 'src/styles'
        dest: 'dist/styles'
        src: '**/*.styl'
        ext: '.css'
      ]
