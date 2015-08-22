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
        .when('/:platform/:token/products/:product_id', {
            templateUrl: 'product.html',
            reloadOnSearch: false,
            controller: productController
        })
        .when('/:platform/:token/wallet', {
            templateUrl: 'wallet.html',
            reloadOnSearch: false,
            controller: walletController
        })
        .when('/:platform/:token/quan', {
            templateUrl: 'quan.html',
            reloadOnSearch: false,
            controller: quanController
        })
        .when('/:platform/:token/bonus/:bonus_id', {
            templateUrl: 'bonus.html',
            reloadOnSearch: false,
            controller: bonusController
        })
        .when('/:platform/:token/money', {
            templateUrl: 'money.html',
            reloadOnSearch: false,
            controller: moneyController
        })
        .when('/:platform/:token/record', {
            templateUrl: 'record.html',
            reloadOnSearch: false,
            controller: recordController
        })
        .when('/:platform/:token/invite', {
            templateUrl: 'invite.html',
            reloadOnSearch: false,
            controller: inviteController
        })
        .when('/:platform/:token/about/:company_id', {
            templateUrl: 'about.html',
            reloadOnSearch: false,
            controller: aboutController
        })
        .when('/:platform/:token/activities', {
            templateUrl: 'activities.html',
            reloadOnSearch: false,
            controller: activitiesController
        })
        .when('/:platform/:token/activities/:activity_id', {
            templateUrl: 'activity.html',
            reloadOnSearch: false,
            controller: activityController
        })
        .when('/:platform/:token/votes/:activity_id', {
            templateUrl: 'votes.html',
            reloadOnSearch: false,
            controller: votesController
        })
        .when('/:platform/:token/vote/:candidate_id', {
            templateUrl: 'vote.html',
            reloadOnSearch: false,
            controller: voteController
        })
        .when('/:platform/:token/vote_result/:activity_id', {
            templateUrl: 'vote_result.html',
            reloadOnSearch: false,
            controller: voteResultController
        })
        .otherwise({
            redirectTo: "/index"
        });
        $httpProvider.interceptors.push('tokenInterceptor');   
}).run(function(appServices){
    appServices.init();
});
