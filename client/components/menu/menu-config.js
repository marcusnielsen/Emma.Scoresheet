var _ = require('lodash');

module.exports = ['$stateProvider', '$urlRouterProvider', 'mnMenuStateValueProvider', function ($stateProvider, $urlRouterProvider, mnMenuStateValueProvider) {
  $urlRouterProvider.otherwise('/');

  _.forEach(mnMenuStateValueProvider.$get(), function (state) {
    $stateProvider
      .state(state.name, {
        url: state.url,
        templateUrl: state.templateUrl,
        controller: state.controller
      });
  });
}];
