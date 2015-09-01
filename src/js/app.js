angular.module('Tmai', [
    'ngRoute',
    'mobile-angular-ui',
    // 'LocalStorageModule'
])

.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'home.html',
            reloadOnSearch: false,
            controller: indexController,
        })
        .when('/:token/products/:product_id', {
            templateUrl: 'product.html',
            reloadOnSearch: false,
            controller: productController
        })
        .when('/:token/wallet', {
            templateUrl: 'wallet.html',
            reloadOnSearch: false,
            controller: walletController
        })
        .when('/:token/quan', {
            templateUrl: 'quan.html',
            reloadOnSearch: false,
            controller: quanController
        })
        .when('/:token/choose_quan/:product_id', {
            templateUrl: 'choose_quan.html',
            reloadOnSearch: false,
            controller: chooseQuanController
        })
        .when('/:token/bonus/:bonus_id', {
            templateUrl: 'bonus.html',
            reloadOnSearch: false,
            controller: bonusController
        })
        .when('/:token/money', {
            templateUrl: 'money.html',
            reloadOnSearch: false,
            controller: moneyController
        })
        .when('/:token/record', {
            templateUrl: 'record.html',
            reloadOnSearch: false,
            controller: recordController
        })
        .when('/:token/invite', {
            templateUrl: 'invite.html',
            reloadOnSearch: false,
            controller: inviteController
        })
        .when('/:token/about/:company_id', {
            templateUrl: 'about.html',
            reloadOnSearch: false,
            controller: aboutController
        })
        .when('/:token/activities', {
            templateUrl: 'activities.html',
            reloadOnSearch: false,
            controller: activitiesController
        })
        .when('/:token/activities/:activity_id', {
            templateUrl: 'activity.html',
            reloadOnSearch: false,
            controller: activityController
        })
        .when('/:token/votes/:activity_id', {
            templateUrl: 'votes.html',
            reloadOnSearch: false,
            controller: votesController
        })
        .when('/:token/vote/:candidate_id', {
            templateUrl: 'vote.html',
            reloadOnSearch: false,
            controller: voteController
        })
        .when('/:token/vote_result/:activity_id', {
            templateUrl: 'vote_result.html',
            reloadOnSearch: false,
            controller: voteResultController
        })
        .otherwise({
            redirectTo: "/index"
        });
    // $httpProvider.defaults.withCredentials = true;
    // delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.interceptors.push('tokenInterceptor');
}).run(function(appServices, $rootScope, $sce) {
    appServices.init();
    $rootScope.trustAsHtml = function(safehtml) {
        return $sce.trustAsHtml(safehtml)
    }
});
