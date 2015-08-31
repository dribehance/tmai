// by dribehance <dribehance.kksdapp.com>
var chooseQuanController = function($scope, $routeParams, walletServices, platformServices, errorServices, toastServices, config) {
    toastServices.show()
    walletServices.chooseQuanById($routeParams.product_id).then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.quans = data.Result.unused;
            $scope.quans_expired = data.Result.used;
        } else {
            errorServices.autoHide("服务器错误");
        }
    });
    $scope.choose = function(q) {
        platformServices.chooseQuan(q);
    }
}
