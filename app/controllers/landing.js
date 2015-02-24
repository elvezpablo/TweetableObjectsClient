module.exports = ['$scope', '$location', '$cookies', '$timeout', 'Config', 'Paging', 'Devices', function($scope, $location, $cookies, $timeout, Config, Paging, Devices) {


    Paging.setInfo(5, "CONGRATULATIONS! YOUR DEVICE IS READY FOR TWEETS.");
    $scope.needs_handle = false;


    var _getHandle = function()  {
        if($cookies.littlebits_device_id && $cookies.littlebits_device_id.length > 0 && $cookies.littlebits_device_hash) {
            // first check to see if we have a handle
            Devices.device($cookies.littlebits_device_id).then(function(device) {
                console.log("device", device);
               if(device.handle) {

                   $scope.handle = device.handle;
                   Devices.update($cookies.littlebits_device_id, $cookies.littlebits_device_hash, device.handle).then(function(data) {
                       console.log($cookies.littlebits_device_id," & ",$cookies.littlebits_device_hash+" added with handle");
                       _triggerWelcome();
                   })
               } else {

                   $scope.needs_handle = true;
                   Devices.add($cookies.littlebits_device_id, $cookies.littlebits_device_hash).then(function(data) {
                       console.log($cookies.littlebits_device_id," & ",$cookies.littlebits_device_hash+" added");
                       _triggerWelcome();
                   });
               }
            }, function(data) {
                // if the device is not found add it
                console.log("device not found", data);
                Devices.add($cookies.littlebits_device_id, $cookies.littlebits_device_hash).then(function(data) {
                    console.log($cookies.littlebits_device_id," & ",$cookies.littlebits_device_hash+" added");
                    _triggerWelcome();
                });
            });
        } else {
            $location.path("/1");
        }
    };

    _getHandle();

    var _triggerWelcome = function() {
        $timeout(function() {
            Devices.trigger($cookies.littlebits_device_id);
        }, 5000);
    };

    Devices.device($cookies.littlebits_device_id).then(function(device) {
        $scope.device = device;
    });

    $scope.makeFly = function() {
        Devices.trigger($cookies.littlebits_device_id);
    };

    $scope.update = function(handle) {

        if(handle && handle.length > 2) {
            $scope.network ={busy:true};
            Devices.update($cookies.littlebits_device_id, null, handle).then(function(data) {
                $timeout(function() {
                    $scope.network ={busy:false};
                    Devices.trigger($cookies.littlebits_device_id);
                }, 1000);
            }, function(data) {
                $scope.network ={busy:false};
                console.log("Error on update: ", data);
            });
        }
    };

    $scope.newWifi = function() {
        $location.path("/1");
        $cookies.littlebits_device_id = "";
        $cookies.littlebits_device_hash = "";
    };


}];