module.exports = [ '$scope', '$timeout', '$location', '$window', 'UriMonitor','CloudbitWifiSetup', 'Paging', 'ClientInfo', function($scope, $timeout, $location, $window, UriMonitor, CloudbitWifiSetup, Paging, ClientInfo) {
    console.log("Little Bits Wifi");

    Paging.setInfo(2,"STEP TWO: CONNECT TO LITTLE BITS WIFI");

    var DEMO = true;

    var _getCSS = function(device, platform) {
        // show mac bu default
        var img =  "wifi-computer-mac";
        if(!device || !platform) {
            return img;
        }
        return "wifi-"+device+"-"+platform;
    };

    $scope.wifiImage = _getCSS(ClientInfo.device, ClientInfo.platform);

    if(DEMO) {
        //$timeout(function() {
        //    $scope.status = CONNECTED_MSG;
        //    $timeout(function() {
        //        $location.path("/3");
        //        },1500);
        //}, 5000);

    } else {
        /*
         Note from littlebits

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
                    $location.path("/3");
                },1500);
            }
        });
        // gives additinal feedback on wifi change status
        var handleOffline = function() {
            $scope.$apply(function() {
                $scope.status =  { message : CONNECTING_MSG };
            })
        };
        $window.addEventListener("offline",handleOffline);
        // start checking
        checkLittleBits.start();
        $scope.status =  { message : WAITING_MSG };
    }
}];