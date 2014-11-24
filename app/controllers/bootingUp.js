module.exports = ['$scope', '$location','$route', function($scope, $location, $route) {
    console.log("BootingUp");
    console.log($route.current.params);
    if($route.current.params.handle) {
        $scope.handle = $route.current.params.handle;
    }

    $scope.next = function() {
        $location.url("ready");
    }

}];