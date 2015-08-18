angular.module('Tmai', [
    'ngRoute',
    'mobile-angular-ui',
    // 'LocalStorageModule'
])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false,
            controller: indexController
        })
        .when('/product', {
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
        .when('/bonus', {
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
        .when('/about', {
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
        .when('/vote/:candicator_id', {
            templateUrl: 'vote.html',
            reloadOnSearch: false,
            controller: voteController
        });
        
}).run(function(appServices){
    appServices.init();
});
