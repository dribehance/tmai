// by dribehance <dribehance.kksdapp.com>
var bonusController = function($scope, $routeParams, errorServices, toastServices, walletServices, config) {
    toastServices.show();
    walletServices.getBonusById($routeParams.bonus_id).then(function(data){
    	toastServices.hide();
    	if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
    		$scope.bonus = data.Result.money;
    	}
    	else {
    		errorServices.autoHide("服务器错误");
    	}
    });
}
