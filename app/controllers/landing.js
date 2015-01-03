module.exports = ['$scope', '$location', 'Config', 'Paging', function($scope, $location, Config, Paging) {

    console.log("Landing");
    Paging.setInfo(5, "CONGRATULATIONS! YOUR DEVICE IS READY FOR TWEETS.");

    $scope.start = function() {
        $location.url("/");
    }

}];