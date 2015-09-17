module.exports = (grunt) ->
  grunt.config 'usebanner',
    dist:
      options:
        banner: grunt.file.read 'grunt/banner.txt'
      files:
        src: [
          'dist/scripts/**/gnocchi*'
          'dist/styles/**/gnocchi*'
        ]
