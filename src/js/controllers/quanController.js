// by dribehance <dribehance.kksdapp.com>
var quanController = function($scope, walletServices, errorServices, toastServices, config) {
	toastServices.show()
	walletServices.queryQuan().then(function(data){
		toastServices.hide();
		if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
			$scope.quans = data.Result.unused;
			$scope.quans_expired = data.Result.used;
		}
		else {
			errorServices.autoHide("服务器错误");
		}
	})
}
