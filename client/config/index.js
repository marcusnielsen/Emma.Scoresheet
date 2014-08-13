'use strict';

module.exports = ['$compileProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider',
  function ($compileProvider, $translateProvider, $stateProvider, $urlRouterProvider) {

    //TODO: Refactor out the router and the translator.
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
        templateUrl: 'dist/html/page-components/home/home.html',
        controller: 'mnHomeController'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'dist/html/page-components/settings/settings.html',
        controller: 'mnSettingsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'dist/html/page-components/login/login.html',
        controller: 'mnLoginController'
      });
  }];
