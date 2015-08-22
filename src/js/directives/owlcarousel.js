angular.module("Tmai").directive('wrapOwlcarousel', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            // $(element).owlCarousel(options);
            scope.$on('repeat_done', function() {
                // carousel化
                // $el.owlCarousel();
                var style = {
                    width:$(element).width(),
                    height:$(element).width(),
                    "background-image":"url('../images/default.png')",
                    "background-repeat":"no-repeat",
                    "background-position":"center center",
                    "background-color":"#c8c8c8"
                }
                $(element).find("img").css(style);
            	$(element).owlCarousel(options);
            });
        }
    };
});
