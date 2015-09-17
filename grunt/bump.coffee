module.exports = (grunt) ->
  grunt.config 'bump',
    options:
      commit: false
      createTag: false
      push: false
      prereleaseName: 'rc'
      updateConfigs: ['pkg']
