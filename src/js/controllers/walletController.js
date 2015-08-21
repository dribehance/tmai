// by dribehance <dribehance.kksdapp.com>
var walletController = function($scope, errorServices, toastServices, walletServices, config) {
	toastServices.show();
	walletServices.query().then(function(data){
		toastServices.hide();
		if (data.code = config.request.SUCCESS && data.status == config.response.SUCCESS) {
			$scope.bonus_newly = data.Result.uncheck;
			$scope.bonus_expired = data.Result.checked;
		}
		else {
			errorServices.autoHide("服务器错误")
		}
	});
}
