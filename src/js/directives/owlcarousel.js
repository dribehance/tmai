angular.module("Tmai").directive('wrapOwlcarousel', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            // $(element).owlCarousel(options);
            var style = {
                width: $(element).width() || $(window).width(),
                height: ($(element).width() || $(window).width())* 306 / 227,
                "background-image": "url('../images/default.png')",
                "background-repeat": "no-repeat",
                "background-position": "center center",
                "background-color": "#c8c8c8",
                "text-align": "center",
                "display": "inline-block",
                "vertical-align": "middle",
                "line-height": $(element).width() * 306 / 227 + "px",
            }
            $(element).css(style);
            $(element).find(".holder").css(style);
            $(element).find("img").css({
                "max-height": "100%",
                "max-width": "100%"
            });
            scope.$on('repeat_done', function() {
                // carousel化
                // $el.owlCarousel();
                $(element).owlCarousel(options);
            });
        }
    };
});
