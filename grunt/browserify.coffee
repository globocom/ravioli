module.exports = (grunt) ->
  grunt.config 'browserify',
    dist:
      files: [
        src: 'dist/scripts/main.js'
        dest: 'dist/scripts/gnocchi.js'
      ]
      options:
        external: ['react']
        transform: ['browserify-shim']
        require: ['./dist/scripts/main.js:gnocchi']
