module.exports = function(grunt) {
  [ 'grunt-contrib-sass',
    'grunt-contrib-watch' ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: { 'style/main.css': 'style/main.scss' }
      }
    },

    watch: {
      js: {
        files: ['style/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [ 'sass' ]);
};
