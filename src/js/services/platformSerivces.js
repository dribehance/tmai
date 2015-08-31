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
                bridge.callHandler("iosBack", {}, function(data) {});
            });
        },
        notify: function(message) {
            if (!this.isNative()) {
                return;
            }
            alert("TOKEN_INVALID")
            if (this.isAndroid()) {
                android.toLogin();
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("toLogin", {}, function(data) {});
                });
            }
        },
        chooseQuan: function(quan) {
            if (!this.isNative()) {
                return;
            }
            if (this.isAndroid()) {
                android.setyhj(quan.vancher_id, quan.money);
            }
            if (this.isIos()) {
                $window.connectWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("quanAction", quan, function(data) {});
                });
            }
        }
    }
});
