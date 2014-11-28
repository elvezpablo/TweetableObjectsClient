/**
 * Created by paul.rangel on 11/26/14.
 */
module.exports = [function() {
    return {
        restrict : "E",
        replace : true,
        template : "<div id=\"timeline\">" +
        "<div class=\"line\"></div>" +
        "</div>",
        scope : {
            current : "="
        },
        link : function(scope, element, attrs) {
            var steps = attrs.steps || 5;
            var current = 0;

            var setUp = function(c) {
                for(var i=1; i <= steps; i++) {
                    if(c == i) {
                        element.append("<a class=\"current\">"+(i)+"</a>");
                    } else {
                        element.append("<a>"+(i)+"</a>");
                    }

                }
            };

            var update = function(c) {
                console.log("update: %o", c);
                if(c > 0) {
                    element.children().addClass("active");
                } else {
                    console.log("removing class");
                    element.children().removeClass("active");
                }
                var dots = element.children('a');
                angular.forEach(dots, function(dot, index) {
                        if(index == c) {
                            angular.element(dot).addClass("current");
                        } else {
                            angular.element(dot).removeClass("current");
                        }
                });
            };

            scope.watch("current", function(_new, _old) {
                    current = _new;
                    update(current);

            });

            // uncomment for testing
            //element.on("click", function() {
            //    update((current <= steps)? ++current : 0 );
            //});
            setUp(current);
        }

    }
}];