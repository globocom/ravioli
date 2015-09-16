module.exports = (grunt) ->
  grunt.config 'availabletasks',
    tasks:
      options:
        hideUngrouped: true
        sort: false
        groups:
          'General tasks': [
            'help'
            'build'
            'server'
            'test'
            'dev'
            'run'
          ]
        descriptions:
          help: 'Prints this list of available tasks.'
          server: 'Serves an example page at localhost:8888.'
          test: 'Runs all tests.'
          dev: ''
          run: 'dasdasdas'
