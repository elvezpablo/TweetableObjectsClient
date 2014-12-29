module.exports = ['$scope', '$location', '$timeout', 'CloudbitWifiSetup', 'Config', 'Paging', function($scope, $location, $timeout, CloudbitWifiSetup, Config, Paging) {
    console.log("Choose Wifi");

    Paging.setInfo(3,"STEP THREE: CONNECT TO YOUR WIFI");

    $scope.wifis = null;

    var DEMO = Config.DEMO;

    if(DEMO) {
        $timeout(function( ) {

            $scope.wifis = [
                {
                    ssid : "My Wifi A"
                },
                {
                    ssid : "My Wifi B"
                },
                {
                    ssid : "A very long name for a wifi"
                },
                {
                    ssid : "My Wifi C"
                }
            ];

        }, 5000);

        $scope.wifiSelected = function(wifi) {
            $location.url('/4');
        };

    } else {
        CloudbitWifiSetup.scan().then(function(wifis) {
            $scope.wifis = wifis;
        }, function(){

        });

        $scope.wifiSelected = function(wifi) {
            CloudbitWifiSetup.set(wifi.ssid, wifi.mac, wifi.security, wifi.encryption);
            $location.url('/4');
        };
    }



}];