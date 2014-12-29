/**
 * Created by paul.rangel on 12/29/14.
 */
/**
 * Created by paul.rangel on 11/26/14.
 */
module.exports = ['$timeout',function($timeout) {
    return {
        restrict : "E",
        replace : true,
        template : "<div class=\"circle\"></div>",
        scope : {
            message : "="
        },
        link : function(scope, element, attrs) {
            var state = attrs['state'] || 'boot';
            var circle = angular.element(element);
            if(state === 'boot') {
                circle.addClass('boot');
                $timeout(function() {
                    circle.removeClass('boot');
                    circle.addClass('ready');
                    $timeout(function() {
                        circle.removeClass('ready');
                        circle.addClass('settings');
                        circle.addClass('blink');
                        $timeout(function() {
                            circle.removeClass('blink');
                        },5000);
                    }, 5000)
                },5000);
            }
        }

    }
}];