module.exports = (grunt) ->
  grunt.config 'concat',
    styles:
      options:
        banner: '<%= banner %>'
        stripBanners: true
      files: [
        src: [
          'src/styles/icons.css'
          'dist/styles/ravioli.css'
        ]
        dest: 'dist/styles/ravioli.css'
      ]
