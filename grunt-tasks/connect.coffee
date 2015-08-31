module.exports = (grunt) ->
  grunt.config 'connect',
    dev:
      options:
        port: 8888
        base: 'dist'
        keepalive: true
