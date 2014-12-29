module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            stage: {
                files: {
                    'www/app.js': ['app/app.js']
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
                options : {
                    data : {
                        timestamp: "<%= pkg.version %> - <%=   new Date().getTime() %>"
                    }
                },
                files : [{
                    cwd:"jade/",
                    src:["index.jade"],
                    dest:"www/",
                    expand:true,
                    ext:".html"
                },{
                    cwd:"jade/partials",
                    src:["*.jade"],
                    dest:"partials",
                    expand:true,
                    ext:".html"
                }]
            }
        },
        copy : {
            js : {
                files : [
                    {
                        expand : true,
                        src : ["images/*"],
                        dest : 'www/'
                    }
                ]
            }
        },
        rsync : {
            stage : {
                files : "www/",
                options : {
                    host : "rangelworks.com",
                    user : "prangel",
                    remoteBase : "~/tweetable.rangelworks.com"
                }
            },
            deploy : {
                files : "www/",
                options : {
                    host : "tweetkit.co",
                    user : "paulrangel",
                    remoteBase : "/var/www/html"
                }
            }
        },
        ngtemplates : {
            default : {
                options : {
                    module : "TweetableObjects"
                },
                src : 'partials/**.html',
                dest : "app/templates.js"
            }
        },
        concat : {
            default : {
                src : ["app/main.js", "app/templates.js"],
                dest : "app/app.js"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-rsync-2");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['less','jade', 'templates', 'browserify']);
    grunt.registerTask('templates', ['ngtemplates', 'concat']);

};