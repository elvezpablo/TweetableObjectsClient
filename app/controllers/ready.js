module.exports = ['$scope', '$location', function($scope, $location) {
    console.log("Ready");
    $scope.next = function() {
        $location.url("littlebits");
    }
}];