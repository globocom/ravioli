module.exports = (grunt) ->
  grunt.config 'browserify',
    dist:
      files: [
        src: 'dist/scripts/components/*.js'
        dest: 'dist/scripts/gnocchi.js'
      ]
      options:
        external: ['react']
        transform: ['browserify-shim']
        require: (->
          require('glob').sync('dist/scripts/components/*.js').map (file) ->
            component = file.split('/').pop().replace '.js', ''
            "./#{file}:gnocchi-#{component}"
        )()
