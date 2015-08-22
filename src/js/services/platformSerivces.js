angular.module("Tmai").factory("platformServices", function($rootScope, $window, $location, errorServices, toastServices, config) {
    // ios javascript cord invoke
    $window.connectWebViewJavascriptBridge = function(callback) {
        if ($window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                callback(WebViewJavascriptBridge)
            }, false)
        }
    }
    return {
        isAndroid: function() {
            var ua = $window.navigator.userAgent.toLowerCase();
            if (ua.indexOf("android") != -1) {
                return true;
            }
            return false;
        },
        isIos: function() {
            var ua = $window.navigator.userAgent.toLowerCase();
            if (ua.indexOf("ios") != -1) {
                return true;
            }
            return false;
        },
        isNative: function() {
            if (this.isAndroid() || this.isIos()) {
                return true;
            }
            return false;
        },
        init: function() {
            if (!this.isNative()) {
                return;
            }
            // back
            if (this.isAndroid()) {
                $rootScope.back = this.androidBack;
            }
            if (this.isIos()) {
                $rootScope.back = this.iosBack;
            }
        },
        androidBack: function() {
            android.mygoBack();
        },
        iosBack: function() {
            $window.connectWebViewJavascriptBridge(function(bridge) {
                bridge.send("ios_back", function(data) {
                    console.log("ios back");
                });
            });
        },
        notify: function(message) {
            if (!this.isNative()) {
                return;
            }
            switch (message) {
                case "TOKEN_INVALID":
                    if(this.isAndroid()) {
                        android.toLogin();
                    }
                    else {
                        // ios login
                    }
                    break;
                default:
                    ;
            }
        }
    }
});
