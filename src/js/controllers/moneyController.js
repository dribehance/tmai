// by dribehance <dribehance.kksdapp.com>
var moneyController = function($scope, walletServices, errorServices, toastServices, config) {

    $scope.moneys = [];
    $scope.page = {
    	number:1,
    	page_size:4,
    	message:"点击加载更多"
    }
    $scope.loadMore = function() {
    	if ($scope.no_more) {
    		return;
    	}
        toastServices.show();
        $scope.page.message ="正在加载...";
        walletServices.queryMoney($scope.page).then(function(data) {
            toastServices.hide();
            $scope.page.message ="点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.total = data.Result.total_money;
                $scope.moneys = $scope.moneys.concat(data.Result.commissions.list);
                $scope.no_more = $scope.moneys.length == data.Result.commissions.totalRow?true:false;
            } else {
                errorServices.autoHide("服务器错误");
            }
            if ($scope.no_more) {
            	$scope.page.message = "没有了";
            }
        })

    }
    $scope.loadMore();
}