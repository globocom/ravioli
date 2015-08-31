module.exports = (grunt) ->
  grunt.config 'babel',
    dist:
      files: [
        expand: true
        cwd: 'src/scripts'
        dest: 'dist/scripts'
        src: '**/*.jsx'
        ext: '.js'
      ]
