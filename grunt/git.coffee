module.exports = (grunt) ->
  grunt.config 'gitadd',
    release:
      options:
        all: true

  grunt.config 'gitcommit',
    release:
      options:
        verbose: true
        message: 'Releases version <%= pkg.version %>'
      files:
        src: '.'

  grunt.config 'gittag',
    release:
      options:
        tag: 'v<%= pkg.version %>'
        message: 'Releases version <%= pkg.version %>'

  grunt.config 'gitpush',
    release:
      options:
        tags: true
