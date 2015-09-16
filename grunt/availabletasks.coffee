tasks =
  help:   'Prints this list of available tasks.'
  server: "Serves an example page at #{'localhost:<%= connect.dev.options.port %>'.white}."
  test:   'Runs all tests.'
  dev:    'Regenerates scripts and styles. Keeps watching files for modifications.'
  run:    "Runs #{'server'.cyan} and #{'dev'.cyan} tasks at the same time."
  build:  'Regenerates scripts, styles and it\'s compressed files for production (dist).'

module.exports = (grunt) ->
  grunt.config 'availabletasks',
    tasks:
      options:
        hideUngrouped: true
        descriptions: tasks
        sort: Object.keys(tasks)
        groups: 'General tasks': Object.keys(tasks)
