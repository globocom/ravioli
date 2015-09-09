module.exports = (grunt) ->
  grunt.config 'mochaTest',
    test:
      src: 'test/**/*-test.js'
      options:
        reporter: 'nyan'
        require: 'grunt-babel/node_modules/babel-core/register'
