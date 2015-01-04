/**
 * Created by paul.rangel on 11/26/14.
 */
module.exports = [function() {
    return {
        restrict : "E",
        replace : true,
        template : "<div id=\"timeline\"></div>",
        scope : {
            current : "="
        },
        link : function(scope, element, attrs) {
            var steps = attrs.steps || 6;
            var current = 0;

            var setUp = function(c) {
                //console.log("setup",c);
                for(var i=1; i <= steps; i++) {
                    if(c == i) {
                        element.append("<a class=\"current\"></a>");
                    } else {
                        element.append("<a></a>");
                    }
                }
            };

            var update = function(c) {
                //console.log("update: %o", c);
                if(c == null) {
                    element.children().removeClass("active");
                    element.children().removeClass("current");
                    return;
                }

                //if(c == 0) {
                //    element.children().removeClass("current");
                //    element.children().addClass("active");
                //    return;
                //}
                var dots = element.children('a');
                angular.forEach(dots, function(dot, index) {
                        if(index == c) {
                            angular.element(dot).addClass("active");
                            angular.element(dot).addClass("current");
                        } else {
                            angular.element(dot).removeClass("current");
                            angular.element(dot).removeClass("active");
                        }

                });
            };

            scope.$watch("current", function(_new, _old) {
                    current = _new;
                    update(current);

            });

            // uncomment for testing
            //element.on("click", function() {
            //    update((current <= steps)? ++current : 0 );
            //});
            setUp();
        }

    }
}];