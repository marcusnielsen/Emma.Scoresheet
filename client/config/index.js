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
      .state('setting', {
        url: '/setting',
        templateUrl: 'dist/html/page-components/setting/setting.html',
        controller: 'mnSettingController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'dist/html/page-components/login/login.html',
        controller: 'mnLoginController'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'dist/html/page-components/user/user.html',
        controller: 'mnUserController'
      });
  }];
