module.exports = ['$scope', '$location','$route', 'Config', 'Paging', function($scope, $location, $route, Config, Paging) {
    //console.log("Movie");
    Paging.setInfo(null, "Five easy steps to configuring your device");
    $scope.skipping = { visible : false };

    $scope.skip = function() {
        Paging.setInfo(0, "Five easy steps to configuring your device");
        $scope.skipping = { visible : true };
    };
    $scope.next = function() {
        $location.path("/1");
    };

}];