// by dribehance <dribehance.kksdapp.com>
var activityController = function($scope,$routeParams, activityServices, errorServices, toastServices, config) {
	$scope.can_vote = false;
	toastServices.show();
	activityServices.queryById($routeParams.activity_id).then(function(data){
		toastServices.hide()
		if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
			$scope.can_vote = true;
			$scope.activity = data.Result.activity;
			return;
		}
		if (data.code == config.request.SUCCESS && data.status == 2){
			$scope.message = "活动已过期";
			return;
		}
		if (data.code == config.request.SUCCESS && data.status == 3){
			$scope.message = "活动即将开始";
			return;
		}
		errorServices.autoHide("服务器错误");
	})
}
