module.exports = ['$scope', '$location', 'Config', 'Paging', function($scope, $location, Config, Paging) {
    console.log("Ready");
    Paging.setInfo(1, "STEP ONE: SETTING UP YOUR DEVICE");
    $scope.next = function() {
        $location.url("/2");
    }
}];