module.exports = (grunt) ->
  grunt.config 'babel',
    transform:
      files: [
        expand: true
        cwd: 'src/lib'
        dest: 'dist/lib'
        src: '**/*.{js,jsx}'
        ext: '.js'
      ]
