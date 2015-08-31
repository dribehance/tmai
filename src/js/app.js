angular.module('Tmai', [
    'ngRoute',
    'mobile-angular-ui',
    // 'LocalStorageModule'
])

.config(function($routeProvider,$httpProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'home.html',
            reloadOnSearch: false,
            controller: indexController,
        })
        .when('/products/:product_id', {
            templateUrl: 'product.html',
            reloadOnSearch: false,
            controller: productController
        })
        .when('/wallet', {
            templateUrl: 'wallet.html',
            reloadOnSearch: false,
            controller: walletController
        })
        .when('/quan', {
            templateUrl: 'quan.html',
            reloadOnSearch: false,
            controller: quanController
        })
        .when('/choose_quan/:product_id', {
            templateUrl: 'choose_quan.html',
            reloadOnSearch: false,
            controller: chooseQuanController
        })
        .when('/bonus/:bonus_id', {
            templateUrl: 'bonus.html',
            reloadOnSearch: false,
            controller: bonusController
        })
        .when('/money', {
            templateUrl: 'money.html',
            reloadOnSearch: false,
            controller: moneyController
        })
        .when('/record', {
            templateUrl: 'record.html',
            reloadOnSearch: false,
            controller: recordController
        })
        .when('/invite', {
            templateUrl: 'invite.html',
            reloadOnSearch: false,
            controller: inviteController
        })
        .when('/about/:company_id', {
            templateUrl: 'about.html',
            reloadOnSearch: false,
            controller: aboutController
        })
        .when('/activities', {
            templateUrl: 'activities.html',
            reloadOnSearch: false,
            controller: activitiesController
        })
        .when('/activities/:activity_id', {
            templateUrl: 'activity.html',
            reloadOnSearch: false,
            controller: activityController
        })
        .when('/votes/:activity_id', {
            templateUrl: 'votes.html',
            reloadOnSearch: false,
            controller: votesController
        })
        .when('/vote/:candidate_id', {
            templateUrl: 'vote.html',
            reloadOnSearch: false,
            controller: voteController
        })
        .when('/vote_result/:activity_id', {
            templateUrl: 'vote_result.html',
            reloadOnSearch: false,
            controller: voteResultController
        })
        .otherwise({
            redirectTo: "/index"
        });
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.interceptors.push('tokenInterceptor');   
}).run(function(appServices){
    appServices.init();
});