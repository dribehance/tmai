// by dribehance <dribehance.kksdapp.com>
angular.module("Tmai").factory("productServices", function($rootScope, $http, config) {
    return {
        queryById: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ProductController/detailsResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
                    
                    "product_id":id
                })
            }).then(function(data) {
                return data.data;
            });
        }
    }
});
