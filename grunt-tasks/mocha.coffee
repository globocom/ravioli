module.exports = (grunt) ->
  grunt.config 'mochaTest',
    test:
      src: 'test/components/*.js'
      options:
        reporter: 'nyan'
        # clearRequireCache: true
