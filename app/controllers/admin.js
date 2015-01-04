module.exports = ['$scope', 'Devices', function($scope, Devices) {
    console.log("Admin");
    //console.log($route.current.params);
    // Paging.setInfo(0, "STEP ZERO: TURN ON YOUR DEVICE");



    Devices.list().then(function(devices) {
        console.log(devices);
        $scope.devices = devices;
    });

}];