angular.module('TweetableObjects').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/admin.html',
    "\n" +
    "<div class=\"admin\">\n" +
    "  <h3>Tweetkit Admin</h3>\n" +
    "  <div class=\"add\">\n" +
    "    <input/>\n" +
    "  </div>\n" +
    "  <div class=\"list\">\n" +
    "    <div ng-repeat=\"device in devices\" class=\"device\">\n" +
    "      <div class=\"device-id\">{{ device.id }}</div>\n" +
    "      <div class=\"device-handle\">{{ device.handle }}</div>\n" +
    "      <div class=\"device-status\">{{ device.is_connected }}</div>\n" +
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
    "      <h1>Connecting the device to your wiﬁ network.</h1>\n" +
    "      <p>Check the lists of available access points then click on your local network. The page will change once selected.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div class=\"center-center panel\">\n" +
    "    <div ng-hide=\"wifis\" class=\"wifi-content\">\n" +
    "      <h3>Finding your local wifi networks</h3>\n" +
    "      <div class=\"spinner\"></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"wifis\" class=\"wifi-content\">\n" +
    "      <h3>Select your local wifi to connect to your device</h3>\n" +
    "      <ul class=\"wifis\">\n" +
    "        <li ng-repeat=\"wifi in wifis\" ng-if=\"wifi.ssid.length &gt; 0\" ng-click=\"wifiSelected(wifi)\">{{ wifi.ssid }}</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/landing.html',
    "\n" +
    "<div class=\"landing-content\">\n" +
    "  <h1>Your device is ready for Tweets.</h1>\n" +
    "  <p>Congratulations, your device is conﬁgured and will now send you to the control panel.</p>\n" +
    "  <p>Once there you can add additional hash tags to animate the device.</p>\n" +
    "  <p>Thank you for conﬁguring and happy Tweeting!</p>\n" +
    "  <div ng-click=\"start()\" class=\"btn\">TAP HERE TO CONFIGURE AGAIN</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/littlebitsWifi.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Connecting your computer to the device.</h1>\n" +
    "      <p>Now, change your wiﬁ connection on your computer to the network that starts with littleBits_Cloud followed by 6 characters. The page will automatically change when the browser detects the device availability.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div class=\"center-center panel device_bottom\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/localWifi.html',
    "\n" +
    "<h1>Reconnecting your computer to wiﬁ.</h1>\n" +
    "<p>Once your bird is conﬁgured switch your computer back to your local wiﬁ.</p>\n" +
    "<p>When your local wiﬁ is selected the page will automatically change and the</p>\n" +
    "<p>light on the device will also change from blue to green.</p>\n" +
    "<h3 class=\"reconnect\">{{ message }}\n" +
    "  <div class=\"spinner\"></div>\n" +
    "</h3>"
  );


  $templateCache.put('partials/movie.html',
    "\n" +
    "<div class=\"left\">\n" +
    "  <div ng-click=\"next()\" class=\"center-center start\"><a class=\"button clear-button\">CONFIGURE MY DEVICE</a></div>\n" +
    "</div>\n" +
    "<div class=\"right\">\n" +
    "  <div style=\"top: 25%\" class=\"center-center device\"></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/password.html',
    "\n" +
    "<h1>Entering your password.</h1>\n" +
    "<p>Enter a new personal password for your device.</p>\n" +
    "<p>The page will change once the password is entered and the save button is tapped.</p>\n" +
    "<div class=\"password-content\">\n" +
    "  <div class=\"form-control\">\n" +
    "    <input ng-model=\"wifiPassword\" placeholder=\"Password\" type=\"text\"/>\n" +
    "  </div>\n" +
    "  <div class=\"form-control\"><a type=\"button\" ng-click=\"savePassword()\" class=\"btn\">SAVE PASSWORD</a></div>\n" +
    "</div>"
  );


  $templateCache.put('partials/ready.html',
    "\n" +
    "<div class=\"left white\">\n" +
    "  <div class=\"center-center\">\n" +
    "    <div class=\"copy\">\n" +
    "      <h1>Configure your device</h1>\n" +
    "      <p>Use a paper clip and insert it into the tiny hole on the base of the device. Press in gently and wait for the Flashing Light to change to solid Blue. Once the Light is solid Blue your device is ready to connect to wiﬁ.</p><a ng-click=\"next()\" class=\"button\">CONTINUE</a>\n" +
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
