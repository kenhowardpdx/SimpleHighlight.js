module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['sass/*.scss'],
        tasks: ['compass'],
        options: {
            spawn: false
        }
      },
      scripts: {
        files: ['js/jquery.simplehighlight.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      },
      src: {
        files: ['*.html']
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

    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },

    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'js/jquery.simplehighlight.js'  ],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['uglify']);
  // Development Task
  grunt.registerTask('dev', ['connect','watch']);

};
