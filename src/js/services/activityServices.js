// by dribehance <dribehance.kksdapp.com>
angular.module("Tmai").factory("activityServices", function($rootScope, $http, config) {
    return {
        queryById: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ActivityController/activityDetailsResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
"token":$rootScope.token,
                    
                    "activity_id": id
                })
            }).then(function(data) {
                return data.data;
            });
        },
        queryCandidates: function(page, id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ActivityController/candidateResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
"token":$rootScope.token,
                    
                    "activity_id": id,
                    "pn": page.number,
                    "page_size": page.page_size
                })
            }).then(function(data) {
                return data.data;
            });
        },
        queryCandidate: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ActivityController/candidateDetailsResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
"token":$rootScope.token,
                    
                    "candidate_id": id,
                })
            }).then(function(data) {
                return data.data;
            });
        },
        vote: function(id) {
            return $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ActivityController/voteResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
"token":$rootScope.token,
                    
                    "candidate_id": id,
                })
            }).then(function(data) {
                return data.data;
            });
        },
        queryResult:function(id) {
            return  $http({
                // by dribehance <dribehance.kksdapp.com>
                url: config.url + "/app/ActivityController/voteResultResponse",
                method: "GET",
                params: angular.extend({}, config.common_params, {
"token":$rootScope.token,
                    
                    "activity_id": id,
                })
            }).then(function(data) {
                return data.data;
            });
        }
    }
});
