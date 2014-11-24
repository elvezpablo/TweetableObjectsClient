module.exports = ['$scope', '$location', 'CloudbitWifiSetup', function($scope, $location, CloudbitWifiSetup) {
    console.log("Choose Wifi");
    $scope.wifis = null;

    CloudbitWifiSetup.scan().then(function(wifis) {
        $scope.wifis = wifis;
    }, function(){

    });

    $scope.wifiSelected = function(wifi) {
        CloudbitWifiSetup.set(wifi.ssid, wifi.mac, wifi.security, wifi.encryption);
        $location.url('password');
    };

}];