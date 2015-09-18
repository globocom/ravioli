module.exports = (grunt) ->
  grunt.config 'concat',
    styles:
      options:
        banner: '<%= banner %>'
        stripBanners: true
      files: [
        src: [
          'src/styles/icons.css'
          'dist/styles/gnocchi.css'
        ]
        dest: 'dist/styles/gnocchi.css'
      ]
