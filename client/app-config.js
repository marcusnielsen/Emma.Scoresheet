'use strict';

module.exports = ['$compileProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider',
    function($compileProvider, $translateProvider, $stateProvider, $urlRouterProvider){

        $translateProvider.useStaticFilesLoader({
            prefix: '/dist/localization/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel):/);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'dist/html/views/home/home.html',
                controller: 'mnHomeController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'dist/app/contact/contact.html',
                controller: 'mnContactController'
            });
    }];
