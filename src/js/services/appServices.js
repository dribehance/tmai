// EventHandle
angular.module("Tmai").factory("appServices", function($rootScope, $routeParams, $location, $window, platformServices, errorServices, toastServices, config) {
    var routeChangeStart = function(e) {
        // userServices.checkAuth();
    }
    var routeChangeSuccess = function(e, currentRoute, prevRoute) {
        toastServices.hide();
        errorServices.hide();
        $rootScope.token = $routeParams.token || 'TOKEN_INVALID';
        navBarHandler(e, currentRoute, prevRoute);
    }
    var routeChangeError = function(e, currentRoute, prevRoute) {
        // $rootScope.back();
    }
    var navBarHandler = function(e, currentRoute, prevRoute) {
        // navbar top
        var path = $location.path(),
            off_top = path.indexOf("/bonus") != -1 || path.indexOf("/money") != -1 || path.indexOf("/products/") != -1 || path.indexOf("/about/") != -1;
        if (off_top) {
            // SharedState.turnOff("navbarTop");
            $rootScope.navbar.top = false;
        } else {
            // SharedState.turnOn("navbarTop");
            $rootScope.navbar.top = true;
        }
    }
    var onBackKeyDown = function() {
        $rootScope.$apply(function() {
            $rootScope.back();
        });
    }
    return {
        init: function() {
            // native app handle
            platformServices.init();
            // handle browser backkeydown
            if (!platformServices.isNative()) {
                // handle android backkeydown
                document.addEventListener("backbutton", onBackKeyDown, false);
                // backaction
                $rootScope.back = function() {
                    $window.history.back();
                }
            }
            
            // init navbar 
            $rootScope.navbar = {
                top: true,
                bottom: false
            };
            // event binding
            $rootScope.$on("$routeChangeStart", routeChangeStart);
            $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
            $rootScope.$on("$routeChangeError", routeChangeError);

            // static image
            $rootScope.staticImageUrl = config.imageUrl;
        }
    }
});
