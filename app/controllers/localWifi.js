module.exports = ['$scope', '$location', '$timeout', '$window', 'UriMonitor', 'Config','Paging', function($scope ,$location, $timeout, $window, UriMonitor, Config, Paging) {
    console.log("LocalWifi");
    Paging.setInfo(5,"STEP FIVE: RECONNECTING YOUR COMPUTER")
    // using the
    //var url = "https://api-http.littlebitscloud.cc/ping";
    var checkLittleBits = UriMonitor(Config.urls.ping, 5000);
    var OFFLINE_MESSAGE = "Waiting for network switch...";
    var WAITING_MSG = "Attempting to reconnect to local wifi...";
    var CONNECTED_MSG = "Connected!";
    var DEMO = Config.DEMO;

    $scope.message = OFFLINE_MESSAGE;

    var done = function() {
        checkLittleBits.stop();
        $location.url("/6");
        console.log("/6");
    };

    var setMessage = function() {
        console.log("set message");
        $scope.message = CONNECTED_MSG;
    };

    checkLittleBits.on("change", function(e) {
        console.log("change");
        if(e === true) {
            setMessage();
            $timeout(done, 3000);
        }
    });

    if(DEMO) {
        $timeout(function() {
            $scope.message = WAITING_MSG;
            console.log("starting littlebits");
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