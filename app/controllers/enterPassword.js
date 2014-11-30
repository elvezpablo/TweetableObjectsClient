module.exports = ['$scope', '$location', 'CloudbitWifiSetup', 'Paging', function($scope, $location, CloudbitWifiSetup, Paging) {

    var _consoleMaker = function(color) {
        return function(k,v) {
            console.log("%c %s: %o", "background-color: "+color, k, v);
        }
    };
    var _log = _consoleMaker("salmon");

    $scope.savePassword = function() {
        CloudbitWifiSetup.save($scope.wifiPassword).then(function() {
            $location.url('reconnect');
        }, function(msg) {
            _log("Error :", msg);
        });

    }
}];