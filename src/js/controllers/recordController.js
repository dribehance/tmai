// by dribehance <dribehance.kksdapp.com>
var recordController = function($scope,recordServices, errorServices, toastServices, config) {
	$scope.records = [];
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
	    recordServices.query($scope.page).then(function(data) {
	        toastServices.hide();
	        $scope.page.message ="点击加载更多";
	        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
	            $scope.records = $scope.records.concat(data.Result.list);
	            $scope.no_more = $scope.records.length == data.Result.totalRow?true:false;
	        } else {
	            errorServices.autoHide("服务器错误");
	        }
	        if ($scope.no_more) {
	        	$scope.page.message = "没有了";
	        }
	        $scope.page.number++;
	    })
	
	}
	$scope.loadMore();
}
