// by dribehance <dribehance.kksdapp.com>
var voteResultController = function($scope, $routeParams, activityServices, errorServices, toastServices, config) {
    toastServices.show();
    activityServices.queryResult($routeParams.activity_id).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.ranks = data.Result.candidates;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
