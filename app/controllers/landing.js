module.exports = ['$scope', '$location', 'Paging', function($scope, $location, Paging) {

    console.log("Landing");
    Paging.setInfo(null, "CONGRATULATIONS! YOUR DEVICE IS READY FOR TWEETS.");

    $scope.start = function() {
        $location.url("/");
    }

}];