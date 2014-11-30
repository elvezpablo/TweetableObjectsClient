module.exports = ['$scope', '$location', '$timeout', 'UriMonitor', 'Paging', function($scope ,$location, $timeout, UriMonitor, Paging) {
    console.log("LocalWifi");
    // using the
    var url = "https://api-http.littlebitscloud.cc/ping";
    var checkLittleBits = UriMonitor(url, 5000);
    var WAITING_MSG = "Attempting to connect to local wifi...";
    var CONNECTED_MSG = "Connected!";

    $scope.message = WAITING_MSG;

    checkLittleBits.on("change", function(e) {
        if(e === true) {
            $scope.message = CONNECTED_MSG;
            $timeout(function() {
                checkLittleBits.stop();
                $location.path("landing");
            },2000);
        }
    });
    checkLittleBits.start();

//    $timeout(function() {
//        $location.path("landing");
//    }, 2500);
}];