desc = 'Bumps new version, build the project, push to repo and publish at npm.'

module.exports = (grunt) ->
  grunt.registerTask 'release', desc, (type) ->
    grunt.task.run [
      "bump:#{type or 'patch'}"
      'build'
      'usebanner'
      'gitadd'
      'gitcommit'
      'gittag'
      'gitpush'
      'publish'
    ]
