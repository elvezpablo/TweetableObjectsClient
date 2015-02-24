module.exports = ['$scope', '$location', '$cookies', 'CloudbitWifiSetup', 'Config', 'Paging',  function($scope, $location, $cookies, CloudbitWifiSetup, Config, Paging) {

    Paging.setInfo(3,"STEP FOUR: ENTER A PASSWORD");

    var DEMO = Config.DEMO;

    if(DEMO) {
        $scope.savePassword = function() {
            $location.url('/5');
        };
    } else {
        $scope.savePassword = function() {
            CloudbitWifiSetup.save($scope.wifiPassword).then(function(data) {
                //console.log("save")
                CloudbitWifiSetup.identify().then(function(data) {
                    //console.log("identify: %o setting littlebits_device_id", data);
                    $cookies.littlebits_device_id = data.id;
                    $cookies.littlebits_device_hash = data.hash;
                    $location.url('/5');
                });

            }, function(msg) {
                console.error("Error :", msg);
            });
        }
    }

}];