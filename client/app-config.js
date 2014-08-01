'use strict';

module.exports = ['$compileProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider',
  function ($compileProvider, $translateProvider, $stateProvider, $urlRouterProvider) {

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
      .state('settings', {
        url: '/settings',
        templateUrl: 'dist/html/views/settings/settings.html',
        controller: 'mnSettingsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'dist/html/views/login/login.html',
        controller: 'mnLoginController'
      });
  }];
