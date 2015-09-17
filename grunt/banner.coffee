banner = '''
/**
 * <%= pkg.title %> - <%= pkg.description %>
 *
 * @author <%= pkg.author.name %> <<%= pkg.author.email %>>
 * @version <%= pkg.version %>
 * @license <%= pkg.license %>
 */
'''

module.exports = (grunt) ->
  grunt.config 'usebanner',
    dist:
      options:
        banner: banner
      files:
        src: [
          'dist/scripts/**/gnocchi*'
          'dist/styles/**/gnocchi*'
        ]
