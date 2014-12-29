module.exports = ['$scope', '$location', 'CloudbitWifiSetup', 'Config', 'Paging', function($scope, $location, CloudbitWifiSetup, Config, Paging) {

    Paging.setInfo(4,"STEP FOUR: ENTER A PASSWORD");

    var DEMO = Config.DEMO;

    if(DEMO) {
        $scope.savePassword = function() {
            $location.url('/5');
        };
    } else {
        $scope.savePassword = function() {
            CloudbitWifiSetup.save($scope.wifiPassword).then(function() {
                $location.url('/5');
            }, function(msg) {
                console.error("Error :", msg);
            });
        }
    }

}];