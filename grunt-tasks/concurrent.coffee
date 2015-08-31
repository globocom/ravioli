module.exports = (grunt) ->
  grunt.config 'concurrent',
    dev:
      tasks: ['watch', 'connect']
      options:
        logConcurrentOutput: true
