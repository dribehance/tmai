// by dribehance <dribehance.kksdapp.com>
var votesController = function($scope, $routeParams, activityServices, errorServices, toastServices, config) {
    $scope.candidates = [];
    $scope.page = {
        number: 1,
        page_size: 6,
        message: "点击加载更多"
    }
    $scope.loadMore = function() {
        if ($scope.no_more) {
            return;
        }
        toastServices.show();
        $scope.page.message = "正在加载...";
        activityServices.queryCandidates($scope.page, $routeParams.activity_id).then(function(data) {
            toastServices.hide();
            $scope.page.message = "点击加载更多";
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $scope.candidates = $scope.candidates.concat(data.Result.candidates.list);
                $scope.no_more = $scope.candidates.length == data.Result.candidates.totalRow ? true : false;
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
