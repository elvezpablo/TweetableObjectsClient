module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade : {
            options : {
                pretty : true
            }
        },
        browserify: {
            stage: {
                files: {
                    'www/app.js': ['app/main.js']
                }
            }
        },

    });

    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify']);

};
