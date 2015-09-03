var productController = function($scope,$rootScope, $routeParams,platformServices, productServices, errorServices, toastServices, config) {
    $scope.defaultImage = "../images/default.png";
    toastServices.show();
    productServices.queryById($routeParams.product_id).then(function(data) {
        toastServices.hide()
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.product = data.Result.product;
            $scope.banners = data.Result.banner;
            if($scope.banners.length==0) {
                $scope.banners = [{cover:"default.png"}]
            }
            $scope.images = data.Result.details;
            return;
        }
        if (data.code == config.request.SUCCESS && data.status == 2) {
            platformServices.open(data.url);
            return;
        }
        errorServices.autoHide("服务器错误");
    })
}
