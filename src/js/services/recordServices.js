// by dribehance <dribehance.kksdapp.com>
angular.module("Tmai").factory("recordServices", function($rootScope, $http, config) {
    return {
        query: function(page) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/UserCenter/billResposne",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    "token": $rootScope.token,
                    "pn":page.number,
                    "page_size":page.page_size
                })
            }).then(function(data) {
                return data.data;
            });
        }
    }
});
