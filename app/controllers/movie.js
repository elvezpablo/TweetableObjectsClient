module.exports = ['$scope', '$location','$route', 'Paging', function($scope, $location, $route, Paging) {
    console.log("Movie");
    Paging.setInfo(null, "Five easy steps to configuring your device");
    $scope.skipping = false;
    $scope.skip = function() {
        Paging.setInfo(0, "Five easy steps to configuring your device");
        $scope.skipping = true;
    };
    $scope.next = function() {
        $location.path("/1");
    };

}];