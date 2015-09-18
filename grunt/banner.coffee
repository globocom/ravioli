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
  grunt.config 'banner', banner
  grunt.config 'usebanner',
    options:
      banner: banner
    styles:
      files:
        src: 'dist/styles/**/*.min.css'
