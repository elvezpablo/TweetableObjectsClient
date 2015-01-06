module.exports = ['$scope', 'Devices', function($scope, Devices) {
    console.log("Admin");
    //console.log($route.current.params);
    // Paging.setInfo(0, "STEP ZERO: TURN ON YOUR DEVICE");
    Devices.list().then(function(devices) {
        $scope.devices = devices;
    });

    $scope.trigger = function(device) {
        if(device.is_connected)
            Devices.trigger(device.id);
    }

}];