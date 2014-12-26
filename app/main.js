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
    .factory('CloudbitWifiSetup', require('./services/cloudbitWifiSetup'))
    .factory('UriMonitor', require('./services/uriMonitor'))
    .factory('ClientInfo', require('./services/clientinfo'))
    .service('Paging', require('./services/paging'))
    .directive('timeline', require('./directives/timeline'))
    .directive('vimeo', require('./directives/vimeo'))
    ;