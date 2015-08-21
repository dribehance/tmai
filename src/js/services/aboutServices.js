// by dribehance <dribehance.kksdapp.com>
angular.module("Tmai").factory("aboutServices", function($rootScope, $http, config) {
    return {
        query: function(id) {
        	return $http({
        		// by dribehance <dribehance.kksdapp.com>
        	    url: config.url + "/app/UserCenter/aboutUs",
        	    method: "GET",
        	    params: angular.extend({}, config.common_params, {
        	        "token":$rootScope.token,
        	        "company_id":id
        	    })
        	}).then(function(data) {
        	    return data.data;
        	});
        }
    }
});
