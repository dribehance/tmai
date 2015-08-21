// by dribehance <dribehance.kksdapp.com>
var activityController = function($scope,$routeParams, activityServices, errorServices, toastServices, config) {
	toastServices.show();
	activityServices.queryById($routeParams.activity_id).then(function(data){
		toastServices.hide()
		if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
			$scope.activity = data.Result.activity;	
		}
		else {
			errorServices.autoHide("服务器错误");
		}
	})
}
