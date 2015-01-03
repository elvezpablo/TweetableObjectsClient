/**
 * Created by paul.rangel on 12/31/14.
 */
module.exports = ['$http', '$q', function($http, $q) {

    var _VERSION = "1.0.0", _URL = "http://tweetkit.co:8080/tweetkit";

    var _getDevices = function(data) {
        var deferred = $q.defer();
        var url = _URL+"/devices";
        $http({
            "url" : url,
            "method" : "GET"
            }).success(function (data, status, headers, config) {
            if(data.success) {
                deferred.resolve(data);
            } else {
                deferred.reject(data.error);
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

   return {
       devices : function() {

       }
   }
}];