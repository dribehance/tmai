var productController = function($scope) {
        $scope.banners = ["../images/example_1.png", "../images/example_1.png"];
    }
    // by dribehance <dribehance.kksdapp.com>
var productController = function($scope, $routeParams, productServices, errorServices, toastServices, config) {
    toastServices.show();
    productServices.queryById($routeParams.product_id).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.product = data.Result.product;
            $scope.banners = data.Result.banner;
            $scope.images = data.Result.details;
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
