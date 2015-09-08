module.exports = (grunt) ->
  grunt.config 'mochaTest',
    test:
      src: 'test/specs/*.js'
      options:
        reporter: 'nyan'
        # clearRequireCache: true
