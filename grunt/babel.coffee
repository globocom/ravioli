module.exports = (grunt) ->
  grunt.config 'babel',
    transform:
      files: [
        expand: true
        cwd: 'src/scripts'
        dest: 'dist/scripts'
        src: '**/*.{js,jsx}'
        ext: '.js'
      ]
