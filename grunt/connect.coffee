module.exports = (grunt) ->
  grunt.config 'connect',
    dev:
      options:
        port: 7777
        base: ['dist', 'docs']
        keepalive: true
