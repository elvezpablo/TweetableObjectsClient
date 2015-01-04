/**
 * Created by paul.rangel on 11/19/14.
 */
module.exports = ['$http', '$q', function($http, $q) {

    var _VERSION = "1.0.0", _URL = "http://cloudsetup.cc", _wifi;

    var _identify = function() {
        var deferred = $q.defer();
        var url = _URL+"/identify/";

        $http({
            "url" : url,
            "method" : "GET",
            "data" : {},
            "headers" : {
                "Content-type" : "application/json"
            }
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    var _scanWifi = function() {
        var deferred = $q.defer();
        var url = _URL+"/scan-wifi/";
        $http.get(url).success(function (data, status, headers, config) {
            if(data && data.survey && data.survey.accessPoints) {
                deferred.resolve(data.survey.accessPoints);
            } else {
                deferred.reject({message: "No access points found"});
            }

        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });
        return deferred.promise;
    };

    var _setWifi = function(data) {
        var deferred = $q.defer();
        var url = _URL+"/set-wifi/";
        var str = "";
        angular.forEach(data, function(v, k) {
            str += k+"="+v+"&";
        });

        $http({
            "url" : url,
            "method" : "POST",
//            "params" : data,
            "data" : str,
            "headers" : {
                "Content-Type" : "application/x-www-form-urlencoded"
            }}).success(function (data, status, headers, config) {
            console.log(data);
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

    var _consoleMaker = function(color) {
        return function(k,v) {
            console.log("%c %s: %o", "background-color: "+color, k, v);
        }
    };
    var _log = _consoleMaker("lightpink");

    return {
        pingUrl : function() {
          return _URL+"/identify/";
        },
        identify : function() {
            return _identify();
        },
        scan : function() {
            _wifi = null;
            return _scanWifi();
        },
        set : function(ssid, mac, security, encryption) {
           _wifi = {
                "ssid" : ssid,
                "mac" : mac,
                "encryption" : encryption,
                "security" : security
            };
            _log("CloudbitWifiSetup set: ",_wifi);
        },
        save : function(password) {
            _log("CloudbitWifiSetup save: ",password);
            _wifi.password = password;
            return _setWifi(_wifi);
        }
    };
}];