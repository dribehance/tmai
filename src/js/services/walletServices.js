// by dribehance <dribehance.kksdapp.com>
angular.module("Tmai").factory("walletServices", function($http, $rootScope, config) {
    return {
        query: function() {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/briberyResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token": $rootScope.token
                })
            }).then(function(data) {
                return data.data;
            });
        },
        getBonusById: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/takeBriberyResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "bribery_id": id,
                    "token": $rootScope.token
                })
            }).then(function(data) {
                return data.data;
            });
        },
        queryQuan: function() {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/myVancherResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token": $rootScope.token
                })
            }).then(function(data) {
                return data.data;
            });
        },
        chooseQuanById: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/myVancherResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token": $rootScope.token,
                    "product_id": id
                })
            }).then(function(data) {
                return data.data;
            });
        },
        queryMoney: function(page) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/myCommissionResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token":$rootScope.token,
                    "pn":page.number,
                    "page_size":page.page_size
                })
            }).then(function(data) {
                return data.data;
            });
        }
    }
});
