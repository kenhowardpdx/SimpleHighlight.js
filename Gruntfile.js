module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['uglify']);
  // Development Task
  grunt.registerTask('dev', ['connect','watch']);

};
