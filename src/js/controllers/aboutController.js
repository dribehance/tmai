// by dribehance <dribehance.kksdapp.com>
var aboutController = function($scope, $routeParams, aboutServices, errorServices, toastServices, config) {
    toastServices.show();
    aboutServices.query($routeParams.company_id).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	$scope.us = data.Result.aboutus;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
