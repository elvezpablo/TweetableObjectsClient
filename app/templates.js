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
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Configure</h1>\n" +
    "      <p class=\"form-description\">Edit your handle or connect to new Wi-Fi</p>\n" +
    "      <div class=\"password-content clearfix\">\n" +
    "        <div class=\"form-control\">\n" +
    "          <input placeholder=\"{{ device.handle }}\" ng-model=\"newHandle\" type=\"text\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-control\"><a type=\"button\" ng-click=\"update(newHandle)\" class=\"button\">CHANGE</a></div>\n" +
    "      </div>\n" +
    "      <p class=\"form-description\">Connect your device to a new Wi-Fi</p>\n" +
    "      <div class=\"new-wifi\"><a ng-click=\"newWifi()\" class=\"button\">CONNECT TO NEW WIFI</a></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 30%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/landing.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Tweet, Tweet</h1>\n" +
    "      <p>Congratulations! The device is configured and ready for Tweets. Every Tweet will evoke an action from the device. Continue to the control panel to add your handle and hashtag.</p><a ng-click=\"configure()\" class=\"button\">CONTINUE</a>\n" +
    "    </div>\n" +
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
    "      <p>Change the Wi-Fi connection on your computer to the network that starts with littleBits_Cloud followed by six characters. The page will automatically continue to the next step once the browser detects the device.</p>\n" +
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
    "      <p>Once the device is configured, connect your computer to your local Wi-Fi network. The page will automatically continue to the next step once the light on the device changes from blue to green.</p>\n" +
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
    "  <div ng-click=\"next()\" class=\"center-center start\"><a class=\"button clear-button\">CONFIGURE MY DEVICE</a></div>\n" +
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
    "      <p style=\"margin-bottom: 16px;\">Enter a new personal password for your device.</p>\n" +
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
    "      <p>On the base of the device, insert a paper clip into the little hole next to RESET, press gently and wait for the flashing light to change to solid blue. The solid blue means the device is ready to connect to Wi-Fi.</p><a ng-click=\"next()\" class=\"button\">CONTINUE</a>\n" +
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
