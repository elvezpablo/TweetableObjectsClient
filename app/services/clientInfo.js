/**
 * Created by paul.rangel on 11/30/14.
 */
module.exports = ['$window',  function($window) {

    var _platform, _device;

    var _init = function() {
        var userAgent = $window.navigator.userAgent;
        _platform = userAgent.match(/(Windows|OS X|iOS|Android)/);
        if(_platform && _platform[1])
            _platform = _platform[1].toLocaleLowerCase();
        console.log("_platform 0: "+_platform);
        switch ( _platform ) {
            case 'windows':
                _device = 'computer';
                // MS has a stupid way [surprisingly] to identify their OS versions.
                // Right now we are checking for Win 7 & 8, but if we ever want
                // to add screenshots here’s a table for reference:
                // http://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx#plttoken
                // 'Windows NT 6.1' // stupidly, windows 7
                // 'Windows NT 6.2' || 'Windows NT 6.3' // stupidly, windows 8
                // debug('windows version: '+ platform.os.version)
                if ( userAgent.match(/Windows NT 6\.1/) )
                    _platform = 'win7';
                if ( userAgent.match(/Windows NT 6\.(2|3)/) )
                    _platform = 'win8';
                break;

            case 'os x':
                _device = 'computer';
                _platform = 'mac';

                if ( userAgent.match(/iP(a|o)d/) ) {
                    _platform = 'ios';
                    _device = 'tablet'
                } else if ( userAgent.match(/iPhone/) ) {
                    _platform = 'ios';
                    _device = 'phone';
                }
                break;

            case 'android':
                _device = 'device';
                _platform = 'android';
                break;

            default:
                break
        }
    };
    _init();
    return {
        platform : _platform,
        device : _device
    }

}];
