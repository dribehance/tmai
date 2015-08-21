// EventHandle
angular.module("Tmai").factory("appServices", function($rootScope, $location, $window,$routeParams, SharedState, errorServices, toastServices, config) {
    var routeChangeStart = function(e) {
        // userServices.checkAuth();
    }
    var routeChangeSuccess = function(e, currentRoute, prevRoute) {
        if ($routeParams.token){
            $rootScope.token = "c4d54c71e2a37602341e83d40e1237b2";
        }
        toastServices.hide();
        errorServices.hide();
        navBarHandler(e, currentRoute, prevRoute);
    }
    var routeChangeError = function(e, currentRoute, prevRoute){
        
        // $rootScope.back();
    }
    var navBarHandler = function(e, currentRoute, prevRoute) {
        // navbar top
        // var _navbars_t = ["/bonus","/money"];
        var path = $location.path();
        if (path.indexOf("/bonus") != -1 || path.indexOf("/money") != -1) {
            // SharedState.turnOff("navbarTop");
            $rootScope.navbar.top = false;
        } else {
            // SharedState.turnOn("navbarTop");
            $rootScope.navbar.top = true;
        }
        // // navbar bottom
        // var _navbars_b = ["/index"];
        // if (!_navbars_b.contains($location.path())) {
        //     // SharedState.turnOff("navbarBottom");
        //     $rootScope.hasNavbarBottom = false;
        // } else {
        //     // SharedState.turnOn("navbarBottom");
        //     $rootScope.hasNavbarBottom = true;
        // }
    }
    var onBackKeyDown = function() {
        $rootScope.$apply(function() {
            $rootScope.back();
        });
    }
    return {
        init: function() {
            // handle android backkeydown
            document.addEventListener("backbutton", onBackKeyDown, false);
            // rootScope binding
            $rootScope.$on("$routeChangeStart", routeChangeStart);
            $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
            $rootScope.$on("$routeChangeError", routeChangeError);
            // init navbar 
            $rootScope.navbar = {
                top:true,
                bottom:false
            }
            // static image
            $rootScope.staticImageUrl = config.imageUrl;
            // backaction
            $rootScope.back = function() {
                $window.history.back();
            }
        }
    }
});
