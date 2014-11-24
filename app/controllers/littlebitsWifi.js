module.exports = [ '$scope', '$timeout', '$location', '$window', 'UriMonitor','CloudbitWifiSetup', function($scope, $timeout, $location, $window, UriMonitor, CloudbitWifiSetup) {
    console.log("Little Bits Wifi");
    /*
     The main thing that's tricky in the flow is maintaining application
     state robustly. We are using a URImonitor to check the /identify endpoint
     so that we can make sure we know when we're successfully connected to the
     cloudBit's AP. We are also continually checking to make sure we don't get
     booted, and then also checking an endpoint on the internet to know when
     we're backonline.

     https://www.npmjs.org/package/uri-monitor

     */

    var WAITING_MSG = "Waiting for you to connect";
    var CONNECTING_MSG = "Connecting...";
    var CONNECTED_MSG = "Connected!";
    var DEBUG = false;
    var url = (DEBUG) ? "http://localhost:8080/" : CloudbitWifiSetup.pingUrl();

    var checkLittleBits = UriMonitor(url, 5000);
    checkLittleBits.on("change", function(connected, error) {
        if(connected === true) {
            $scope.status =  { message : CONNECTED_MSG };
            $timeout(function() {
                checkLittleBits.stop();
                $location.path("choose");
            },1500);
        }
    });



    var handleOffline = function() {
        $scope.status =  { message : CONNECTING_MSG };
    };
    $window.addEventListener("offline",handleOffline);

    checkLittleBits.start();

    $scope.status =  { message : WAITING_MSG };


//    $timeout(function() {
//        $scope.message = CONNECTED_MSG;
//        $timeout(function() {
//            $location.path("choose");
//        },1500);
//    }, 5000);

}];