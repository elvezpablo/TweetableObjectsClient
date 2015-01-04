module.exports = ['$scope', '$location', '$cookies', '$timeout', 'Config', 'Paging', 'Devices', function($scope, $location, $cookies, $timeout, Config, Paging, Devices) {


    Paging.setInfo(5, "CONGRATULATIONS! YOUR DEVICE IS READY FOR TWEETS.");
    $scope.needs_handle = false;

    var _getHandle = function()  {
        if($cookies.littlebits_device_id) {
            Devices.device($cookies.littlebits_device_id).then(function(device) {
               if(device.handle) {
                   $scope.handle = device.handle;
               } else {
                   $scope.needs_handle = true;
               }
                $timeout(function() {
                    Devices.trigger($cookies.littlebits_device_id);
                }, 5000);
            });
        }
    };

    _getHandle();

    $scope.configure = function() {
        $location.path("/configure");
    };

}];