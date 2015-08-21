// by dribehance <dribehance.kksdapp.com>
var voteController = function($scope, $rootScope, $routeParams, activityServices, errorServices, toastServices, config) {
    toastServices.show();
    activityServices.queryCandidate($routeParams.candidate_id).then(function(data){
    	toastServices.hide()
    	if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
    		$scope.candidate = data.Result.candidate;		
    	}
    	else {
    		errorServices.autoHide("服务器错误");
    	}
    })
    $scope.vote = function() {
        toastServices.show();
        activityServices.vote($routeParams.candidate_id).then(function(data) {
            toastServices.hide()
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                errorServices.autoHide("投票成功");
                $rootScope.back()
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
}
