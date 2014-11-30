module.exports = ['$scope', '$location', 'Paging', function($scope, $location, Paging) {
    console.log("Ready");
    Paging.setInfo(1, "STEP ONE: SETTING UP YOUR DEVICE");
    $scope.next = function() {
        $location.url("littlebits");
    }
}];