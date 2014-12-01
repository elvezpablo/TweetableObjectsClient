module.exports = ['$scope', '$location','$route', 'Paging', function($scope, $location, $route, Paging) {
    console.log("Movie");
    Paging.setInfo(null, "Five easy steps to configuring your device");
    $scope.skipping = { visible : false };

    $scope.skip = function() {
        Paging.setInfo(0, "Five easy steps to configuring your device");
        console.log("skip");
        $scope.skipping = { visible : true };
    };
    $scope.next = function() {
        $location.path("/1");
    };

}];