var littlebits = require('../libs/cloud-client-api-http/');
var angular = require('../node_modules/angular/angular-index');
var routes = require('../node_modules/angular-route/angular-route-index');
var routes = require('../node_modules/angular-cookies/angular-cookies-index');

//require('../node_modules/angular-route/');

//var api = littlebits.defaults({ access_token: 'e24e367cc46478c72575ba94b1abe18fa9234992fb5552a5e94822fe990be6fe' });
//
//api.devices(function(d, r) {
//    console.log("dude 3");
//    console.log(d);
//    console.log(r);
//});

// console.log("angualr %o", angular);
angular.module('TweetableObjects', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/welcome/:handle', {
            templateUrl : '/partials/bootingUp.html',
            controller : 'BootingUpController'
        }).when('/', {
            templateUrl : '/partials/bootingUp.html',
            controller : 'BootingUpController'
        }).when('/ready', {
            templateUrl : '/partials/ready.html',
            controller : 'ReadyController'
        }).when('/littlebits', {
            templateUrl : '/partials/littlebitsWifi.html',
            controller : 'LittleBitsWifiController'
        }).when('/choose', {
            templateUrl : '/partials/choose.html',
            controller : 'ChooseWifiController'
        }).when('/password', {
            templateUrl : '/partials/password.html',
            controller : 'EnterPasswordController'
        }).when('/reconnect', {
            templateUrl : '/partials/localWifi.html',
            controller : 'SwitchToLocalController'
        }).when('/landing', {
            templateUrl : '/partials/landing.html',
            controller : 'LandingController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
    .controller('MainController', require('./controllers/main'))
    .controller('BootingUpController', require('./controllers/bootingUp'))
    .controller('ReadyController', require('./controllers/ready'))
    .controller('LittleBitsWifiController', require('./controllers/littlebitsWifi'))
    .controller('ChooseWifiController', require('./controllers/chooseWifi'))
    .controller('EnterPasswordController', require('./controllers/enterPassword'))
    .controller('SwitchToLocalController', require('./controllers/localWifi'))
    .controller('LandingController', require('./controllers/landing'))
    .factory('CloudbitWifiSetup', require('./services/cloudbitWifiSetup'))
    .factory('UriMonitor', require('./services/uriMonitor'))
    .directive('timeline', require('./directives/timeline'))
    ;