/**
 * Created by paul.rangel on 11/26/14.
 */
module.exports = ['$scope', '$location','$route','$cookies', 'Paging', function($scope, $location, $route,  $cookies, Paging) {
    $scope.paging = Paging;
    if($cookies.littlebits_device_id && $cookies.littlebits_device_id.length > 0) {
        $location.path("/configure");
    }
}];