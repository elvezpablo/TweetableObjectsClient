module.exports = ['$scope', '$location', '$cookies', '$timeout', 'Config', 'Paging', 'Devices', function($scope, $location, $cookies, $timeout, Config, Paging, Devices) {


    Paging.setInfo(5, "CONGRATULATIONS! YOUR DEVICE IS READY FOR TWEETS.");
    $scope.needs_handle = false;

    var _getHandle = function()  {
        if($cookies.littlebits_device_id && $cookies.littlebits_device_id.length > 0) {
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
        } else {
            $location.path("/1");
        }
    };

    _getHandle();


    Devices.device($cookies.littlebits_device_id).then(function(device) {
        $scope.device = device;
    });

    $scope.update = function(handle) {

        if(handle && handle.length > 2) {
            $scope.network ={busy:true};
            Devices.update($cookies.littlebits_device_id, handle).then(function(data) {
                $timeout(function() {
                    $scope.network ={busy:false};
                    Devices.trigger($cookies.littlebits_device_id);
                }, 1000);
            });
        }
    };

    $scope.newWifi = function() {
        $location.path("/1");
        $cookies.littlebits_device_id = "";
    };


}];