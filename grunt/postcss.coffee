module.exports = (grunt) ->
  grunt.config 'postcss',
    autoprefixer:
      src: 'dist/styles/**/*.css'
      options:
        processors:
          require('autoprefixer') browsers: 'ie >= 10, last 2 versions'
