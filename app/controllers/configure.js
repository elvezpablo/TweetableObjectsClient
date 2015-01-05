/**
 * Created by paul.rangel on 1/4/15.
 */
module.exports = ['$scope', '$location', '$cookies', 'Devices', 'Config', function($scope, $location, $cookies, Devices, Config) {
    console.log("Configure");
    if(Config.DEMO) {
        $cookies.littlebits_device_id = '00e04c1cc4c5';
    }


    Devices.device($cookies.littlebits_device_id).then(function(device) {
        $scope.device = device;
    });

    $scope.update = function(handle) {
        Devices.update($cookies.littlebits_device_id, handle).then(function(data) {});
    };

    $scope.newWifi = function() {
        $location.path("/1");
        $cookies.littlebits_device_id = "";
    };
}];