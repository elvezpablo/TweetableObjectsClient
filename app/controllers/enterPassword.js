module.exports = ['$scope', '$location', 'CloudbitWifiSetup', 'Paging', function($scope, $location, CloudbitWifiSetup, Paging) {

    Paging.setInfo(4,"STEP FOUR: ENTER A PASSWORD");

    var DEMO = false;

    if(DEMO) {
        $scope.savePassword = function() {
            $location.url('/5');
        };
    } else {
        $scope.savePassword = function() {
            CloudbitWifiSetup.save($scope.wifiPassword).then(function() {
                $location.url('/5');
            }, function(msg) {
                _log("Error :", msg);
            });
        }
    }

}];