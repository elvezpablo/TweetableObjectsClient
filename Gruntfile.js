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
        less : {
            default : {
                files : {
                    "www/css/app.css" : "less/app.less"
                }
            }
        },
        jade : {
            options : {
                pretty : true
            },
            partials : {
                files : [{
                    cwd:"jade/",
                    src:["index.jade"],
                    dest:"www/",
                    expand:true,
                    ext:".html"
                },{
                    cwd:"jade/partials",
                    src:["*.jade"],
                    dest:"www/partials",
                    expand:true,
                    ext:".html"
                }]
            }
        },
        copy : {
            js : {
                files : [

                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify', 'less', 'jade']);

};