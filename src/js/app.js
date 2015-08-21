angular.module('Tmai', [
    'ngRoute',
    'mobile-angular-ui',
    // 'LocalStorageModule'
])

.config(function($routeProvider,$httpProvider) {
    $routeProvider
        .when('/:token/', {
            templateUrl: 'home.html',
            reloadOnSearch: false,
            controller: indexController,
        })
        .when('/:token/product', {
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
        .when('/:token/about', {
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
        .when('/:token/vote/:candicator_id', {
            templateUrl: 'vote.html',
            reloadOnSearch: false,
            controller: voteController
        })
        .otherwise({
            redirectTo: "/index"
        });
        $httpProvider.interceptors.push('tokenInterceptor');   
}).run(function(appServices){
    appServices.init();
});
