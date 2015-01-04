module.exports = ['$scope', '$location', '$timeout', '$window', 'UriMonitor', 'Config','Paging', function($scope ,$location, $timeout, $window, UriMonitor, Config, Paging) {
    console.log("LocalWifi");
    Paging.setInfo(4,"STEP FIVE: RECONNECTING YOUR COMPUTER")
    // using the
    //var url = "https://api-http.littlebitscloud.cc/ping";
    var checkLittleBits = UriMonitor(Config.urls.ping, 5000);
    var OFFLINE_MESSAGE = "WAITING";
    var WAITING_MSG = "RECONNECTING...";
    var CONNECTED_MSG = "CONNECTED";
    var DEMO = Config.DEMO;

    $scope.message = OFFLINE_MESSAGE;

    var done = function() {
        checkLittleBits.stop();
        $location.url("/6");
    };

    var setMessage = function() {
        $scope.message = CONNECTED_MSG;
    };

    checkLittleBits.on("change", function(e) {
        if(e === true) {
            setMessage();
            $timeout(done, 3000);
        }
    });

    if(DEMO) {
        $timeout(function() {
            $scope.message = WAITING_MSG;
            checkLittleBits.start();
        },3000);
    } else {
        var handleOffline = function() {
            $scope.$apply(function() {
                $scope.message =  WAITING_MSG;
                checkLittleBits.start();
            })
        };
        $window.addEventListener("offline",handleOffline);
    }
}];