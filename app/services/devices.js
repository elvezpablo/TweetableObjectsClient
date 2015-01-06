/**
 * Created by paul.rangel on 12/31/14.
 */
module.exports = ['$http', '$q', function($http, $q) {

    var _VERSION = "1.0.0";
    var _URL = "http://tweetkit.co:8080/tweetkit";
    //var _URL = "http://localhost:8080/tweetkit";

    var _getDevices = function() {
        var deferred = $q.defer();
        var url = _URL+"/devices";
        $http({
            "url" : url,
            "method" : "GET"
            }).success(function (data, status, headers, config) {
            if(data) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    var _addUpdate = function(action, device_id, handle) {
        var deferred = $q.defer();
        var url = _URL;
        url += "/"+action+"/";
        url += device_id;
        url += "/handle/";
        url += handle;

        $http({
            "url" : url,
            "method" : "GET"
        }).success(function (data, status, headers, config) {
            if(data.success) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    var _get = function(device_id) {
        var deferred = $q.defer();
        var url = _URL;
        url += "/device/";
        url += device_id;

        $http({
            "url" : url,
            "method" : "GET"
        }).success(function (data, status, headers, config) {
            if(data) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    var _trigger = function(device_id) {
        var deferred = $q.defer();
        var url = _URL;
        url += "/trigger/device/";
        url += device_id;
        url += "/mode/welcome"

        $http({
            "url" : url,
            "method" : "GET"
        }).success(function (data, status, headers, config) {
            if(data.success) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

   return {
       update : function(device_id, handle) {
           return _addUpdate("update", device_id, handle);
       },
       add : function(device_id, handle) {
           return _addUpdate("add", device_id, handle);
       },
       device : function(device_id) {
            return _get(device_id);
       },
       list : function() {
            return _getDevices();
       },
       trigger : function(device_id) {
           return _trigger(device_id);
       }
   }
}];