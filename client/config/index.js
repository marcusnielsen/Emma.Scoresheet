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

    var stateDataCollection = [
      {name: 'login', parent: ''},
      {name: 'scoresheet-template', parent: ''},
      {name: 'competition', parent: ''},
      {name: 'user', parent: ''},
      {name: 'setting', parent: 'user.'},
      {name: 'vehicle', parent: 'user.'},
      {name: 'competition', parent: 'user.'}
    ];

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'dist/html/page-components/home/home.html',
        controller: 'mnHomeController'
      });

    stateDataCollection.forEach(function (stateData) {
      var pascalCasedStateName = stateData.name.charAt(0).toUpperCase() + stateData.name.slice(1);
      pascalCasedStateName = pascalCasedStateName.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });

      $stateProvider.state(stateData.parent + stateData.name, {
        url: '/' + stateData.name,
        templateUrl: 'dist/html/page-components/' + stateData.name + '/' + stateData.name + '.html',
        controller: 'mn' + pascalCasedStateName + 'Controller'
      });
    });
  }];
