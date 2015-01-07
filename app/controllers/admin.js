module.exports = ['$scope', 'Devices', function($scope, Devices) {
    console.log("Admin");
    //console.log($route.current.params);
    //Paging.setInfo(0, "");

    Devices.list().then(function(devices) {
        $scope.devices = devices;
    });

    $scope.trigger = function(device) {
        if(device.is_connected)
            Devices.trigger(device.id);
    };

    $scope.select = function(device) {
        $scope.device = device;
    };

    $scope.add = function(device_id, handle) {
        console.log(device_id, handle);
    };

    $scope.edit = function(handle) {
        console.log($scope.device.id, handle);
      ///  Devices.update($scope.device.id, handle).then(function(data) {});
    }


}];