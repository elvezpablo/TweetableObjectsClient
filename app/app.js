var littlebits = require('../libs/cloud-client-api-http/');
var angular = require('../node_modules/angular/angular-index');
var routes = require('../node_modules/angular-route/angular-route-index');
var cookies = require('../node_modules/angular-cookies/angular-cookies-index');

angular.module('TweetableObjects', ['ngRoute', 'ngCookies'])
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
        }).when('/configure', {
            templateUrl : 'partials/configure.html',
            controller : 'ConfigController'
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
angular.module('TweetableObjects').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/admin.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Add or edit devices</h1>\n" +
    "      <p>Something...</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 25%\" class=\"center-center panel choose-wifi\">\n" +
    "    <div class=\"wifi-content\">\n" +
    "      <h3>Devices</h3>\n" +
    "      <ul class=\"wifis\">\n" +
    "        <li ng-repeat=\"device in devices\" ng-click=\"wifiSelected(wifi)\">@{{ device.handle }} ({{ device.id }} )\n" +
    "          <div ng-class=\"{ 'connected' : device.is_connected}\" class=\"connected-status\"></div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/bootingUp.html',
    "\n" +
    "<div class=\"instruction-step clearfix\">\n" +
    "  <div class=\"content left\">Turn on your Tweetable Object with the button and wait for status light to start flashing.</div>\n" +
    "</div>\n" +
    "<div ng-click=\"next()\" class=\"btn btn btn-primary btn-lg btn-block\">STATUS LIGHT IS FLASHING</div>"
  );


  $templateCache.put('partials/choose.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Connect your device to Wi-Fi</h1>\n" +
    "      <p>Check the list of available access points, then click on your local Wi-Fi network. The page will automatically continue to the next step once you've made a selection.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 25%\" class=\"center-center panel choose-wifi\">\n" +
    "    <div ng-hide=\"wifis\" class=\"wifi-content\">\n" +
    "      <h3>FINDING NETWORKS</h3>\n" +
    "      <div class=\"spinner\"></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"wifis\" class=\"wifi-content\">\n" +
    "      <h3>SELECT FROM THIS LIST</h3>\n" +
    "      <ul class=\"wifis\">\n" +
    "        <li ng-repeat=\"wifi in wifis\" ng-if=\"wifi.ssid.length &gt; 0\" ng-click=\"wifiSelected(wifi)\">{{ wifi.ssid }}</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/config.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Configure</h1>\n" +
    "      <p>Edit the handle</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/configure.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center\"></div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/landing.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div style=\"top: 26%\" class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Customize @handle</h1>\n" +
    "      <!--p Connect the device to a new Wi-Fi-->\n" +
    "      <p class=\"form-description\"> Congratulations! The device is configured. Now, assign a custom @handle to get it ready for Tweets.</p>\n" +
    "      <div class=\"password-content clearfix\">\n" +
    "        <div class=\"form-control\">\n" +
    "          <div class=\"prefix\">@</div>\n" +
    "          <input placeholder=\"{{ device.handle }}\" ng-model=\"newHandle\" type=\"text\" class=\"handle\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-control\"><a type=\"button\" ng-click=\"update(newHandle)\" class=\"button\">SAVE</a></div>\n" +
    "      </div>\n" +
    "      <h1 style=\"font-size: 24px; margin: 30px 0 0 0; line-height: 35px;\">Connect to new Wi-Fi</h1>\n" +
    "      <p style=\"margin-top: 0px\" class=\"form-description\">The device must be reconfigured if you switch Wi-Fi networks. Follow these simple steps to reconnect.</p>\n" +
    "      <div style=\"margin: 20px 0 30px 0;\" class=\"new-wifi\"><a ng-click=\"newWifi()\" class=\"button\">CONFIGURE MY DEVICE</a></div>\n" +
    "    </div>\n" +
    "    <!--.copy-->\n" +
    "    <!--    h1 Tweet, Tweet-->\n" +
    "    <!--    p Congratulations! The device is configured and ready for Tweets. Continue to the control panel to add your handle.-->\n" +
    "    <!--    a.button(ng-click=\"configure()\") CONTINUE-->\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/littlebitsWifi.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Connect your device to Wi-Fi</h1>\n" +
    "      <p>Change the Wi-Fi connection on your computer to the network that starts with littleBits_Cloud_ followed by six characters. The page will automatically continue to the next step once the browser detects the device.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 25%\" class=\"center-center panel switch-wifi\"><img src=\"images/wifis.png\"/></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/localWifi.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Reconnect your computer to Wi-Fi</h1>\n" +
    "      <p>Once the device is configured, connect your computer to your local Wi-Fi network. The page will automatically continue to the next step once the STATUS light on the device changes from blue to green.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div class=\"center-center reconnecting\">\n" +
    "    <div class=\"spinner\"></div>{{ message }}\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/movie.html',
    "\n" +
    "<div class=\"left\">\n" +
    "  <div ng-click=\"next()\" class=\"center-center start\"><a class=\"button clear-button\">CONFIGURE MY DEVICE</a>\n" +
    "    <div class=\"disclaimer\"><strong>Note:</strong> The device operates on a local Wi-Fi network (e.g. your home or office). At this time, it will not connect to a hotel Wi-Fi network that requires a special login.\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/password.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Enter your Wi-Fi password</h1>\n" +
    "      <!--p(style=\"margin-bottom: 16px;\") Enter password for your device.-->\n" +
    "      <div class=\"password-content clearfix\">\n" +
    "        <div class=\"form-control\">\n" +
    "          <input ng-model=\"wifiPassword\" placeholder=\"Password\" type=\"text\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-control\"><a type=\"button\" ng-click=\"savePassword()\" class=\"button\">SAVE</a></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 45%\" class=\"center-center lock\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/ready.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Configure your device</h1>\n" +
    "      <p>On the base of the device, switch it to the ON position. Then, insert a paper clip into the little hole next to RESET, press gently and wait until the flashing STATUS light changes to solid blue. The solid blue means the device is ready to connect to Wi-Fi.</p><a ng-click=\"next()\" class=\"button\">CONTINUE</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div class=\"center-center panel panel-device-bottom\">\n" +
    "    <div status=\"status\" class=\"status\"></div>\n" +
    "    <div class=\"device-bottom\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
