//var littlebits = require('../node_modules/cloud-client-api-http/');
//var angular = require('../node_modules/angular/angular-index');
//var routes = require('../node_modules/angular-route/angular-route-index');
//var cookies = require('../node_modules/angular-cookies/angular-cookies-index');
var angular = require('angular');
var littlebits = require('littlebits');
var routes = require('angular-route');
var cookies = require('angular-cookies');

angular.module("TweetableObjects",['ngRoute','ngCookies'])
    .value('Config',{
        DEMO : false,
        urls : {
            ping : "https://api-http.littlebitscloud.cc/ping"
        }
    })
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'partials/movie.html',
            controller : 'MovieController'
        }).when('/1', {
            templateUrl : 'partials/ready.html',
            controller : 'ReadyController'
        }).when('/2', {
            templateUrl : 'partials/littlebitsWifi.html',
            controller : 'LittleBitsWifiController'
        }).when('/3', {
            templateUrl : 'partials/choose.html',
            controller : 'ChooseWifiController'
        }).when('/4', {
            templateUrl : 'partials/password.html',
            controller : 'EnterPasswordController'
        }).when('/5', {
            templateUrl : 'partials/localWifi.html',
            controller : 'LocalWifiController'
        }).when('/6', {
            templateUrl : 'partials/landing.html',
            controller : 'LandingController'
        }).when('/admin', {
            templateUrl : 'partials/admin.html',
            controller : 'AdminController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
.config(['$routeProvider',function($routeProvider){
    }])
    .controller('MainController', require('./controllers/main'))
    .controller('MovieController', require('./controllers/movie'))
    .controller('BootingUpController', require('./controllers/bootingUp'))
    .controller('ReadyController', require('./controllers/ready'))
    .controller('LittleBitsWifiController', require('./controllers/littlebitsWifi'))
    .controller('ChooseWifiController', require('./controllers/chooseWifi'))
    .controller('EnterPasswordController', require('./controllers/enterPassword'))
    .controller('LocalWifiController', require('./controllers/localWifi'))
    .controller('LandingController', require('./controllers/landing'))
    .controller('ConfigController', require('./controllers/configure'))
    .controller('AdminController', require('./controllers/admin'))
    .factory('CloudbitWifiSetup', require('./services/cloudbitWifiSetup'))
    .factory('UriMonitor', require('./services/uriMonitor'))
    .factory('ClientInfo', require('./services/clientinfo'))
    .service('Paging', require('./services/paging'))
    .service('Devices', require('./services/devices'))
    .directive('timeline', require('./directives/timeline'))
    .directive('status', require('./directives/status'))
    ;