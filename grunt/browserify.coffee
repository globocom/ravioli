module.exports = (grunt) ->
  grunt.config 'browserify',
    dist:
      files: [
        src: 'dist/lib/main.js'
        dest: 'dist/scripts/gnocchi.js'
      ]
      options:
        banner: '<%= banner %>'
        external: ['react']
        transform: ['browserify-shim']
        require: ['./dist/lib/main.js:gnocchi']
