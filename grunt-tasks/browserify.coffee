module.exports = (grunt) ->
  grunt.config 'browserify',
    dist:
      files: [
        src: 'dist/scripts/components/*.js'
        dest: 'dist/scripts/gnocchi.js'
      ]
      options:
        require: (->
          ['./dist/scripts/components/text.js:lusac', './dist/scripts/components/textarea.js:lusac2']
        )()
        external: ['react']
        transform: ['browserify-shim']
