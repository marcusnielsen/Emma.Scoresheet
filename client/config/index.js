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

    var stateNames = [
      'setting',
      'login',
      'user',
      'vehicle',
      'competition',
      'scoresheet-template'
    ];

    stateNames.forEach(function (stateName) {
      var pascalCasedStateName = stateName.charAt(0).toUpperCase() + stateName.slice(1);
      pascalCasedStateName = pascalCasedStateName.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });

      $stateProvider.state(stateName, {
        url: '/' + stateName,
        templateUrl: 'dist/html/page-components/' + stateName + '/' + stateName + '.html',
        controller: 'mn' + pascalCasedStateName + 'Controller'
      });
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'dist/html/page-components/home/home.html',
        controller: 'mnHomeController'
      });
  }];
